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
                                <Form className="mt-5 container py-5">
                                    <div className="row">
                                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                                            <label className="form-label">Salary</label>
                                            <Field type="number" className="form-control border-dark" name={'salary'}/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                                <label className="form-label">Work Location</label>
                                                <Field className="form-control border-dark" as='select'
                                                       name={'workLocation'}>
                                                    <option value={'CầuGiấy'}>Cầu Giấy</option>
                                                    <option value={'HàĐông'}>Hà Đông</option>
                                                    <option value={'HoàngMai'}>Hoàng Mai</option>
                                                    <option value={'HaiBàTrưng'}>Hai Bà Trưng</option>
                                                    <option value={'ThanhXuân'}>Thanh Xuân</option>
                                                </Field>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">

                                                <label className="form-label">Position</label>
                                                <Field className="form-control border-dark" as='select'
                                                       name={'position'}>
                                                    <option value={'Staff'}>Staff</option>
                                                    <option value={'Leader'}>Leader</option>
                                                    <option value={'Technicians'}>Technicians</option>
                                                </Field>

                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                                <label className="form-label">Years of experience</label>
                                                <Field className="form-control border-dark" as='select'
                                                       name={'experience'}>
                                                    <option value={'1Year'}>1 Year</option>
                                                    <option value={'2Year'}>2 Year</option>
                                                    <option value={'3Year'}>3 Year</option>
                                                </Field>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                                <label className="form-label">Work Time</label>
                                                <Field className="form-control border-dark" as='select'
                                                       name={'workTime'}>
                                                    <option value={'Contract'}>Contract</option>
                                                    <option value={'Fulltime'}>Full time</option>
                                                    <option value={'Parttime'}>Part time</option>
                                                </Field>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <label className="form-label">End time</label>
                                            <Field type="date" className="form-control border-dark" name={'endTime'}/>
                                        </div>


                                    </div>
                                    <div className=" col-12">
                                        <label className="form-label">Recruitments Number</label>
                                        <Field type="number" className="form-control border-dark"
                                               name={'recruitmentsNumber'}/>
                                    </div>
                                    <div className=" col-12">
                                        <label className="form-label">Status</label>
                                        <Field type="text" className="form-control border-dark" name={'status'}/>
                                    </div>
                                    <div className=" col-12">
                                        <label className="form-label">Title</label>
                                        <Field type="text" className="form-control border-dark" name={'title'}/>
                                    </div>
                                    <div className=" col-12">
                                        <label className="form-label">Description</label>
                                        <Field style={{height : '150px'}}  type="text" className="form-control border-dark" name={'description'}/>
                                    </div>
                                        <div className="row">

                                        <div className="mb-3 mb-3 col-lg-12 col-md-12 col-12">
                                            <label className="form-label">image</label>
                                            <br/>
                                            {urls.map(item => (
                                                <>
                                                    <img src={item} alt="" style={{width: 50}}/></>
                                            ))}
                                            <br/>
                                            <input type='file' name="image" onChange={handleChange}>
                                            </input>
                                            <button className="btn btn-outline-success" style={{marginRight: 10}}
                                                    type='button'
                                                    onClick={handleUpload}>Up
                                            </button>
                                        </div>
                                        <div id="checkbox-group">Choose Job : &nbsp;&nbsp;&nbsp;&nbsp;<i
                                            className="fa-solid fa-user-doctor"></i> </div>
                                        <div role="group" aria-labelledby="checkbox-group"
                                             style={{display: 'flex', justifyContent: "space-evenly", flex: '1'}}>
                                            {
                                                jobs.map((item) => (
                                                    <label style={{marginLeft: '30px', marginRight: '95px'}}>

                                                        <Field type="checkbox" name="job" value={'' + (item.jobId)}/>
                                                        <h5 style={{padding: '-30px'}}>{item.jobName} &nbsp;&nbsp;&nbsp;&nbsp;</h5>

                                                    </label>
                                                ))
                                            }
                                        </div>
                                        <button type="submit" className="btn btn-primary">Add</button>
                                    </div>
                                </Form>

                        </Formik>
                    </div>
                </div>
            </div>
            </body>
        </>
    )
}
