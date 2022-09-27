import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    server: '',
    date: '',
    id: ''
}

const resultsSlice = createSlice({
    name: 'searchResults',
    initialState,
    reducers: {
        // selector function addServerResults, takes state as argument
        // returns what is needed by the component from the state
        addServerResults(state, action) {
            state.server = action.payload;
        },
        addDateResults(state, action) {
            state.date = action.payload;
        },
        addIdResults(state, action) {
            state.id = action.payload;
        }
    }
})

// const searches = {
//     name: 'searchResults',
//     initialState: [],
//     reducers: {
//         addSearchResults: (state, action) => {
//             state.push({...action.payload})
//         },
//     }
// }



export const { 
    addServerResults,
    addDateResults,
    addIdResults 
    } = resultsSlice.actions;
export default resultsSlice.reducer;
export const addedSearchResults = (state) => state.results;

