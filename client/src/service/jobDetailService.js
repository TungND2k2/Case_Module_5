import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const addJobDetail = createAsyncThunk (
    'job/addJobs',
    async () => {
        const response = await axios.post(`http://localhost:4000/jobs`);
        return response;
    }
)