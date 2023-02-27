import {createSlice} from "@reduxjs/toolkit";
import {addPosts, getPosts, search} from "../../service/postService";
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
        builder.addCase(addPosts.fulfilled, (state, action) => {
            state.post.push(action.payload);
        });
        builder.addCase(search.fulfilled, (state, {payload}) => {
            state.search = payload.data;
        });
    }
})
export default postSlice.reducer;