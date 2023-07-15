import React from 'react'
import styles from './Topmovies.module.css';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Topmovies() {

  const [movies, setMovies] = useState([])
  
  const [loading, setLoading] = useState(false)

  async  function getMovies() {
       setLoading(true)
let {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50`)

  setLoading(false)
      let response =  data.results
      const slicedArray = response.slice(0,14)
      
setMovies(slicedArray)

// console.log(movies);

   
  }
 
  
  useEffect(() => {

  getMovies()

},[])

    return <>

      
    
        

          <div className="row position-relative  ">
     
          <div className="titles text-white mt-5 fonts movie-title ps-5 ">
    
<h1>Trending<br/>Movies<br/>Right Now </h1>
<p>Top Trending movies by Week</p>
            </div>

          {movies.map((movie) =>
                    <Link key={movie.id} className='card middle border-0 col-md-3 mx-3 my-5 fonts md-crd' to={`/detailsmovies/${movie.id}`}>
            <div className="front">
                                    
                          <img className='' src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt="" />
                        
                      </div>
                        <div className="info position-absolute top-100 w-100  text-center pt-2"><h3  className='text-white h4'>{movie.title?.split(' ').slice(0 ,1).join('')}</h3></div>
            <div className="back">
                <div className="back-content middle ">
                      <h2>{movie.media_type }</h2>
          
                 <div className="overvies  overflow-hidden p-4 d-flex justify-content-center align-items"><p className='trans'>{movie.overview}  </p></div>   
                    <div className="sm">
                       <a href=""> <i className='fab fa-facebook cursor-pointer '></i></a>  
                     <a href=""><i className='fab fa-twitter cursor-pointer '></i> </a>  
                     <a href=""><i className='fab fa-instagram cursor-pointer '></i></a>   
                     <a href="https://www.youtube.com/" target='_blank'><i className='fab fa-youtube cursor-pointer '></i> </a>   
                       
                      </div>
                    
            </div>
            </div>
                    </Link>
        )}





                </div>
  
        


        
          <Link to={'/movies'}>
           <div className="btn-top d-flex justify-content-end  my-5 mb-5 pb-5 trans-bt">
                <button className='btn btn-outline-light me-5 trans-bt'>See More</button>
</div>


      </Link>
        


      
        
        
        
    </>
}
