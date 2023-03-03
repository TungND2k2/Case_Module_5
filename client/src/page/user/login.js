import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {userLogin} from "../../service/userServices";


export default function LoginUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const initialValuesAdd = {
        username: "",
        userPassword: "",
    };
    const handleSubmit = async (values) => {
        console.log(localStorage.getItem('status')===  'User is not exit')
        await dispatch(userLogin(values));
        if (localStorage.getItem('status') === 'User is not exit' ||localStorage.getItem('status')=== 'Password is wrong'||localStorage.getItem('status')==null||localStorage.getItem('status')===undefined) {
            alert('User or password incorrect')
            navigate(('/users/login'))
        } else {
            navigate('/home')
        }
    };

    return (
        <>
            <body className="img js-fullheight" style={{backgroundImage: 'url(images/bg.jpg', width : "auto",height : "900px"}}>
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
                                <Formik initialValues={initialValuesAdd} onSubmit={handleSubmit}>
                                    <Form className="signin-form">
                                        <div className="form-group">
                                            <Field type="text" className="form-control" placeholder="Username"
                                                   name="username" required/>
                                        </div>
                                        <div className="form-group">
                                            <Field id="password-field" type="password" className="form-control"
                                                   name="userPassword"
                                                   placeholder="Password" required/>
                                            <span toggle="#password-field"
                                                  className="fa fa-fw fa-eye field-icon toggle-password"></span>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit"
                                                    className="form-control btn btn-primary submit px-3">Login
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
                                                <Link to="/register"> <a href="#" style={{color: '#fff'}}>Register Now
                                                    !!</a></Link>
                                            </div>
                                        </div>
                                    </Form>
                                </Formik>
                                <p className="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
                                <div className="social d-flex text-center">
                                    <a href="#" className="px-2 py-2 mr-md-1 rounded"><span
                                        className="ion-logo-facebook mr-2"></span> Google</a>
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
