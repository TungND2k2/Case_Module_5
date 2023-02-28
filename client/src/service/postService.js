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

export const editPost = createAsyncThunk (
    'posts/editPost',
    async (data) => {
        console.log(data)
        await axios.put('http://localhost:4000/posts/'+ data[1],data[0]);
        console.log(11111111111111111111111111111111)
        const response = await axios.get('http://localhost:4000/posts');
        console.log(response)
        return response.data;
    }
)
export const searchPost = createAsyncThunk (
    'post/searchPost',
    async (a) => {
        const response = await axios.get(`http://localhost:4000/posts/search?idPost=${a}`);
        return response.data;
    }
)

export const search = createAsyncThunk (
    'posts/search',
    async (search) => {
        const response = await axios.get('http://localhost:4000/posts/search?'+search);
        return response;
    }
)
