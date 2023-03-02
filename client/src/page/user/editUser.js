import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {findById, userEdit} from "../../service/userServices";
import {Field, Form, Formik} from "formik";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../service/fireBase";

export default function EditUser(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(()=>{
        dispatch(findById(id)).then((e)=>{
            setUrls([e.payload.avatar])
        });
    },[])
    const user = useSelector(
        state => {
            return state.user.user
        }
    )
    const [images, setImages] = useState([]);

    const [urls, setUrls] = useState([]);


    const [progress, setProgress] = useState(0);

    const handleEditUser = (values)=> {
        let data = {...values}
        dispatch(userEdit(data)).then(()=>{
            navigate('/home')
        })
    }
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
                            console.log(urls)
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
            <body className="img js-fullheight" background-images="images/bg.jpg">
            <div className="container mt-2 py-5">
                <div className="container mt-2 form-group">
                    <div className="row mt-2 ">
                    <Formik initialValues={user} onSubmit={(values )=>{
                        console.log(values)
                        values.avatar = urls[urls.length-1]
                        handleEditUser(values)
                    }
                    }

                    enableReinitialize={true}>
                        <Form className="mt-5 container py-5">
                            <div className="form-group" style={{marginTop: '100px'}}>
                                <label htmlFor="exampleInputPassword1">Address</label>
                                <Field type="text"  name={'address'}  className="form-control border-dark"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Age</label>
                                <Field type="text"  name={'age'}  className="form-control border-dark"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Gender</label>
                                <Field type="text"  name={'gender'}  className="form-control border-dark"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Email</label>
                                <Field type="text" name={'email'}  className="form-control border-dark"/>
                            </div>
                            <div className="ml-3 form-group">
                                <label htmlFor="exampleInputPassword">Avatar</label>
                                <br/>
                                {urls !== undefined &&
                                    <><img src={urls[urls.length-1]} alt="" style={{width: 50}}/></>
                                }
                                <br/>
                                <input type='file' onChange={handleChange}>
                                </input>
                                <button className="btn btn-outline-success" style={{marginRight: 10}} type='button'
                                        onClick={handleUpload}>Up
                                </button>

                            </div>
                            <div className="form-group">
                            </div>
                            <button type="submit" className="btn btn-primary">EDIT</button>
                        </Form>
                    </Formik>
                    </div>
                </div>
            </div>
            </body>
        </>
    )
}