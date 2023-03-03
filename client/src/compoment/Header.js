import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../service/employerService";
import {userLogout} from "../service/userServices";
import {useEffect, useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Header() {
    let showUser = localStorage.getItem("userShow")
    let showEmployer = localStorage.getItem("employerShow")
    let idEmployer = useSelector(state => {
        return state.employ.employers.id_employer
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>
            <header className="" style={{backgroundColor:'black'}}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link to={'/home'}><a className="navbar-brand" href=""><h2>Job Agency <em>Website</em></h2></a></Link>
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
                                    <Link to="/posts"> <a className="nav-link" href="">list Post
                                        <span className="sr-only"></span>


                                    </a></Link>
                                    <li className="nav-item"><a className="nav-link" href=""></a></li>
                                </>}
                                {(showUser === 'false' || showUser === false) && <>
                                    <DropdownButton   id="dropdown-basic-button" title={localStorage.getItem('nameUser')}>
                                        <Link to={`users/edit/`+localStorage.getItem('isUser')}><Dropdown.Item href="#/action-1">Edit information</Dropdown.Item></Link>
                                        <Link to={`users/changePassword/`+localStorage.getItem('isUser')}><Dropdown.Item href="#/action-2"> Change Password</Dropdown.Item></Link>
                                    </DropdownButton>


                                    <li className="nav-item"><a className="nav-link" href=""></a></li>
                                </>}
                                {(showEmployer === 'false' || showEmployer === false) && <>
                                    <DropdownButton   id="dropdown-basic-button" title={localStorage.getItem('employerName')}>
                                        <Link to={`employers/edit/${idEmployer}`}><Dropdown.Item href="#/action-1">Edit information</Dropdown.Item></Link>
                                    </DropdownButton>

                                        <li className="nav-item" onClick={()=>{
                                            dispatch(logout())
                                            localStorage.clear()
                                            navigate('/home')
                                        }}><a className="nav-link" href="">logout</a></li>
                                </>}
                                {(showUser === 'false' || showUser === false) && <>
                                    <li className="nav-item" onClick={() => {
                                        dispatch(userLogout())
                                        localStorage.clear()
                                        navigate('/home')
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
