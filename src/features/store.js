import { configureStore } from "@reduxjs/toolkit";
import Movie from "./movies/movieSlice"

export const store=configureStore({
    reducer:{
        movies:Movie
    }
    
});

