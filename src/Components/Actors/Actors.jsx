import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export default function Actors() {

  const [movies, setMovies] = useState([])
  
  const [loading, setLoading] = useState(false)

  async  function getMovies() {
       setLoading(true)
let {data} = await axios.get(`https://api.themoviedb.org/3/trending/person/week?api_key=f1aca93e54807386df3f6972a5c33b50`)

  setLoading(false)
      let response =  data.results
      const slicedArray = response
      
setMovies(slicedArray)

// console.log(movies);

   
  }
 
  
  useEffect(() => {

  getMovies()

},[])

    return <>

      
      <div className="container-fluid g-0">
        

          <div className="row position-relative">
    
          <div className="titles text-white mt-5 fonts ps-5">
    
<h1>Trending<br/>Actors<br/>Right Now </h1>
<p>Top Trending Actors by Week</p>
            </div>

                {movies.map((movie) => <div key={movie.id} className="card middle actor-movies   col-md-3 mx-3 my-5 fonts">
                    
            <div className="front">
                          <img className='' src={`https://image.tmdb.org/t/p/w500/` +  movie.profile_path} alt="" />
                        
                      </div>
                        <div className="info  position-absolute top-100 w-100  text-center pt-2"><h3  className='text-white h4'>{movie.name?.split(' ').slice(0 ,1).join('')}</h3></div>
            <div className="back">
                <div className="back-content middle ">
                            <h2>{ movie.media_type}</h2>

                 <div className="overvies  overflow-hidden  p-4 d-flex justify-content-center align-items"><h2 className='trans'>{movie.name}  </h2></div>   
                    <div className="sm">
                       <a href=""> <i className='fab fa-facebook cursor-pointer '></i></a>  
                     <a href=""><i className='fab fa-twitter cursor-pointer '></i> </a>  
                     <a href=""><i className='fab fa-instagram cursor-pointer '></i></a>   
                     <a href=""><i className='fab fa-youtube cursor-pointer '></i> </a>   
                       
                      </div>
                    
            </div>
            </div>
        </div> )}





                </div>
  
        


        
          


        </div>
        


      
        
        
        
    </>
}
