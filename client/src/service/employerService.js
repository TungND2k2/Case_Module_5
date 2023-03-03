import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk (
    'employers/register',
    async (data) => {
        const response = await axios.post('http://localhost:4000/employer/register',data);
        return data;
    }
)
export const login = createAsyncThunk (
    'employers/login',
    async (data) => {
        const response = await axios.post('http://localhost:4000/employer/login',data)
        return response;
    }
)
export const logout = createAsyncThunk (
    'employers/logout',
    async () => {
        return false
    }
)
export const employerEdit = createAsyncThunk (
    'employers/employerEdit',
    async (data) => {
        await axios.put(`http://localhost:4000/employer/${data.idEmployer}`,data);
        const response = await axios.get('http://localhost:4000/employer');
        return response.data
    }
)

export const findByIdEmployer = createAsyncThunk(
    'employers/findByIdEmployer',
    async (data)=>{
        const res = await axios.get(`http://localhost:4000/employer/findById/${data}`);
        return res.data
    }

)
