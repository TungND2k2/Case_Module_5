import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getPosts} from "../../service/postService";
import {useSearchParams} from "react-router-dom";

export default function ListPost() {
    const search=useSearchParams()
    const dispatch = useDispatch()
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

    console.log(checkedValues)
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
                                        <input type="checkbox" style={{height:"20px",width:"20px"}} onChange={handleChange} value="Contract"/>  Contract

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height:"20px",width:"20px"}} onChange={handleChange} value="Full time"/>  Full time

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" onChange={handleChange} value="Part time" style={{height:"20px",width:"20px"}}/>  Part time

                                    </label>
                                </div>

                                <br/>

                                <h5 style={{marginBottom: '15px'}}>Job </h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height:"20px",width:"20px"}} onChange={handleChange} value="Accountant"/>  Accountant

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height:"20px",width:"20px"}} onChange={handleChange} value="Architect"/>  Architect

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height:"20px",width:"20px"}} onChange={handleChange} value="IT"/>  IT

                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="checkbox" style={{height:"20px",width:"20px"}} onChange={handleChange} value="Sales agent"/>  Sales agent

                                    </label>
                                </div>

                                <br/>

                                <h5 style={{marginBottom: '15px'}}>Career levels</h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height:"20px",width:"20px"}} onChange={handleChange}/>

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height:"20px",width:"20px"}} onChange={handleChange}/>

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height:"20px",width:"20px"}} onChange={handleChange}/>

                                    </label>
                                </div>

                                <br/>

                                <h5 style={{marginBottom: '15px'}}>Education levels</h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height:"20px",width:"20px"}} onChange={handleChange}/>

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height:"20px",width:"20px"}} onChange={handleChange}/>

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height:"20px",width:"20px"}} onChange={handleChange}/>

                                        <small>Salary</small>
                                    </label>
                                </div>

                                <br/>


                                <h5 style={{marginBottom: '15px'}}>Years of experience</h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height:"20px",width:"20px"}} onChange={handleChange}/>

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height:"20px",width:"20px"}} onChange={handleChange}/>

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height:"20px",width:"20px"}} onChange={handleChange}/>

                                    </label>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className="row">
                                {post.map((item) => (
                                    <div className="col-md-6">
                                        <div className="product-item">
                                            <a href=""><img src="/assets/images/product-1-370x270.jpg"
                                                            alt=""/></a>
                                            <div className="down-content">
                                                <a href=""><h4>Lorem ipsum dolor sit amet</h4></a>

                                                <h6>{item.salary}</h6>

                                                <h4><small><i className="fa fa-briefcase"></i> Medical / Health
                                                    Jobs <br/>
                                                    <strong><i className="fa fa-building"></i> BMI Kings Park
                                                        Hospital</strong></small></h4>

                                                <small>
                                                    <strong title="Posted on"><i
                                                        className="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <strong title="Type"><i
                                                        className="fa fa-file"></i> Contract</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <strong title="Location"><i
                                                        className="fa fa-map-marker"></i> London</strong>
                                                </small>
                                            </div>
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