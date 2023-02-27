import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getPosts} from "../../service/postService";

export default function ListPost() {
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
