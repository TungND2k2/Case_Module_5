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
    'users/userLogout',
    async () => {
        return false
    }
)

export const userEdit = createAsyncThunk (
    'users/userEdit',
    async (data) => {
        await axios.put(`http://localhost:4000/users/${data.idUser}`,data);
        const response = await axios.get('http://localhost:4000/users');
        return response.data
    }
)
export const changePassword = createAsyncThunk(
    'users/changePassword',
    async (data)=>{
        const response = await axios.post(`http://localhost:4000/users/changePassword/`+data[1],data[0]);
        return response.data
    }
)
export const findById = createAsyncThunk(
    'users/findById',
    async (data)=>{
        console.log(data)
        const res = await axios.get(`http://localhost:4000/users/findById/${data}`);
return res.data
    }
)
