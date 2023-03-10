import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {changePassword, findById, userEdit} from "../../service/userServices";
import {Field, Form, Formik} from "formik";

export default function ChangePassword(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams()

    const user = useSelector(
        state => {
            // console.log(state.user,11)
            return state.user.user
        }
    )
    const handleChangePassword = (values)=> {
        console.log(values)
        if (values.newPassword!==values.newPasswordAgain){
            alert('Password incorect')
        }else {
            let dataInput={
                oldPassword:values.oldPassword,
                newPassword:values.newPassword
            }
            let data=[{...dataInput},id]
            dispatch(changePassword(data)).then(()=>{
                    navigate('/home')
                }

            )
            }
         }


    useEffect(()=>{
        dispatch(findById(id)).then(()=>{
        });
    },[])
    return(
        <>
            <body className="img js-fullheight" background-images="images/bg.jpg">
            <div className="container mt-2 py-5">
                <div className="container mt-2 form-group">
                    <div className="row mt-2 ">
                        <Formik initialValues={{
                            oldPassword : '',
                            newPassword  : '',
                            newPasswordAgain  : ''
                        }} onSubmit={(values )=>{
                            console.log(values,5)
                            handleChangePassword(values)
                        }}
                        >
                            <Form className="mt-5 container py-5">
                                <div className="form-group" style={{marginTop: '100px'}}>
                                    <label htmlFor="exampleInputPassword1">Old password</label>
                                    <Field type="password"  name={'oldPassword'}  className="form-control border-dark"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">New Password</label>
                                    <Field type="password"  name={'newPassword'}  className="form-control border-dark"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Input Password Again</label>
                                    <Field type="password"  name={'newPasswordAgain'}  className="form-control border-dark"/>
                                </div>
                                <button type="submit" className="btn btn-primary">UPDATE</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
            </body>
        </>
    )
}
