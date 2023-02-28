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
        console.log(queryString)
    }, [checkedValues])
    useEffect(() => {
        dispatch(search(queryStringAPI));
    }, [queryStringAPI]);


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

                                               onChange={handleChange} value="Full time"/> Full time



                                    </label>
                                </div>

                                <div>
                                    <label>



                                        <input type="checkbox" onChange={handleChange} value="PartTime"

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

                                <h5 style={{marginBottom: '15px'}}>Position</h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}



                                               onChange={handleChange} value="Staff"/>Staff


                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}

                                               onChange={handleChange} value="Leader"/> Leader


                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}


                                               onChange={handleChange} value="Technicians"/> Technicians


                                    </label>
                                </div>

                                <br/>

                                <h5 style={{marginBottom: '15px'}}>Location</h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}


                                               onChange={handleChange} value="CầuGiấy"/> Cầu Giấy


                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}

                                               onChange={handleChange}/>

                                               onChange={handleChange} value="HàĐông"/> Hà Đông



                                    </label>
                                </div>

                                <div>
                                    <label>

                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange} value="HoàngMai"/> Hoàng Mai




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

                                    </label>
                                </div>

                                <br/>


                                <h5 style={{marginBottom: '15px'}}>Years of experience</h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}


                                               onChange={handleChange} value="1"/> 1 Year


                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}


                                               onChange={handleChange} value="2"/> 2 Year


                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}

                                    onChange={handleChange} value="3"/> 3 Year


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

                                                <h4>Salary: ${item.salary}</h4>

                                                <h4><small><i className="fa fa-briefcase"></i> {item.jobName} <br/>
                                                    <strong><i className="fa fa-building"></i>{item.title}</strong></small></h4>

                                                <small>
                                                    <strong title="Posted on"><i
                                                        className="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <strong title="Type"><i
                                                        className="fa fa-file"></i> {item.workTime}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <strong title="Location"><i
                                                        className="fa fa-map-marker"></i> {item.workLocation}</strong>
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
