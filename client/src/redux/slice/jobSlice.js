import  {createSlice} from "@reduxjs/toolkit";
import {getJobs} from "../../service/jobService";

const initialState = {
    jobs : []
}
const jobSlice = createSlice({
    name : 'job',
    initialState,
    reducers : {},
    extraReducers: builder => {
        builder.addCase(getJobs.fulfilled,(state, action)=>{
            state.jobs = action.payload
        })
    }
})
export default jobSlice.reducer
