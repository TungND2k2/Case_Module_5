import {configureStore} from "@reduxjs/toolkit";
import employerSlice from "./slice/employerSlice";
import postSlice from "./slice/postSlice";
import userSlice from "./slice/userSlice";
import jobSlice from "./slice/jobSlice";

const Store = configureStore({
    reducer: {
        employ: employerSlice,
        post:postSlice,
        job: jobSlice,
        user :userSlice
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default Store;
