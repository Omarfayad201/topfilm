import React from 'react'
import styles from './Similartv.module.css';
import Slider from "react-slick";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
export default function Similartv() {

    const [movieDetails, setMovieDetails] = useState([]);

    const [loading, setLoading] = useState(false)
    
    const [cast, setCast] = useState([]);

    const [similar, setSimilar] = useState([]);

    let params = useParams();
    
  async  function getTvDetails(id) {
      setLoading(true);
let {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)

// console.log(data);
setLoading(false)
setMovieDetails(data)
   

   
      
    }


  async  function castMovie(id) {
    
let {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)

      setCast(data.cast)
    //   console.log(cast);
}

  async  function similarMovies(id) {
        

let {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=1`)

      setSimilar(data.results)
console.log(similar);

    }
    



    

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  
  };





    
    useEffect(() => {

        getTvDetails(params.id);
        castMovie(params.id)
        similarMovies(params.id)
},[])


    return <>
        <div className="container mt-5 my-5">
            
            <div className="row position-relative">
                

                {loading == true?<div className="loading-page d-flex justify-content-center align-items-center  bg-dark position-absolute top-0 start-0 end-0 bottom-0 ">
<h1>loading... </h1>
<i className='fas fa-spinner fa-spin fs-1 '></i>
                </div>:<>
                <div className="col-md-3">
                    <div className="poster text-center">
                        <img className='w-100' src={`https://image.tmdb.org/t/p/w500/` + movieDetails?.poster_path} alt="" /> 
                    </div>                     
                    </div>
                
                
                <div className="col-md-9  h-50">

                    <h1 className='mt-4 fonts text-white mb-3'>{movieDetails.title?.split(' ').slice(0, 2).join('')}</h1>
                    
                    <p className='text-prg fonts mb-4 fs-4'>find your best trending movies in this web</p>
                    <div className=" border-bottom border-1"></div>
                    <div className="details-movie fonts mt-4 d-flex  border-top border-bottom p-5 mt-5">
                        
                        <div className="col-md-5">

                            <ul className=' ttt list-unstyled text-white'>
                    <h2 className='text-white'>Details</h2>
                            <li  className='ps-3 fonts-siz'>Genres:{movieDetails?.genres?.map((genres) => <span className='text-prg ms-2 fs-4'>{genres.name}</span>)}</li>
                            <li className='ps-3 fonts-siz'>Language :<span className='text-prg ms-2 fs-4'>{ movieDetails.original_language}</span></li>
                            <li className='ps-3 fonts-siz'>Status :<span className='text-prg ms-2 fs-4'>{movieDetails.status}</span></li>
                            <li className='ps-3 fonts-siz'>Rating :<span className='text-prg ms-2 fs-4'>{movieDetails.vote_average}</span></li>
                        
                        </ul>
                        </div>

                        <div className=" col-md-5 offset-2 cast-films overflow-auto">
                            
                            {cast?.map((cast)=><div  className="cast-movies d-flex">

                            <div className="img-cast rounded-circle ">
                                <img className='w-100 rounded-circle' src={`https://image.tmdb.org/t/p/w500/` + cast.profile_path} alt="" />
                                
                            </div>
                            <div className="info-cast">

                            <h3 className='h6 text-white ms-3'>{cast.original_name?.split(' ').slice(0,2).join('')}</h3>
                            
                            </div>
                        </div>)}
                            </div>
                        
                        




                    </div>
                    

                    <div className="over-cast mt-5 border-bottom ">
                        
<h2 className='text-white fonts-siz'>Overview</h2>

                        <p className='text-prg fs-4'>{movieDetails.overview }</p>

                   </div>
                    
                    <div className="slider-similar mt-5">
                        
<h2 className='text-white fonts-siz'>Similar</h2>


<Slider {...settings}>
                            {similar?.map((sim) => <div key={sim.id} className="col-md-6 ">
         <Link to={`/detailstvshow/${sim.id}`}>
                                <div className="img-slider cursor-pointer">
                                    <img width={200}  src={`https://image.tmdb.org/t/p/w500/`+sim.poster_path} alt="" />
                                </div>
</Link>



      </div> )}
    </Slider>



</div>





                </div>

                </>

                
                
                
                
                
                
                }
                
                
                
                

                

                











</div>
















    </div>
    
    
    </>
}