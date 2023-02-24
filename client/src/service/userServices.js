import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const userRegister = createAsyncThunk (
    'register',
    async (data) => {
        const response = await axios.post('http://localhost:4000/user/register',data);
        return data;
    }
)
export const userLogin = createAsyncThunk (
    'login',
    async (data) => {
        return await axios.post('http://localhost:4000/user/login', data);
    }
)
export const userLogout = createAsyncThunk (
    'user/logout',
    async () => {
        return false
    }
)
