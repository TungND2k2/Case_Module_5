import {useSelector} from "react-redux";

export default function Logout(){
    let employShow = useSelector(state => {
        return state.employ.employShow
    })

}
