import {useSelector} from "react-redux";

export default function Logout(){
    let show=useSelector(state => {
        return state.employ.show
    })

}
