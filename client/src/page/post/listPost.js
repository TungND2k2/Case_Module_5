import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deletePosts, getPosts} from "../../service/postService";
import swal from 'sweetalert';
import {useNavigate} from "react-router-dom";
export default function ListPost() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    let post = useSelector(state => {
        return state.post.post
    })
    useEffect(() => {
        dispatch(getPosts());
    }, []);
    const [checkedValues, setCheckedValues] = useState([]);

    function handleChange(event) {
        const isChecked = event.target.checked;
        const value = event.target.value;
        if (isChecked) {
            setCheckedValues([...checkedValues, value]);
        } else {
            setCheckedValues(checkedValues.filter((val) => val !== value)
            );
        }
    }
    const removePost = (values) => {
        dispatch(deletePosts(values)).then(()=>{
            console.log(values)
            navigate('/home')
        })
    }


    return (
        <>
            <div className="page-heading about-heading header-text"
                 style={{backgroundImage: ' url(assets/images/heading-6-1920x500.jpg'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-content">
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <h2>Jobs</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="contact-form">
                                <h5 style={{marginBottom: '15px'}}>Type</h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange} value="Contract"/> Contract

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange} value="Full time"/> Full time

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" onChange={handleChange} value="Part time"
                                               style={{height: "20px", width: "20px"}}/> Part time

                                    </label>
                                </div>

                                <br/>

                                <h5 style={{marginBottom: '15px'}}>Job </h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange} value="Accountant"/> Accountant

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange} value="Architect"/> Architect

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange} value="IT"/> IT

                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange} value="Sales agent"/> Sales agent

                                    </label>
                                </div>

                                <br/>

                                <h5 style={{marginBottom: '15px'}}>Career levels</h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange}/>

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange}/>

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange}/>

                                    </label>
                                </div>

                                <br/>

                                <h5 style={{marginBottom: '15px'}}>Education levels</h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange}/>

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange}/>

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange}/>

                                        <small>Salary</small>
                                    </label>
                                </div>

                                <br/>


                                <h5 style={{marginBottom: '15px'}}>Years of experience</h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange}/>

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange}/>

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange}/>

                                    </label>
                                </div>

                            </div>
                        </div>

                        <div className="container col-md-9">
                            <div className="row">
                                {post.map((item) => (
                                    <div className="col-md-6 py-5 mt-2">
                                        <div className="product-item">
                                            <a><img src={item.image}
                                                            alt=""/></a>
                                            <div className="down-content">
                                                <a href=""><h4>{item.title}</h4></a>

                                                <h6 className="number" >{item.salary}$</h6>

                                                <h4><small><i className="fa fa-briefcase"> </i>&nbsp;&nbsp;&nbsp;&nbsp;{item.position}
                                                     <br/>
                                                    <strong><i className="fa fa-building"></i>&nbsp;&nbsp;&nbsp;&nbsp; {item.workLocation}</strong>
                                                <br/>
                                                    <i className="fa fa-briefcase"> </i>&nbsp;&nbsp;&nbsp;&nbsp;{item.position}</small>
                                                </h4>

                                                <samp className="container">
                                                    <tspan className="row">
                                                        <strong title="Posted on"><i
                                                            className="fa fa-calendar"></i> {item.endTime}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <strong title="Type"><i
                                                            className="fa fa-file"></i> {item.status}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <strong title="Location"><i
                                                            className="fa fa-map-marker"></i> {item.workLocation}</strong>
                                                    </tspan>

                                                </samp>
                                            </div>
                                            <button onClick={()=>{
                                                swal({
                                                    title: "Are you sure?",
                                                    text: "Once deleted, you will not be able to recover this imaginary file!",
                                                    icon: "warning",
                                                    buttons: true,
                                                    dangerMode: true,
                                                })
                                                    .then((willDelete) => {
                                                        if (willDelete) {
                                                            removePost(item.id)

                                                            swal("Poof! Your imaginary file has been deleted!", {
                                                                icon: "success",
                                                            });
                                                        } else {
                                                            swal("Your imaginary file is safe!");
                                                        }
                                                    });
                                            }
                                            }>Delete</button>
                                        </div>
                                    </div>

                                ))}

                                <div className="col-md-12">
                                    <ul className="pages">
                                        <li><a href="#">1</a></li>
                                        <li className="active"><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
