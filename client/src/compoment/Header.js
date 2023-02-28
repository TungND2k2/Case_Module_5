import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../service/employerService";
import {userLogout} from "../service/userServices";

export default function Header() {
    let userShow = useSelector(state => {
        return state.user.userShow
    })

    let employerShow = useSelector(state => {
        return state.employ.employShow
    })


    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>
            <header className="">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href=""><h2>Job Agency <em>Website</em></h2></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link to="/home"> <a className="nav-link" href="">Home
                                        <span className="sr-only"></span>
                                    </a></Link>

                                </li>
                                <Link to="/jobs/search">
                                    <li className="nav-item"><a className="nav-link" href="">Jobs</a></li>
                                </Link>

                                <li className="nav-item"><a className="nav-link" href="">About us</a></li>

                                <li className="nav-item"><a className="nav-link" href="">Blog</a></li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"
                                       role="button" aria-haspopup="true" aria-expanded="false">More</a>

                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="">Team</a>
                                        <a className="dropdown-item" href="">Testimonials</a>
                                        <a className="dropdown-item" href="">Terms</a>
                                    </div>
                                </li>
                                {(employerShow === 'true' || employerShow === null || employerShow === true) && <>
                                    <Link to="/login">
                                        <li className="nav-item"><a className="nav-link" href="">Sign In Employer</a>
                                        </li>
                                    </Link>
                                    <Link to="/users/login">
                                        <li className="nav-item"><a className="nav-link">Sign In User</a></li>
                                    </Link>
                                </>}

                                {(employerShow === 'false' || employerShow === false) && <>
                                    <li className="nav-item"><a className="nav-link">{localStorage.getItem('name')}</a></li>
                                </>}
                                {(userShow === 'false' || userShow === false) && <>
                                    <li className="nav-item"><a className="nav-link">{localStorage.getItem('nameUser')}</a></li>
                                </>}
                                {(employerShow === 'false' || employerShow === false) && <>
                                    <li className="nav-item" onClick={() => {
                                        dispatch(logout() || userLogout())
                                        localStorage.clear()
                                    }}><a className="nav-link">logout</a></li>
                                </>}
                                {(userShow === 'false' || userShow === false) && <>
                                    <li className="nav-item" onClick={() => {
                                        dispatch(userLogout())
                                        localStorage.clear()
                                    }}><a className="nav-link" href="">logout</a></li>
                                </>}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
