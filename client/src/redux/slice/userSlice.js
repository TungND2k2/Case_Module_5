import {createSlice} from "@reduxjs/toolkit";
import {findById, userLogin, userLogout, userRegister} from "../../service/userServices";
const initialState = {
    user: [],
    userShow :localStorage.getItem('userShow'),
}
const blogSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(userRegister.fulfilled, (state, {payload}) => {
            state.user.push(payload);
        });
        builder.addCase(findById.fulfilled,(state, action)=>{
            state.user = action.payload;
        });
        builder.addCase(userLogin.fulfilled, (state, {payload}) => {
            state.user = payload.data;
            localStorage.setItem("isUser", payload.data.idUser)
            localStorage.setItem("access_token", payload.data.token)
            localStorage.setItem("status",payload.data)
            localStorage.setItem("nameUser",payload.data.username)
            state.userShow=false
            localStorage.setItem('userShow',state.userShow)
        });
        builder.addCase(userLogout.fulfilled,(state,{payload})=>{
            state.userShow = true
            localStorage.setItem('userShow',state.userShow)
        })
    }
})
export default blogSlice.reducer;