import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    trendingMovies: [],
    PopularMovies: [],
    LatestMovies: []
}

const homeSlice = createSlice ({
     name: "home",
     initialState: initialState,
     reducers: {
        getTrendingMovies: (state, action) => {
            state.trendingMovies= action.payload.results;
            // console.log(state.trendingMovies);
        },
        getPopularMovies: (state, action) => {
            // console.log(state, action.payload.results)
            state.PopularMovies = action.payload.results;
            // console.log(state.PopularMovies);
        },
        getLatestMovies: (state, action)=> {
            // console.log(state, action.payload.results);
            state.LatestMovies= action.payload.results;
            // console.log(state.LatestMovies);
        }
     }
});

export  const {getTrendingMovies, getPopularMovies,getLatestMovies} = homeSlice.actions;

export default homeSlice.reducer;