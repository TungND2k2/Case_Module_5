import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
export const getPosts = createAsyncThunk (
    'post/getPosts',
    async () => {
        const response = await axios.get('http://localhost:4000/posts' );

        return response;
    }
)
export const addPosts = createAsyncThunk (
    'post/addPost',
    async (data) => {
        const response = await axios.post('http://localhost:4000/posts',data);
        return data;
    }
)
export const deletePosts = createAsyncThunk(
    'post/deletePost',
    async (data)=>{
        const response = await axios.delete(`http://localhost:4000/posts/${data}`);
        return response.data
    }
)