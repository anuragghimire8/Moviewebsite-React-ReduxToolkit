import React, { useEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing"
import movieApi from "../../common/apis/movieApi"
import { APIKey } from '../../common/apis/movieApiKey'
import { useDispatch, UseDispatch,useSelecetor } from 'react-redux'
import { addMoives, fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
const Home = () => {

    const dispatch=useDispatch();
 useEffect(()=>{
   dispatch(fetchAsyncMovies())
   dispatch(fetchAsyncShows())
 },[dispatch])

  return (
  <div>
  <div className='banner-img'>

      
  </div>
  <MovieListing/>
  </div>
    
  )
}

export default Home
