import { createSlice } from "@reduxjs/toolkit";


const initialState={
    movies:{}
}

const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMoives:(state,{payload})=>{
            state.movies=payload;
        },
    }
})

export const {addMoives}=movieSlice.actions;
export const getrAllMovies=(state)=>
    state.movies.movies;

export default movieSlice.reducer;