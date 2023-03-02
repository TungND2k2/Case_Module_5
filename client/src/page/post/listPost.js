import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {deletePost, getPosts} from "../../service/postService";
import {Link, useNavigate} from "react-router-dom";
import swal from "sweetalert";


export default function ListPost() {
    const navigate = useNavigate();

    let post = useSelector(state => {
        console.log(state.post.post)
        return state.post.post
    })
    const dispatch = useDispatch()
    let currentUser = localStorage.getItem('employerName');
    useEffect(() => {
        dispatch(getPosts());
    }, []);
    const handleDelete = async (id) => {
        dispatch(deletePost(id)).then(()=>(
            dispatch(getPosts()).then(()=>{
                navigate('/home')
            })
        ))
    }
    return (
        <>
            <div className="banner header-text">
                <div className="owl-banner owl-carousel">
                    <div className="banner-item-01">
                        <div className="text-content">
                            <h4>Find your car today!</h4>
                            <h2>Lorem ipsum dolor sit amet</h2>
                        </div>
                    </div>
                    <div className="banner-item-02">
                        <div className="text-content">
                            <h4>Fugiat Aspernatur</h4>
                            <h2>Laboriosam reprehenderit ducimus</h2>
                        </div>
                    </div>
                    <div className="banner-item-03">
                        <div className="text-content">
                            <h4>Saepe Omnis</h4>
                            <h2>Quaerat suscipit unde minus dicta</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="latest-products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Featured Jobs</h2>
                                <a href="">view more <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        { post.map((item) => {
                            if (item.employerName === currentUser) {
                                return <>
                                    <div className="col-md-4">
                                        <div className="product-item">
                                            <a href=""><img src={item.image} alt=""/></a>
                                            <div className="down-content">
                                                <a href=""><h4>Lorem ipsum dolor sit amet</h4></a>

                                                <h4>${item.salary}</h4>
                                                <h4><small>
                                                    <i className="fa fa-briefcase"></i> {item.jobName+ ' '}<br/>
                                                    <i className="fa fa-briefcase"></i> {item.position}
                                                    <strong><i
                                                        className="fa fa-building"></i> {item.title}</strong></small>
                                                </h4>
                                                <small>
                                                    <strong title="Posted on"><i
                                                        className="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <strong title="Type"><i
                                                        className="fa fa-file"></i> {item.workTime}
                                                    </strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <strong title="Location"><i
                                                        className="fa fa-map-marker"></i> {item.workLocation}</strong>
                                                </small>
                                                <div className="container">
                                                    <Link to={`/posts/${item.idPost}`}>
                                                        <button className="btn btn-primary mt-2">Edit</button>
                                                    </Link>
                                                    <button className="btn btn-danger mt-2" onClick={()=>{
                                                        swal({
                                                            title: "Are you sure?",
                                                            text: "Once deleted, you will not be able to recover this imaginary file!",
                                                            icon: "warning",
                                                            buttons: true,
                                                            dangerMode: true,
                                                        })
                                                            .then((willDelete) => {
                                                                console.log(item)
                                                                if (willDelete) {
                                                                    swal("Poof! Your imaginary file has been deleted!", {
                                                                        icon: "success",
                                                                    }).then(() => {
                                                                        handleDelete(item.idPost)
                                                                    });
                                                                } else {
                                                                    swal("Your imaginary file is safe!")
                                                                }
                                                            });
                                                    }}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            } else {
                                <></>
                            }
                        })
                        }
                    </div>
                </div>
            </div>

            <div className="best-features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>About Us</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-content">
                                <p>Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit.
                                    Explicabo,
                                    esse consequatur alias repellat in excepturi inventore ad <a
                                        href="#">asperiores</a> tempora ipsa. Accusantium tenetur voluptate
                                    labore
                                    aperiam molestiae rerum excepturi minus in pariatur praesentium, corporis,
                                    aliquid
                                    dicta.</p>
                                <ul className="featured-list">
                                    <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                                    <li><a href="#">Consectetur an adipisicing elit</a></li>
                                    <li><a href="#">It aquecorporis nulla aspernatur</a></li>
                                    <li><a href="#">Corporis, omnis doloremque</a></li>
                                </ul>
                                <a href="" className="filled-button">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-image">
                                <img src="/assets/images/about-1-570x350.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services"
                 style={{backgroundImage: 'url(assets/images/other-image-fullscren-1-1920x900.jpg'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Latest blog posts</h2>

                                <a href="">read more <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-item">
                                <a href="#" className="services-item-image"><img
                                    src={'/assets/images/blog-1-370x270.jpg'}
                                    className="img-fluid" alt=""/></a>

                                <div className="down-content">
                                    <h4><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                        hic</a>
                                    </h4>

                                    <p style={{margin: '0'}}> John Doe &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020
                                        10:30 &nbsp;&nbsp;|&nbsp;&nbsp; 114</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item">
                                <a href="#" className="services-item-image"><img
                                    src="/assets/images/blog-2-370x270.jpg"
                                    className="img-fluid" alt=""/></a>

                                <div className="down-content">
                                    <h4><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit</a>
                                    </h4>

                                    <p style={{margin: '0'}}> John Doe &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020
                                        10:30   &nbsp;&nbsp;|&nbsp;&nbsp; 114</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item">
                                <a href="#" className="services-item-image"><img
                                    src="/assets/images/blog-3-370x270.jpg"
                                    className="img-fluid" alt=""/></a>

                                <div className="down-content">
                                    <h4><a href="#">Aperiam modi voluptatum fuga officiis cumque</a></h4>

                                    <p style={{margin: '0'}}> John Doe &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020
                                        10:30 &nbsp;&nbsp;|&nbsp;&nbsp; 114</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="happy-clients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Happy Clients</h2>

                                <a href="">read more <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="owl-clients owl-carousel text-center">
                                <div className="service-item">
                                    <div className="icon">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div className="down-content">
                                        <h4>John Doe</h4>
                                        <p className="n-m"><em>"Lorem ipsum dolor sit amet, consectetur an
                                            adipisicing
                                            elit. Itaque, corporis nulla at quia quaerat."</em></p>
                                    </div>
                                </div>

                                <div className="service-item">
                                    <div className="icon">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div className="down-content">
                                        <h4>Jane Smith</h4>
                                        <p className="n-m"><em>"Lorem ipsum dolor sit amet, consectetur an
                                            adipisicing
                                            elit. Itaque, corporis nulla at quia quaerat."</em></p>
                                    </div>
                                </div>

                                <div className="service-item">
                                    <div className="icon">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div className="down-content">
                                        <h4>Antony Davis</h4>
                                        <p className="n-m"><em>"Lorem ipsum dolor sit amet, consectetur an
                                            adipisicing
                                            elit. Itaque, corporis nulla at quia quaerat."</em></p>
                                    </div>
                                </div>

                                <div className="service-item">
                                    <div className="icon">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div className="down-content">
                                        <h4>John Doe</h4>
                                        <p className="n-m"><em>"Lorem ipsum dolor sit amet, consectetur an
                                            adipisicing
                                            elit. Itaque, corporis nulla at quia quaerat."</em></p>
                                    </div>
                                </div>

                                <div className="service-item">
                                    <div className="icon">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div className="down-content">
                                        <h4>Jane Smith</h4>
                                        <p className="n-m"><em>"Lorem ipsum dolor sit amet, consectetur an
                                            adipisicing
                                            elit. Itaque, corporis nulla at quia quaerat."</em></p>
                                    </div>
                                </div>

                                <div className="service-item">
                                    <div className="icon">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div className="down-content">
                                        <h4>Antony Davis</h4>
                                        <p className="n-m"><em>"Lorem ipsum dolor sit amet, consectetur an
                                            adipisicing
                                            elit. Itaque, corporis nulla at quia quaerat."</em></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="call-to-action">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="inner-content">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                                            corporis
                                            amet elite author nulla.</p>
                                    </div>
                                    <div className="col-lg-4 col-md-6 text-right">
                                        <a href="" className="filled-button">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
