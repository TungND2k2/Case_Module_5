import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deletePost, getPosts, searchPost} from "../../service/postService";


export default function PostDetail() {
    let {id} = useParams()
    let post = useSelector(state => {
        console.log(state.post.post)
        return state.post.post
    })
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchPost(id));
    }, []);

    return (
        <>
            <div className="page-heading about-heading header-text"
                 style={{backgroundImage: 'url(assets/images/heading-6-1920x500.jpg'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-content">

                                <h2>{post.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-8">
                            <p className="lead">
                                <i className="fa fa-map-marker"></i> {post.workLocation} &nbsp;&nbsp;
                                <i className="fa fa-calendar"></i> 20-06-2020 &nbsp;&nbsp;
                                <i className="fa fa-file"></i> {post.workTime}
                            </p>

                            <br/>
                            <br/>

                            <div className="form-group">
                                <h4>Job Description</h4>
                            </div>

                            <p>{post.description}
                            </p>

                            <br/>

                        </div>

                        <div className="col-md-3 col-sm-4">
                            <div className="contact-form">
                                <div className="form-group">
                                    <button type="submit" className="filled-button btn-block">Apply for this job
                                    </button>
                                </div>
                            </div>

                            <div>
                                <img src={post.image} alt="" className="img-fluid wc-image"/>
                            </div>

                            <br/>

                            <ul className="social-icons text-center">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-behance"></i></a></li>
                            </ul>

                            <br/>

                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="row">


                        <div className="col-md-3">
                            <div className="section-heading">
                                <h4>Job Details</h4>
                            </div>

                            <div className="left-content">
                                <p>
                                    <h5>Position</h5>
                                    <strong>{post.position}</strong>
                                </p>

                                <p>
                                    <h5>Job name</h5>
                                    <strong>
                                        {post.jobName+' '}
                                    </strong>
                                </p>

                                <p>
                                    <h5>Salary</h5>
                                    <strong>
                                        {post.salary}
                                    </strong>
                                </p>

                                <p>
                                    <h5>Recruitments Number</h5>
                                    <strong>
                                        {post.recruitmentsNumber}
                                    </strong>
                                </p>

                                <p>
                                    <h5>Website</h5>
                                    <strong>
                                        <a href="http://www.cannonguards.com/">http://www.cannonguards.com/</a>
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}