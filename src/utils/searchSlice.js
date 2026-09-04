import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
    name: "search",
    initialState: {
        showSearchView: false,
        movieResults: null,
    },
    reducers: {
        toggleSearchView: (state, action) => {
            state.showSearchView = !state.showSearchView
        },
        addSearchResults: (state, action) => {
            const { movieResults } = action.payload;
            state.movieResults = movieResults;
        }
    }
})
export const { toggleSearchView, addSearchResults } = searchSlice.actions
export default searchSlice.reducer
