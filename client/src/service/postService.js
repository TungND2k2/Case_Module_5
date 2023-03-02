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
        await axios.put('http://localhost:4000/posts/'+ data[1],data[0]);
        const response = await axios.get('http://localhost:4000/posts');
        return response.data;
    }
)
export const searchPost = createAsyncThunk (
    'post/searchPost',
    async (a) => {
        const response = await axios.get(`http://localhost:4000/posts/search?idPost=`+a);
        return response.data.posts[0];
    }
)

export const search = createAsyncThunk (
    'posts/search',
    async (search) => {
        return await axios.get('http://localhost:4000/posts/search?' + search);
    }
)
export const deletePost = createAsyncThunk(
    'blogs/deleteBlogs',
    async (id)=>{
        console.log(id)
        await axios.delete(`http://localhost:4000/posts/${id}`)
        const res = await axios.get('http://localhost:4000/posts')
        return res.data;
    }
)
