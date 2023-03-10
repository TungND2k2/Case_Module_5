import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getJobs = createAsyncThunk (
    'job/getJobs',
    async () => {
        const response = await axios.get('http://localhost:4000/jobs' );
        return response.data;
    }
)
export const addJobs = createAsyncThunk (
    'job/addJobs',
    async () => {
        const response = await axios.post(`http://localhost:4000/jobs`);
        return response.data;
    }
)
