import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editPost, searchPost} from "../../service/postService";
import {Field, Form, Formik} from "formik";

const Edit = () => {
    // const [input, setInput] = useState({
    //     salary: '',
    //     workLocation: '',
    //     position: '',
    //     experience: '',
    //     workTime: '',
    //     endTime: '',
    //     description: '',
    //     recruitmentsNumber: '',
    //     status: '',
    //     image: '',
    //     title: '',
    //     idEmployer: '',
    //     idJob: ''
    // });
    // const setData = (e) => {
    //     const {name, value} = e.target;
    //     setInput((prevail) => {
    //         return {
    //             ...prevail,
    //             [name]: value
    //         }
    //     })
    // }
    const navigate = useNavigate();
    let {id} = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(searchPost(id))
    }, []);
    const posts = useSelector(state => {
        return state.post.post[0];
    })
    const handleEdit = (values) => {
        let data = [{...values}, id];
        dispatch(editPost(data)).then(() => {
            navigate('/home');
        })

    }
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
                                idEmployer: posts.idEmployer,
                                idJob: posts.idJob
                            }}
                                    onSubmit = {(values) => {
                                        console.log(values)
                                        handleEdit(values)
                                    }}
                                    enableReinitialize={true}>
                                <Form className="mt-5 container py-5">
                                    <div className="row">
                                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                                            <label className="form-label">salary</label>
                                            <Field type="text" name="salary"
                                                   className="form-control"/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <label className="form-label">workLocation</label>
                                            <Field type="text"
                                                   name="workLocation"
                                                   className="form-control"/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <label className="form-label">position</label>
                                            <Field type="text" name="position"
                                                   className="form-control"/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <label className="form-label">experience</label>
                                            <Field type="text"
                                                   name="experience"
                                                   className="form-control"/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <label className="form-label">workTime</label>
                                            <Field type="text" name="workTime"
                                                   className="form-control"/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-6 col-md-6 col-12">
                                            <label className="form-label">endTime</label>
                                            <Field type="date" name="endTime"
                                                   className="form-control"/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-12 col-md-12 col-12">
                                            <label className="form-label">recruitmentsNumber</label>
                                            <Field name='recruitmentsNumber'

                                                   className="form-control"/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-12 col-md-12 col-12">
                                            <label className="form-label">status</label>
                                            <Field name='status'
                                                   className="form-control"/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-12 col-md-12 col-12">
                                            <label className="form-label">image</label>
                                            <Field name='image'
                                                   className="form-control"/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-12 col-md-12 col-12">
                                            <label className="form-label">title</label>
                                            <Field name='title'
                                                   className="form-control"/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-12 col-md-12 col-12">
                                            <label className="form-label">idEmployer</label>
                                            <Field name='idEmployer'
                                                   className="form-control"/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-12 col-md-12 col-12">
                                            <label className="form-label">idJob</label>
                                            <Field name='idJob'
                                                   className="form-control"/>
                                        </div>
                                        <div className="mb-3 mb-3 col-lg-12 col-md-12 col-12">
                                            <label className="form-label">Description</label>
                                            <Field name='description'
                                                      className="form-control" cols='30' rows='4'></Field>
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
