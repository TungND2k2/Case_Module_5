import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const userRegister = createAsyncThunk (
    'users/register',
    async (data) => {
        const response = await axios.post('http://localhost:4000/users/register',data);
        return data;
    }
)
export const userLogin = createAsyncThunk (
    'users/login',
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
