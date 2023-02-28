import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {findById} from "../../service/userServices";

export default function EditUser(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect((id)=>{
        dispatch(findById(id)).then(()=>{
        });
    },[])
    const user = useSelector(
        state => {
            console.log(state.user,1)
            return state.user
        }
    )
    return(
        <>
            <h1>Sua tai khoan</h1>
        </>
    )
}