import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {getJobs} from "../../service/jobService";
import {addPosts} from "../../service/postService";
import {storage} from "../../service/fireBase";

import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";

export default function AddPosts() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let show = useSelector(state => {
        return state.employ.employers
    })
    const jobs = useSelector(state => {
        return state.job.jobs
    })
    useEffect(() => {
        dispatch(addPosts);
    }, [])
    useEffect(() => {
        dispatch(getJobs());
    }, [])

    const handleAddPost = (values) => {
        let data = {...values, idEmployer: show.id_employer}
        dispatch(addPosts(data)).then(() => {
            console.log(data, 112)
            navigate('/home')
        })
    }


    const [images, setImages] = useState([]);

    const [urls, setUrls] = useState([]);

    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }
    };

    const handleUpload = () => {
        const promises = [];
        if (images.length > 0) {
            images.map((image) => {
                const storageRef = ref(storage, `images/${image.name}`);
                const uploadTask = uploadBytesResumable(storageRef, image);
                promises.push(uploadTask);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
                        setProgress(progress);
                    },
                    (error) => {
                        console.log(error);
                    },
                    async () => {
                        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
                            setUrls(prevState => [...prevState, downloadURLs])
                            console.log("File available at", downloadURLs);
                        });
                    }
                );
            });
        }
        Promise.all(promises)
            .then(() => alert("All images uploaded"))
            .catch((err) => console.log(err));

    }
    return (
        <>

            <body className="img js-fullheight" background-images="images/bg.jpg">
            <div className="container mt-2 py-5">
                <div className="container mt-2 form-group">
                    <div className="row mt-2 ">
                        <Formik initialValues={{
                            salary: '',
                            workLocation: '',
                            position: '',
                            experience: '',
                            workTime: '',
                            endTime: '',
                            description: '',
                            recruitmentsNumber: '',
                            status: '',
                            title: '',
                            job: [],
                        }}
                                onSubmit={async (values) => {
                                    values.image = urls[0]
                                    handleAddPost(values);
                                }}>
                            {({values}) => (
                                <Form className="mt-5 container py-5">
                                    <div className="row">
                                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                                            <label htmlFor="exampleInputEmail1">Salary</label>
                                            <Field type="number" className={'form-control'} name={'salary'}/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <label htmlFor="exampleInputPassword1">workLocation</label>
                                            <Field type="text" className={'form-control'} name={'workLocation'}/>

                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <label htmlFor="exampleInputPassword1">Position</label>
                                            <Field type="text" className={'form-control'} name={'position'}/>

                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <label htmlFor="exampleInputPassword1">Experience</label>
                                            <Field type="text" className={'form-control'} name={'experience'}/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <label htmlFor="exampleInputPassword1">WorkTime</label>
                                            <Field type="text" className={'form-control'} name={'workTime'}/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <label htmlFor="exampleInputPassword1">End time</label>
                                            <Field type="date" className={'form-control'} name={'endTime'}/>
                                        </div>

                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <label htmlFor="exampleInputPassword1">Recruitments Number</label>
                                            <Field type="number" className={'form-control'}
                                                   name={'recruitmentsNumber'}/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <label htmlFor="exampleInputPassword1">Status</label>
                                            <Field type="text" className={'form-control'} name={'status'}/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <label htmlFor="exampleInputPassword1">Title</label>
                                            <Field type="text" className={'form-control'} name={'title'}/>
                                        </div>
                                        <div className="ml-3 form-group">
                                            <label htmlFor="exampleInputPassword">Image</label>
                                            <br/>
                                            {urls.map(item => (
                                                <>
                                                    <img src={item} alt="" style={{width: 50}}/></>
                                            ))}
                                            <br/>
                                            <input type='file' onChange={handleChange}>
                                            </input>
                                            <button className="btn btn-outline-success" style={{marginRight: 10}}
                                                    type='button'
                                                    onClick={handleUpload}>Up
                                            </button>

                                        </div>
                                        <div className="mb-3 mb-3 col-lg-12 col-md-12 col-12">
                                            <label className="form-label">Description</label>
                                            <textarea name='description'
                                                      className="form-control" cols='30' rows='4'></textarea>
                                        </div>
                                        <div id="checkbox-group">Choose Job : &nbsp;&nbsp;&nbsp;&nbsp; </div>
                                        <div role="group" aria-labelledby="checkbox-group">
                                            {
                                                jobs && jobs.map((item) => (
                                                    <label>
                                                        <Field type="checkbox" name="job" value={'' + item.jobId}/>
                                                        {item.jobName} &nbsp;&nbsp;&nbsp;&nbsp;
                                                    </label>
                                                ))
                                            }
                                        </div>
                                        <button type="submit" className="btn btn-primary">Add</button>
                                    </div>
                                </Form>)}

                        </Formik>
                    </div>
                </div>
            </div>
            </body>
        </>
    )
}
