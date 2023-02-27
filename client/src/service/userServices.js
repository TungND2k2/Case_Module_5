import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const userRegister = createAsyncThunk (
    'users/userRegister',
    async (data) => {
        const response = await axios.post('http://localhost:4000/users/register',data);
        return data;
    }
)
export const userLogin = createAsyncThunk (
    'users/userLogin',
    async (data) => {
        return await axios.post('http://localhost:4000/users/login', data);
    }
)
export const userLogout = createAsyncThunk (
    'users/logout',
    async () => {
        return false
    }
)
export const findById = createAsyncThunk(
    'users/findById',
    async (data)=>{
        return await axios.get(`http://localhost:4000/users/findById/${data}`);
    }
)
