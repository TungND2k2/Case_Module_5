import {configureStore} from "@reduxjs/toolkit";
import employerSlice from "./slice/employerSlice";

const Store = configureStore({
    reducer: {
        employ: employerSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default Store;