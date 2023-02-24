import {createSlice} from "@reduxjs/toolkit";
import {addPost, getPosts} from "../../service/postService";
const initialState = {
    post: [],
}
const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getPosts.fulfilled, (state, {payload}) => {
            state.post = payload.data;
        });
        builder.addCase(addPost.fulfilled, (state, {payload}) => {
            state.post.push(payload);
        });
    }
})
export default postSlice.reducer;