import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getPosts, search} from "../../service/postService";
import {Link, useNavigate, useSearchParams} from "react-router-dom";

export default function Search() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let posts = useSelector((state) => {
        return state.post.search.posts
    })
    const [page, setPage] = useSearchParams()
    const page1 = page.get('page') || 1;
    const totalPages = useSelector(state => {
        if (state.post.search.totalPage !== undefined) {
            return state.post.search.totalPage;
        }
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
                case 'C???uGi???y' :
                case 'H??????ng' :
                case 'Ho??ngMai' :
                case 'HaiB??Tr??ng' :
                case 'ThanhXu??n':
                    name = 'workLocation';
                    break;
                case '1' :
                case '2' :
                case '3':
                    name = 'experience';
                    break;
                case '0-2000' :
                case '2000-4000' :
                case '4000':
                    name = 'salary';
                    break;
                case'All' :
                    name = '';
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

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange} value="All"/> All

                                    </label>
                                </div>
                                <h5 style={{marginBottom: '15px'}}>Work Time</h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange} value="Contract"/> Contract

                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}


                                               onChange={handleChange} value="FullTime"/> Full time


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


                                               onChange={handleChange} value="IT"/> IT


                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}


                                               onChange={handleChange} value="Marketing"/> Marketing


                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}


                                               onChange={handleChange} value="Sell"/> Sell


                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}


                                               onChange={handleChange} value="Engineer"/> Engineer


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
                                <h5 style={{marginBottom: '15px'}}>Salary</h5>
                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}


                                               onChange={handleChange} value="0-2000"/> 0-2000


                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}

                                               onChange={handleChange} value="2000-4000"/> 2000-4000


                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}


                                               onChange={handleChange} value="4000"/> >4000


                                    </label>
                                </div>

                                <br/>

                                <h5 style={{marginBottom: '15px'}}>Location</h5>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}


                                               onChange={handleChange} value="C???uGi???y"/> C???u Gi???y


                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}

                                               onChange={handleChange} value="H??????ng"/> H?? ????ng


                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}

                                               onChange={handleChange} value="Ho??ngMai"/> Ho??ng Mai
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange} value="HaiB??Tr??ng"/> Hai B?? Tr??ng
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="checkbox" style={{height: "20px", width: "20px"}}
                                               onChange={handleChange} value="ThanhXu??n"/> Thanh Xu??n

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
                                {posts !== undefined && posts.map((item) => (
                                    <div className="col-md-6 py-5 mt-2">
                                        <Link to={'/jobs-detail/' + item.idPost}>
                                            <div className="product-item">
                                                <a><img style={{width: '396px', height: '289px'}} src={item.image}
                                                        alt=""/></a>
                                                <div className="down-content">
                                                    <a href=""><h4><i
                                                        className="fa fa-building"></i>{item.title}</h4></a>
                                                    <h4>${item.salary}</h4>

                                                    <h4><small><i
                                                        className="fa fa-briefcase"></i> {item.jobName + ' '}<br/>
                                                        <i
                                                            className="fa fa-briefcase"></i> {item.position}
                                                        <strong><br/>

                                                        </strong></small></h4>
                                                    <small>
                                                        <strong title="Posted on"><i
                                                            className="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <strong title="Type"><i
                                                            className="fa fa-file"></i> {item.workTime}
                                                        </strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <strong title="Location"><i
                                                            className="fa fa-map-marker"></i> {item.workLocation}
                                                        </strong>
                                                    </small>
                                                </div>

                                            </div>
                                        </Link>

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
