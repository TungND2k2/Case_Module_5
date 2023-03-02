import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {findById, userEdit} from "../../service/userServices";
import {Field, Form, Formik} from "formik";
import {employerEdit, findByIdEmployer} from "../../service/employerService";

export default function EditEmployer(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams()
    useEffect(()=>{
        dispatch(findByIdEmployer(id)).then(()=>{
        });
    },[])
    const employer = useSelector(
        state => {
            console.log(state,111)
            return state.employ.employers
        }
    )
    console.log(id)
    const handleEditEmployer = (values)=> {
        let data = {...values}
        dispatch(employerEdit(data)).then(()=>{
            navigate('/home')
        })
    }
    return(
        <>
            <body className="img js-fullheight" background-images="images/bg.jpg">
            <div className="container mt-2 py-5">
                <div className="container mt-2 form-group">
                    <div className="row mt-2 ">
                        <Formik initialValues={{
                            idEmployer: id,
                            address : employer.address,
                            brand : employer.brand,
                            description : employer.description,
                            staffNumber : employer.staffNumber
                        }}
                                onSubmit={(values )=>{
                            console.log(values)
                            handleEditEmployer(values)
                        }}
                                enableReinitialize={true}>
                            <Form className="mt-5 container py-5">
                                <div className="form-group" style={{marginTop: '100px'}}>
                                    <label htmlFor="exampleInputPassword1">Address</label>
                                    <Field type="text"  name={'address'}  className="form-control border-dark"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Brand</label>
                                    <Field type="text"  name={'brand'} className="form-control border-dark"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Description</label>
                                    <Field type="text"  name={'description'}  className="form-control border-dark"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">StaffNumber</label>
                                    <Field type="text" name={'staffNumber'}  className="form-control border-dark"/>
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