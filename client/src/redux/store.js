import {configureStore} from "@reduxjs/toolkit";
import employerSlice from "./slice/employerSlice";
import userSlice from "./slice/userSlice";

const Store = configureStore({
    reducer: {
        employ: employerSlice,
        user : userSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default Store;
