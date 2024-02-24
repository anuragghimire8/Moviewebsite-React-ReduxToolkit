import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).catch((error) => {
      console.log("err", error);
    });
    return response.data;
  }
);


export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows',
    async () => {
      const seriesText = "Friends";
      const response = await movieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`).catch((error) => {
        console.log("err", error);
      });
      return response.data;
    }
  );
  export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
      const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
      return response.data;
    }
  );

const initialState = {
  movies: {},
  shows:{},
  selectedMovieOrShow:{},

  
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMoives: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMoviesOrShow:(state)=>{
        state.selectedMovieOrShow={};
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        console.log("Pending");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log("fetched successfully");
        state.movies = payload;
      })
      .addCase(fetchAsyncMovies.rejected, (state) => {
        console.log("rejected!");
      })
      .addCase(fetchAsyncShows.fulfilled,(state,{payload})=>{
        state.shows=payload;
      })
      .addCase(fetchAsyncMovieOrShowDetail.fulfilled,(state,{payload})=>{
        console.log("fullfilled")
        state.selectedMovieOrShow=payload;
      })
  }
});

export const { removeSelectedMoviesOrShow } = movieSlice.actions;
export const getrAllMovies = (state) => state.movies.movies;
export const getAllShows=(state)=>state.movies.shows;
export const getSelectedMoviesOrShows = (state) => state.movies.selectedMovieOrShow;


export default movieSlice.reducer;
