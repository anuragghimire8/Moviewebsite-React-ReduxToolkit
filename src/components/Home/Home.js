import React, { useEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing"
import movieApi from "../../common/apis/movieApi"
import { APIKey } from '../../common/apis/movieApiKey'
import { useDispatch, UseDispatch,useSelecetor } from 'react-redux'
import { addMoives } from '../../features/movies/movieSlice'
const Home = () => {

    const dispatch=useDispatch();

    const movieText="Harry"
     useEffect(()=>{
        const fetchMovies= async()=>{
              const response=await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).catch((error)=>{
                console.log("err",error);
              });
           dispatch(addMoives(response.data));

        }
        fetchMovies();
     },[])

  return (
  <div>
  <div className='banner-img'>

      
  </div>
  <MovieListing/>
  </div>
    
  )
}

export default Home
