import {createSlice} from "@reduxjs/toolkit";
import {login, logout, register} from "../../service/employerService";
const initialState = {
    employers: [],
    employShow :localStorage.getItem('employShow'),
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
            state.employerShow=false
            localStorage.setItem('employerShow',state.employerShow)
        });
        builder.addCase(logout.fulfilled,(state,{payload})=>{
            state.employerShow=true
            localStorage.setItem('employShow',state.employerShow)
        })
    }
})
export default blogSlice.reducer;
