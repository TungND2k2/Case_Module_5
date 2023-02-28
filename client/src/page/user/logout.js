import {useSelector} from "react-redux";

export default function Logout(){
    let userShow = useSelector(state => {
        return state.user.userShow
    })

}
