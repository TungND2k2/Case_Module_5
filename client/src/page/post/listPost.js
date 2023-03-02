import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {deletePost, getPosts} from "../../service/postService";
import {Link, useNavigate} from "react-router-dom";
import swal from "sweetalert";


export default function ListPost() {
    const navigate = useNavigate();

    let posts = useSelector(state => {
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
            {posts!==undefined&& <>
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
                            { posts.map((item) => {
                                if (item.employerName === currentUser) {
                                    return <>
                                        <div className="col-md-4">
                                           <div className="product-item">

                                               <br/>
                                               <Link to={'/jobs-detail/'+item.idPost}>
                                                <a href=""><img style={{width:'350px',height:'255px'}} src={item.image} alt=""/></a>
                                               </Link>
                                                   <div className="down-content">
                                                    <a href=""><h4>Lorem ipsum dolor sit amet</h4></a>

                                                    <h4>${item.salary}</h4>
                                                    <h4><small><i
                                                        className="fa fa-briefcase"></i> {item.jobName+' '}<br/>
                                                        <i
                                                        className="fa fa-briefcase"></i>{item.position}<br/>
                                                        <strong><i
                                                            className="fa fa-building"></i> {item.title}</strong></small>
                                                        <Link to={`/posts/${item.idPost}`} style={{float:'right',color:'blue'}}>
                                                            <i className="fa-solid fa-pen-to-square" ></i>
                                                        </Link>
                                                        <br/>
                                                        <i className="fa-solid fa-trash" style={{float:'right',color:'red'}} onClick={()=>{
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
                                                        }}></i>


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

                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </>
                                }
                            })
                            }
                        </div>
                    </div>
                </div>

            </>}

        </>
    )
}
