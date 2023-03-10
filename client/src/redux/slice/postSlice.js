import {createSlice} from "@reduxjs/toolkit";
import {addPosts, getPosts, search, editPost, searchPost,deletePost} from "../../service/postService";
const initialState = {
    post: [],
    search: [],
    currentPost: {}

}
const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getPosts.fulfilled, (state, {payload}) => {
                state.post = payload.data;

        });
        builder.addCase(addPosts.fulfilled, (state, action) => {
            state.post.push(action.payload);
        });
        builder.addCase(search.fulfilled, (state, {payload}) => {
            state.search = payload.data;
        });
        builder.addCase(editPost.fulfilled, (state, {payload}) => {
            console.log(state)
            state.post = payload[0];

        });
        builder.addCase(searchPost.fulfilled, (state, action) => {
            state.currentPost = action.payload;
        });
        // builder.addCase(deletePost.fulfilled, (state, action) => {
        //     state.post = action.payload;
        // });
    }
})
export default postSlice.reducer;
