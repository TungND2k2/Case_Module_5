import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../service/employerService";

export default function Header(){
    let show=useSelector(state => {
        return state.employ.show
    })
    console.log(show)
    const dispatch=useDispatch();
    const navigate=useNavigate();
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
                                        <span className="sr-only">(current)</span>
                                    </a></Link>

                                </li>

                                <li className="nav-item"><a className="nav-link" href="">Jobs</a></li>

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
                                {(show==='true'|| show===null||show===true) && <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Sign In </a>
                                    </li>
                                    <Link to="/login"> <li className="nav-item"><a className="nav-link" href="">Sign In Employer</a></li></Link>
                                    <Link to="/users/login"> <li className="nav-item"><a className="nav-link" href="">Sign In User</a></li></Link>
                                </>}
                                {(show==='false'||show===false) &&<>
                                        <li className="nav-item" onClick={()=>{
                                            dispatch(logout())
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
