import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import searchReducer from "./searchSlice"
import movieReducer from "./movieSlice"
import configReducer from "./configSlice"
const appStore = configureStore({
    reducer: {
        user: userReducer,
        movie:movieReducer,
        search:searchReducer,
        config: configReducer,
    },
})
export default appStore;