import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import { getJobs} from "../../service/jobService";
import {addPosts} from "../../service/postService";
import {storage} from "../../service/fireBase";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
export default function AddPosts(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let show = useSelector(state => {
        console.log(state.employ.employers)
        return state.employ.employers
    })
    const jobs = useSelector(state => {
        return state.job.jobs
    })
    useEffect(()=>{
        dispatch(addPosts);
    },[])
    useEffect(()=>{
        dispatch(getJobs());
    },[])

    const handleAddPost = (values) => {
        let data = {...values,idEmployer : show.id_employer}
        dispatch(addPosts(data)).then(()=>{
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
    return(
        <>

            <div className="row">
                <div className="col-6 mt-5">
                    <Formik initialValues={{
                        salary : '',
                        workLocation: '',
                        position : '',
                        experience : '',
                        workTime : '',
                        endTime : '',
                        description : '',
                        recruitmentsNumber : '',
                        status : '',
                        title : '',
                        idJob : ''

                    }} onSubmit={(values )=>{
                        values.image = urls[0]
                        handleAddPost(values);
                    }}>
                        <Form s>
                            <div className="form-group" style={{marginTop: '100px',color : "white"}}>
                                <label htmlFor="exampleInputEmail1">Salary</label>
                                <Field type="number"  className={'form-control'} name={'salary'}/>
                            </div>
                            <div className="form-group" style={{color : "white"}}>
                                <label htmlFor="exampleInputPassword1">workLocation</label>
                                <Field type="text" className={'form-control'} name={'workLocation'}/>

                            </div>
                            <div className="form-group" style={{color : "white"}}>
                                <label htmlFor="exampleInputPassword1">Position</label>
                                <Field type="text" className={'form-control'} name={'position'}/>

                            </div>
                            <div className="form-group" style={{color : "white"}}>
                                <label htmlFor="exampleInputPassword1">Experience</label>
                                <Field type="text" className={'form-control'} name={'experience'}/>
                            </div>
                            <div className="form-group" style={{color : "white"}}>
                                <label htmlFor="exampleInputPassword1">WorkTime</label>
                                <Field type="text" className={'form-control'} name={'workTime'}/>
                            </div>
                            <div className="form-group" style={{color : "white"}}>
                                <label htmlFor="exampleInputPassword1">End time</label>
                                <Field type="date" className={'form-control'} name={'endTime'}/>
                            </div>
                            <div className="form-group" style={{color : "white"}}>
                                <label htmlFor="exampleInputPassword1">Description</label>
                                <Field type="text" className={'form-control'} name={'description'}/>
                            </div>
                            <div className="form-group" style={{color : "white"}}>
                                <label htmlFor="exampleInputPassword1">Recruitments Number</label>
                                <Field type="number" className={'form-control'} name={'recruitmentsNumber'}/>
                            </div>
                            <div className="form-group" style={{color : "white"}}>
                                <label htmlFor="exampleInputPassword1">Status</label>
                                <Field type="text" className={'form-control'} name={'status'}/>
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
                                <button className="btn btn-outline-success" style={{marginRight: 10}} type='button'
                                        onClick={handleUpload}>Up
                                </button>

                            </div>
                            <div className="form-group" style={{color : "white"}}>
                                <label htmlFor="exampleInputPassword1">title</label>
                                <Field type="text" className={'form-control'} name={'title'}/>
                            </div>
                            <div className="form-group">
                                <>
                                    <Field as='select' name={'idJob'}>
                                        {jobs !== undefined && jobs.map((item)=>(
                                            <option value={item.jobId}>{item.jobName}</option>
                                        ))}
                                    </Field>
                                </>
                            </div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </Form>
                    </Formik>
                </div>
            </div>

        </>
    )
}
