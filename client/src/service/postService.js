import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
export const getPosts = createAsyncThunk (
    'post/getPosts',
    async () => {
        const response = await axios.get('http://localhost:4000/posts' );
        return response;
    }
)
export const addPost = createAsyncThunk (
    'post/addPost',
    async (data) => {
        const response = await axios.post('http://localhost:4000/posts',data);
        return data;
    }
)