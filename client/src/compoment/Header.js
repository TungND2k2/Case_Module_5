import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../service/employerService";
import {userLogout} from "../service/userServices";
import {useEffect, useState} from "react";

export default function Header() {
    let showUser = localStorage.getItem("userShow")
    let showEmployer = localStorage.getItem("employerShow")
    // let showEmployer=useSelector(state => {
    //     return state.employ.employerShow
    //
    // })
    let idUser=useSelector(state => {
        console.log(state)
        return state.user.user.idUser
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
                                        <a className="dropdown-item" href="">1</a>
                                        <a className="dropdown-item" href="">2</a>
                                        <a className="dropdown-item" href="">3</a>
                                    </div>
                                </li>
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
                                    <Link to="/add-post"> <a className="nav-link" href="">Add Post
                                        <span className="sr-only"></span>
                                    </a></Link>
                                    <li className="nav-item"><a className="nav-link" href="">{localStorage.getItem('employerName')}</a></li>
                                </>}
                                {(showUser === 'false' || showUser === false) && <>
                                    <Link to={`users/edit/${idUser}`}><li className="nav-item"><a className="nav-link" href="">{localStorage.getItem('nameUser')}</a></li> </Link>
                                </>}
                                {(showEmployer === 'false' || showEmployer === false) && <>

                                    <li className="nav-item" onClick={() => {
                                        dispatch(logout() || userLogout())
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
