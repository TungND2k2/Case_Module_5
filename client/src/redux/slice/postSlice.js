import {createSlice} from "@reduxjs/toolkit";
import {addPost, getPosts, search} from "../../service/postService";
const initialState = {
    post: [],
    search: [],
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
        builder.addCase(search.fulfilled, (state, {payload}) => {
            state.search = payload.data;
        });
    }
})
export default postSlice.reducer;