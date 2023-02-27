import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getPosts, search} from "../../service/postService";
import {useNavigate, useSearchParams} from "react-router-dom";

export default function Search() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let post = useSelector(state => {
        return state.post.search
    })

    const [checkedValues, setCheckedValues] = useState([]);
    const [checkedValuesDelete, setCheckedValuesDelete] = useState([]);
    const [queryStringAPI, setQueryStringAPI] = useState('');

    function handleChange(event) {
        const isChecked = event.target.checked;
        const value = event.target.value;
        if (isChecked) {
            setCheckedValues([...checkedValues, value]);
            setCheckedValuesDelete(checkedValuesDelete.filter((val) => val !== value)
            )
        } else {
            setCheckedValues(checkedValues.filter((val) => val !== value)
            );
            setCheckedValuesDelete([...checkedValuesDelete, value])

        }
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD:client/src/page/post/listPost.js
=======
>>>>>>> origin/dev

    const searchParams = new URLSearchParams();
    useEffect(() => {
        for (let i = 0; i < checkedValues.length; i++) {
            let name = ''
            switch (checkedValues[i]) {
                case 'Contract':
                case 'FullTime':
                case 'PartTime':
                    name = 'workTime';
                    break;
                case 'IT' :
                case 'Marketing' :
                case 'Engineer' :
                case 'Sell':
                    name = 'jobName';
                    break;
                case 'Technicians' :
                case 'Staff' :
                case 'Leader':
                    name = 'position';
                    break;
                case 'CầuGiấy' :
                case 'HàĐông' :
                case 'HoàngMai' :
                case 'HaiBàTrưng' :
                case 'ThanhXuân':
                    name = 'workLocation';
                    break;
                case '1' :
                case '2' :
                case '3':
                    name = 'experience';
                    break;
            }
            searchParams.append(name, checkedValues[i]);
            searchParams.delete(checkedValuesDelete[i]);
        }
        const queryString = searchParams.toString();
        if (queryString) {
            setQueryStringAPI(queryString)
            navigate('/jobs/search?' + queryString)
        }
    }, [checkedValues])
    useEffect(() => {
        dispatch(search(queryStringAPI));
    }, [queryStringAPI]);

<<<<<<< HEAD
=======
>>>>>>> origin/tung:client/src/page/post/search.js
>>>>>>> origin/dev
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
                                <h5 style={{marginBottom: '15px'}}>Word Time</h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange} value="Contract"/> Contract

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
<<<<<<< HEAD

                                               onChange={handleChange} value="Full time"/> Full time

                                        onChange={handleChange} value="FullTime"/> Full time

=======
<<<<<<< HEAD:client/src/page/post/listPost.js
                                               onChange={handleChange} value="Full time"/> Full time
=======
                                               onChange={handleChange} value="FullTime"/> Full time
>>>>>>> origin/tung:client/src/page/post/search.js
>>>>>>> origin/dev

                                    </label>
                                </div>

                                <div>
                                    <label>
<<<<<<< HEAD

                                        <input type="checkbox" onChange={handleChange} value="Part time"/>
                                        <input type="checkbox" onChange={handleChange} value="PartTime"
=======
<<<<<<< HEAD:client/src/page/post/listPost.js
                                        <input type="checkbox" onChange={handleChange} value="Part time"
=======
                                        <input type="checkbox" onChange={handleChange} value="PartTime"
>>>>>>> origin/tung:client/src/page/post/search.js
>>>>>>> origin/dev
                                               style={{height: "20px", width: "20px"}}/> Part time

                                    </label>
                                </div>

                                <br/>

                                <h5 style={{marginBottom: '15px'}}>Job </h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
<<<<<<< HEAD

                                               onChange={handleChange} value="Accountant"/> Accountant

                                        onChange={handleChange} value="IT"/> IT


                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}

                                               onChange={handleChange} value="Architect"/> Architect

                                        onChange={handleChange} value="Marketing"/> Marketing


                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}

                                               onChange={handleChange} value="IT"/> IT

                                        onChange={handleChange} value="Sell"/> Sell

=======
<<<<<<< HEAD:client/src/page/post/listPost.js
                                               onChange={handleChange} value="Accountant"/> Accountant
=======
                                               onChange={handleChange} value="IT"/> IT
>>>>>>> origin/tung:client/src/page/post/search.js

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
<<<<<<< HEAD:client/src/page/post/listPost.js
                                               onChange={handleChange} value="Architect"/> Architect
=======
                                               onChange={handleChange} value="Marketing"/> Marketing
>>>>>>> origin/tung:client/src/page/post/search.js

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
<<<<<<< HEAD:client/src/page/post/listPost.js
                                               onChange={handleChange} value="IT"/> IT
=======
                                               onChange={handleChange} value="Sell"/> Sell
>>>>>>> origin/tung:client/src/page/post/search.js
>>>>>>> origin/dev

                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
<<<<<<< HEAD

                                               onChange={handleChange} value="Sales agent"/> Sales agent

                                        onChange={handleChange} value="Engineer"/> Engineer
=======
<<<<<<< HEAD:client/src/page/post/listPost.js
                                               onChange={handleChange} value="Sales agent"/> Sales agent
=======
                                               onChange={handleChange} value="Engineer"/> Engineer
>>>>>>> origin/tung:client/src/page/post/search.js
>>>>>>> origin/dev

                                    </label>
                                </div>

                                <br/>

                                <h5 style={{marginBottom: '15px'}}>Position</h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
<<<<<<< HEAD

                                               onChange={handleChange}/>

                                        onChange={handleChange} value="Staff"/>Staff

=======
<<<<<<< HEAD:client/src/page/post/listPost.js
                                               onChange={handleChange}/>
=======
                                               onChange={handleChange} value="Staff"/>Staff
>>>>>>> origin/tung:client/src/page/post/search.js
>>>>>>> origin/dev

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
<<<<<<< HEAD

                                               onChange={handleChange}/>

                                        onChange={handleChange} value="Leader"/> Leader
=======
<<<<<<< HEAD:client/src/page/post/listPost.js
                                               onChange={handleChange}/>
=======
                                               onChange={handleChange} value="Leader"/> Leader
>>>>>>> origin/tung:client/src/page/post/search.js
>>>>>>> origin/dev

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
<<<<<<< HEAD

                                               onChange={handleChange}/>
                                        onChange={handleChange} value="Technicians"/> Technicians

=======
<<<<<<< HEAD:client/src/page/post/listPost.js
                                               onChange={handleChange}/>
=======
                                               onChange={handleChange} value="Technicians"/> Technicians
>>>>>>> origin/tung:client/src/page/post/search.js
>>>>>>> origin/dev

                                    </label>
                                </div>

                                <br/>

                                <h5 style={{marginBottom: '15px'}}>Location</h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
<<<<<<< HEAD

                                               onChange={handleChange}/>

                                        onChange={handleChange} value="CầuGiấy"/> Cầu Giấy

=======
<<<<<<< HEAD:client/src/page/post/listPost.js
                                               onChange={handleChange}/>
=======
                                               onChange={handleChange} value="CầuGiấy"/> Cầu Giấy
>>>>>>> origin/tung:client/src/page/post/search.js
>>>>>>> origin/dev

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
<<<<<<< HEAD

                                               onChange={handleChange}/>

                                        onChange={handleChange} value="HàĐông"/> Hà Đông

=======
<<<<<<< HEAD:client/src/page/post/listPost.js
                                               onChange={handleChange}/>
=======
                                               onChange={handleChange} value="HàĐông"/> Hà Đông

>>>>>>> origin/tung:client/src/page/post/search.js
>>>>>>> origin/dev

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
<<<<<<< HEAD

                                               onChange={handleChange}/>

                                        <small>Salary</small>

                                        onChange={handleChange} value="HoàngMai"/> Hoàng Mai
=======
<<<<<<< HEAD:client/src/page/post/listPost.js
                                               onChange={handleChange}/>

                                        <small>Salary</small>
=======
                                               onChange={handleChange} value="HoàngMai"/> Hoàng Mai
>>>>>>> origin/dev
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange} value="HaiBàTrưng"/> Hai Bà Trưng
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange} value="ThanhXuân"/> Thanh Xuân
<<<<<<< HEAD

=======
>>>>>>> origin/tung:client/src/page/post/search.js
>>>>>>> origin/dev
                                    </label>
                                </div>

                                <br/>


                                <h5 style={{marginBottom: '15px'}}>Years of experience</h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
<<<<<<< HEAD

                                               onChange={handleChange}/>

                                        onChange={handleChange} value="1"/> 1 Year

=======
<<<<<<< HEAD:client/src/page/post/listPost.js
                                               onChange={handleChange}/>
=======
                                               onChange={handleChange} value="1"/> 1 Year
>>>>>>> origin/tung:client/src/page/post/search.js
>>>>>>> origin/dev

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
<<<<<<< HEAD

                                               onChange={handleChange}/>
                                        onChange={handleChange} value="2"/> 2 Year

=======
<<<<<<< HEAD:client/src/page/post/listPost.js
                                               onChange={handleChange}/>
=======
                                               onChange={handleChange} value="2"/> 2 Year
>>>>>>> origin/tung:client/src/page/post/search.js
>>>>>>> origin/dev

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
<<<<<<< HEAD

                                               onChange={handleChange}/>

                                        onChange={handleChange} value="3"/> 3 Year

=======
<<<<<<< HEAD:client/src/page/post/listPost.js
                                               onChange={handleChange}/>
=======
                                               onChange={handleChange} value="3"/> 3 Year
>>>>>>> origin/tung:client/src/page/post/search.js
>>>>>>> origin/dev

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

<<<<<<< HEAD

                                                <h6 className="number">{item.salary}$</h6>

                                                <h4><small><i
                                                    className="fa fa-briefcase"> </i>&nbsp;&nbsp;&nbsp;&nbsp;{item.position}
                                                    <br/>
                                                    <strong><i
                                                        className="fa fa-building"></i>&nbsp;&nbsp;&nbsp;&nbsp; {item.workLocation}
                                                    </strong>
                                                    <br/>
                                                    <i className="fa fa-briefcase"> </i>&nbsp;&nbsp;&nbsp;&nbsp;{item.position}
                                                </small>
=======
<<<<<<< HEAD:client/src/page/post/listPost.js
                                                <h6 className="number" >{item.salary}$</h6>

                                                <h4><small><i className="fa fa-briefcase"> </i>&nbsp;&nbsp;&nbsp;&nbsp;{item.position}
                                                     <br/>
                                                    <strong><i className="fa fa-building"></i>&nbsp;&nbsp;&nbsp;&nbsp; {item.workLocation}</strong>
                                                <br/>
                                                    <i className="fa fa-briefcase"> </i>&nbsp;&nbsp;&nbsp;&nbsp;{item.position}</small>
>>>>>>> origin/dev
                                                </h4>

                                                <samp className="container">
                                                    <tspan className="row">
                                                        <strong title="Posted on"><i
                                                            className="fa fa-calendar"></i> {item.endTime}
                                                        </strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <strong title="Type"><i
                                                            className="fa fa-file"></i> {item.status}
                                                        </strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <strong title="Location"><i
                                                            className="fa fa-map-marker"></i> {item.workLocation}
                                                        </strong>
                                                    </tspan>

                                                </samp>
<<<<<<< HEAD

                                                <h4>Salary: ${item.salary}</h4>

                                                <h4><small><i className="fa fa-briefcase"></i> {item.jobName} <br/>
                                                    <strong><i className="fa fa-building"></i>{item.title}
                                                    </strong></small></h4>
=======
=======
                                                <h4>Salary: ${item.salary}</h4>

                                                <h4><small><i className="fa fa-briefcase"></i> {item.jobName} <br/>
                                                    <strong><i className="fa fa-building"></i>{item.title}</strong></small></h4>
>>>>>>> origin/dev

                                                <small>
                                                    <strong title="Posted on"><i
                                                        className="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <strong title="Type"><i
<<<<<<< HEAD
                                                        className="fa fa-file"></i> {item.workTime}
                                                    </strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <strong title="Location"><i
                                                        className="fa fa-map-marker"></i> {item.workLocation}</strong>
                                                </small>
=======
                                                        className="fa fa-file"></i> {item.workTime}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <strong title="Location"><i
                                                        className="fa fa-map-marker"></i> {item.workLocation}</strong>
                                                </small>
>>>>>>> origin/tung:client/src/page/post/search.js
>>>>>>> origin/dev
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
