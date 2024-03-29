import React from 'react'
import "./App.scss"
import { BrowserRouter as Router,Routes,Route, } from 'react-router-dom'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div className='app'>
      <Router>
      <Header/>
      <div className='container'>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      
      </Routes>
      </div>
      <Footer/>
      </Router>
    </div>
  )
}

export default App
