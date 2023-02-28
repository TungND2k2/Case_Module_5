import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
export const getPosts = createAsyncThunk (
    'posts/getPosts',
    async () => {
        const response = await axios.get('http://localhost:4000/posts');
        return response;
    }
)
export const addPosts = createAsyncThunk (
    'post/addPosts',
    async (data) => {
        const response = await axios.post('http://localhost:4000/posts',data);
        return data;
    }
)
export const search = createAsyncThunk (
    'posts/search',
    async (search) => {
        const response = await axios.get('http://localhost:4000/posts/search?'+search);
        return response;
    }
)