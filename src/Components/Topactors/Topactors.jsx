import React from 'react'
import styles from './Topactors.module.css';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Topactors() {

  const [people, setPeople] = useState([])
  
  const [loading, setLoading] = useState(false)

  async  function getPeople() {
       setLoading(true)
let {data} = await axios.get(`https://api.themoviedb.org/3/trending/person/week?api_key=f1aca93e54807386df3f6972a5c33b50`)

  setLoading(false)
      let response =  data.results
      const slicedArray = response.slice(0,14)
      
setPeople(slicedArray)

// console.log(data.results);

   
  }
 
  
  useEffect(() => {

  getPeople()

},[])

    return <>

      
    
        

         <div className="row position-relative">
    
          <div className="titles text-white mt-5 fonts me-0 movie-title ps-5">
    
<h1>Trending<br/>people<br/>Right Now </h1>
<p>Top Trending people by Week</p>
            </div>

          {people.map((movie) =><div key={movie.id} className="card middle border-0 col-md-3 mx-3 my-5 fonts md-crd">
                    {/* <Link className='card middle border-0 col-md-3 mx-3 my-5 fonts ' to={`/detailspeople/${movie.id}`}> */}
            <div className="front">
                                    
                          <img className='' src={`https://image.tmdb.org/t/p/w500/` + movie.profile_path} alt="" />
                        
                      </div>
                        <div className="info position-absolute top-100 w-100  text-center pt-2"><h3  className='text-white h4'>{movie.name?.split(' ').slice(0 ,1).join('')}</h3></div>
            <div className="back">
                <div className="back-content middle ">
                      <h2>{movie.media_type }</h2>
          
                      <div className="overvies overflow-hidden p-4 d-flex justify-content-center align-items"><h3>{movie.name}</h3>
                         
                      </div>   
                    <div className="sm">
                       <a href=""> <i className='fab fa-facebook cursor-pointer '></i></a>  
                     <a href=""><i className='fab fa-twitter cursor-pointer '></i> </a>  
                     <a href=""><i className='fab fa-instagram cursor-pointer '></i></a>   
                     <a href="https://www.youtube.com/" target='_blank'><i className='fab fa-youtube cursor-pointer '></i> </a>   
                       
                      </div>
                    
            </div>
            </div>
                    {/* </Link> */}
        </div> )}





                </div>
  
        


        
          <Link to={`/actors`}>
            <div className="btn-top d-flex justify-content-end  my-5 mb-5 pb-5 trans-bt">
                <button className='btn btn-outline-light me-5 trans-bt'>See More</button>
</div>
</Link>
      
        


      
        
        
        
    </>
}
