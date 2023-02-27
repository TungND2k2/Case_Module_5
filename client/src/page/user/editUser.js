import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {findById} from "../../service/userServices";

export default function editUser(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect((id)=>{
        dispatch(findById(id)).then(()=>{

        });
    },[])
    return(
        <>
        </>
    )
}