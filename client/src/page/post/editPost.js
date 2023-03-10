import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editPost, getPosts, searchPost} from "../../service/postService";
import {Field, Form, Formik} from "formik";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../service/fireBase";
import {getJobs} from "../../service/jobService";
const Edit = () => {
    const [images, setImages] = useState([]);

    const [urls, setUrls] = useState([]);

    const [progress, setProgress] = useState(0);

    const navigate = useNavigate();
    let {id} = useParams()
    const dispatch = useDispatch();
    const posts = useSelector(state => {
        return state.post.currentPost;
    })
    const jobs = useSelector(state => {
        return state.job.jobs;
    })
    const handleEdit = (values) => {
        let data = [{...values}, id];
        dispatch(editPost(data)).then(() => {
            dispatch(getPosts()).then(() => {
                navigate('/home');
            })
        })
    }
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
    const handleChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }
    };
    let idEmployer = localStorage.getItem('id_employer')
    useEffect(() => {
        dispatch(searchPost(id))
    }, []);
    useEffect(() => {
        dispatch(getJobs())
    }, [])

    return (
        <>
            <body className="img js-fullheight">
            <div className="container mt-2 py-5">
                <div className="container mt-2 form-group">
                    <div className="row mt-2 ">
                        {(posts !== undefined && posts) ? <>
                            <Formik initialValues={{
                                salary: posts.salary,
                                workLocation: posts.workLocation,
                                position: posts.position,
                                experience: posts.experience,
                                workTime: posts.workTime,
                                endTime: posts.endTime,
                                description: posts.description,
                                recruitmentsNumber: posts.recruitmentsNumber,
                                status: posts.status,
                                image: posts.image,
                                title: posts.title,
                                idEmployer: idEmployer,
                                job: []

                            }}
                                    onSubmit={(values) => {
                                        values.image = urls[urls.length - 1]
                                        handleEdit(values)
                                    }}
                                    enableReinitialize={true}>
                                <Form className="mt-5 container py-5 ">
                                    <div className="row">
                                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                                            <label className="form-label">salary</label>
                                            <Field type="number" name="salary"
                                                   className="form-control border-dark"/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <>
                                                <label className="form-label">workLocation</label>
                                                <Field className="form-control border-dark" as='select'
                                                       name={'workLocation'}>
                                                    <option value="C???uGi???y">C???u Gi???y</option>
                                                    <option value="H??????ng">H?? ????ng</option>
                                                    <option value="Ho??ngMai">Ho??ng Mai</option>
                                                    <option value="HaiB??Tr??ng">Hai B?? Tr??ng</option>
                                                    <option value="ThanhXu??n">Thanh Xu??n</option>
                                                </Field>
                                            </>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <>
                                                <label className="form-label">Position</label>
                                                <Field className="form-control border-dark" as='select'
                                                       name={'position'}>
                                                    <option value="Staff">Staff</option>
                                                    <option value="Leader">Leader</option>
                                                    <option value="Technicians">Technicians</option>
                                                </Field>
                                            </>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <>
                                                <label className="form-label">Experience</label>
                                                <Field className="form-control border-dark" as='select'
                                                       name={'experience'}>
                                                    <option value="1">1 Year</option>
                                                    <option value="2">2 Year</option>
                                                    <option value="3">3 Year</option>
                                                </Field>
                                            </>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <>
                                                <label className="form-label">Work Time</label>
                                                <Field className="form-control border-dark" as='select'
                                                       name={'workTime'}>
                                                    <option value="Contract">Contract</option>
                                                    <option value="Fulltime">Full time</option>
                                                    <option value="Parttime">Part time</option>
                                                </Field>
                                            </>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <label className="form-label">endTime</label>
                                            <Field type="date" name="endTime"
                                                   className="form-control border-dark"/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-12 col-md-12 col-12">
                                            <label className="form-label">recruitmentsNumber</label>
                                            <Field name='recruitmentsNumber'

                                                   className="form-control border-dark"/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-12 col-md-12 col-12">
                                            <label className="form-label">status</label>
                                            <Field name='status' className="form-control border-dark"/>

                                        </div>


                                        <div className="mb-3 mb-3 col-lg-12 col-md-12 col-12">
                                            <label className="form-label">title</label>
                                            <Field name='title'
                                                   className="form-control border-dark"/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-12 col-md-12 col-12">
                                            <label className="form-label">Description</label>
                                            <Field name='description'
                                                   className="form-control border-dark" cols='50' rows='6'></Field>
                                        </div>

                                        <div className="mb-3 mb-3 col-lg-12 col-md-12 col-12">
                                            <label className="form-label">image</label>
                                            <br/>
                                            {urls.map(item => (
                                                <>
                                                    <img src={item} alt="" style={{width: "450px"}}/></>
                                            ))}
                                            <br/>
                                            <div className="row mt-4">
                                                <div>
                                                    <input type='file' name="image" onChange={handleChange}>
                                                    </input>
                                                </div>
                                                <div className="col-lg-3">
                                                    <button className="btn btn-outline-success" style={{marginRight: 10}}
                                                            type='button'
                                                            onClick={handleUpload}>Up
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-12 col-md-12 col-12">
                                            <Field name='idEmployer' style={{visibility:" hidden"}}
                                                   className="form-control border-dark"/>
                                        </div>
                                        <div id="checkbox-group"></div>
                                        <div role="group" aria-labelledby="checkbox-group"
                                             style={{display: 'flex', justifyContent: "space-evenly", flex: '1'}}>
                                            {
                                                jobs.map((item) => (
                                                    <label style={{marginLeft: '30px', marginRight: '95px'}}>

                                                        <Field type="checkbox" name="job"  value={'' + (item.jobId)}/>
                                                        <h5 style={{padding: '-30px'}}>{item.jobName} &nbsp;&nbsp;&nbsp;&nbsp;</h5>
                                                    </label>
                                                ))
                                            }
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </Form>
                            </Formik>

                        </> : <>

                        </>}

                    </div>
                </div>
            </div>
            </body>
        </>

    )
}
export default Edit;
