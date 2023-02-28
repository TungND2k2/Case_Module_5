import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../service/employerService";
import {userLogout} from "../service/userServices";

export default function Header() {
    let showUser = localStorage.getItem("userShow")
    let showEmployer = localStorage.getItem("employerShow")
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

                                <Link to="/add-post">
                                    <li className="nav-item"><a className="nav-link" href="">Create Post</a></li>
                                </Link>

                                {((showEmployer === null && (showUser === true || showUser === null)) || (showEmployer === true && (showUser === true || showUser === null))) && <>
                                    <Link to="/login">
                                        <li className="nav-item"><a className="nav-link" href="">Sign In Employer</a>
                                        </li>
                                    </Link>
                                    <Link to="/users/login">
                                        <li className="nav-item"><a className="nav-link">Sign In User</a></li>
                                    </Link>
                                </>}

                                {(showEmployer === 'false' || showEmployer === false) && <>
                                    <li className="nav-item"><a className="nav-link"
                                                                href="">{localStorage.getItem('employerName')}</a></li>
                                </>}
                                {(showUser === 'false' || showUser === false) && <>
                                    <li className="nav-item"><a className="nav-link"
                                                                href="">{localStorage.getItem('nameUser')}</a></li>
                                </>}
                                {(showEmployer === 'false' || showEmployer === false) && <>

                                        <li className="nav-item" onClick={()=>{
                                            dispatch(logout()||userLogout())
                                            localStorage.clear()
                                        }}><a className="nav-link" href="">logout</a></li>
                                </>}
                                {(showUser === 'false' || showUser === false) && <>
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
