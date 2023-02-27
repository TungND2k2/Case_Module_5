import {createSlice} from "@reduxjs/toolkit";
import {addPost, getPosts, editPost, searchPost} from "../../service/postService";
const initialState = {
    post: [],
}
const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getPosts.fulfilled, (state, {payload}) => {
            state.post = payload.data;
        });
        builder.addCase(addPost.fulfilled, (state, {payload}) => {
            state.post.push(payload);
        });
        builder.addCase(editPost.fulfilled, (state, {payload}) => {
            console.log(state)
            console.log(payload[0])
            state.post = payload[0];

        });
        builder.addCase(searchPost.fulfilled, (state, action) => {
            state.post = action.payload;
        });
    }
})
export default postSlice.reducer;
