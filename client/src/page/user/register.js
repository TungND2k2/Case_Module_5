import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { userRegister} from "../../service/userServices";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

export default function RegisterUser(){
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const initialValuesAdd = {
        userName: "",
        userPassword: "",
        userPasswordAgain: "",
    };
    const validationSchema = Yup.object().shape({
        userName: Yup.string().required("Vui lòng nhập tên đăng nhập"),
        userPassword: Yup.string()
            .required("Vui lòng nhập mật khẩu")
            .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
            .max(14, "Mật khẩu chỉ có nhiều nhất 14 ký tự")
    });
    const handleSubmit = async (values) => {
        if(values.userPassword!==values.userPasswordAgain){
            alert('Password is incorrect')
        }else {
            let data={
                userName:values.userName,
                userPassword:values.userPassword
            }
            await dispatch(userRegister(data));
            alert('Registered successfully')
            navigate('/user/login')
        }

    };
    return(
        <>
            <body className="img js-fullheight" style={{background: 'url(images/bg.jpg'}}>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                            <h2 className="heading-section">User</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="login-wrap p-0">
                                <h3 className="mb-4 text-center">Have an account?</h3>
                                <Formik initialValues={initialValuesAdd} onSubmit={handleSubmit}
                                        validationSchema={validationSchema}
                                >
                                    <Form  className="signin-form">
                                        <div className="form-group">
                                            <Field type="text" className="form-control" placeholder="Username" name="userName" required/>
                                        </div>
                                        <div className="form-group">
                                            <Field id="password-field" type="password" className="form-control" name="userPassword"
                                                   placeholder="Password" required/>
                                            <span toggle="#password-field"
                                                  className="fa fa-fw fa-eye field-icon toggle-password"></span>
                                            <ErrorMessage name={'userPassword'}/>
                                        </div>
                                        <div className="form-group">
                                            <Field id="password-field" type="password" className="form-control" name="userPasswordAgain"
                                                   placeholder="Password Again" required/>
                                            <span toggle="#password-field"
                                                  className="fa fa-fw fa-eye field-icon toggle-password"></span>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="form-control btn btn-primary submit px-3">Sign
                                                Up
                                            </button>
                                        </div>
                                        <div className="form-group d-md-flex">
                                            <div className="w-50">
                                                <label className="checkbox-wrap checkbox-primary">Remember Me
                                                    <input type="checkbox" checked/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="w-50 text-md-right">
                                                <a href="#" style={{color: '#fff'}}>Forgot Password</a>
                                            </div>
                                        </div>
                                    </Form>

                                </Formik>
                                <p className="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
                                <div className="social d-flex text-center">
                                    <a href="#" className="px-2 py-2 mr-md-1 rounded"><span
                                        className="ion-logo-facebook mr-2"></span> Facebook</a>
                                    <a href="#" className="px-2 py-2 ml-md-1 rounded"><span
                                        className="ion-logo-twitter mr-2"></span> Twitter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </body>
        </>
    )
}
