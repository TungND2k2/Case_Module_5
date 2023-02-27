import {createSlice} from "@reduxjs/toolkit";
import {addPosts, deletePosts, getPosts} from "../../service/postService";
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
        builder.addCase(addPosts.fulfilled, (state, action) => {
            state.post.push(action.payload);
        });
        builder.addCase(deletePosts.fulfilled,(state,action)=>{
            state.post.splice(action.payload);
        });
    }
})
export default postSlice.reducer;