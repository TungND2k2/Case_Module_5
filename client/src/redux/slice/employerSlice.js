import {createSlice} from "@reduxjs/toolkit";
import {login, logout, register} from "../../service/employerService";
const initialState = {
    employers: [],
    show:localStorage.getItem('show'),
}
const blogSlice = createSlice({
    name: 'employers',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(register.fulfilled, (state, {payload}) => {
            state.employers.push(payload);
        });
        builder.addCase(login.fulfilled, (state, {payload}) => {
            state.employers = payload.data;
            localStorage.setItem("id_employer", payload.data.id_employer)
            localStorage.setItem("access_token", payload.data.token)
            localStorage.setItem("status",payload.data)
            localStorage.setItem("name",payload.data.employerName)
            state.show=false
            localStorage.setItem('show',state.show)
        });
        builder.addCase(logout.fulfilled,(state,{payload})=>{
            state.show=true
            localStorage.setItem('show',state.show)
        })
    }
})
export default blogSlice.reducer;