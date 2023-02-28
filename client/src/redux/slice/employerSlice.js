import {createSlice} from "@reduxjs/toolkit";
import { login, logout, register} from "../../service/employerService";
const initialState = {
    employers: [],
    employerShow :localStorage.getItem('employerShow'),
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
            console.log(state.employers)
            localStorage.setItem("status",payload.data)
            if(state.employers!='Wrong User'&&state.employers != 'Wrong Password'){
                localStorage.setItem("id_employer", payload.data.id_employer)
                localStorage.setItem("access_token", payload.data.token)
                localStorage.setItem("employerName",payload.data.employerName)
                state.employerShow=false
                localStorage.setItem('employerShow',state.employerShow)
            }
        });
        builder.addCase(logout.fulfilled,(state,{payload})=>{
            state.employerShow=true
            localStorage.setItem('employerShow',state.employerShow)
            localStorage.clear()
        })

    }
})
export default blogSlice.reducer;
