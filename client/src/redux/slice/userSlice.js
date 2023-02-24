import {createSlice} from "@reduxjs/toolkit";
import {userLogin, userLogout, userRegister} from "../../service/userServices";
const initialState = {
    user: [],
    show:localStorage.getItem('show'),
}
const blogSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(userRegister.fulfilled, (state, {payload}) => {
            state.user.push(payload);
        });
        builder.addCase(userLogin.fulfilled, (state, {payload}) => {
            state.user = payload.data;
            localStorage.setItem("isUser", payload.data.idUser)
            localStorage.setItem("access_token", payload.data.token)
            localStorage.setItem("status",payload.data)
            state.show=false
            localStorage.setItem('show',state.show)
        });
        builder.addCase(userLogout.fulfilled,(state,{payload})=>{
            state.show=true
            localStorage.setItem('show',state.show)
        })
    }
})
export default blogSlice.reducer;
