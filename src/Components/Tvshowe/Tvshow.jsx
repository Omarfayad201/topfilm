import React from 'react'
import styles from './Tvshow.module.css';
import Slider from "react-slick";
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Tvshow() {


  const [topRated, setTopRated] = useState([]);

  const [apiTV, setApiTV] = useState([]);

  const [dataTv, setDataTv] = useState([]);

  const [printTv, setPrintTv] = useState(false);

  const [tvshow, setTvShow] = useState([]);
  
  const [loading, setLoading] = useState(false);

  async  function getTv() {
       setLoading(true)
let {data} = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=f1aca93e54807386df3f6972a5c33b50`)

  setLoading(false)
      let response =  data.results
      const slicedArray = response
      
setTvShow(slicedArray)

// console.log(tvshow);

   
  }




  function getDataTv (val) {
  
    setDataTv(val.target.value)
    
// console.log(dataTv);
    setPrintTv(false)
    // console.warn(val.target.value);
}

 async function searchTv(name) {
    
   let { data } = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=1&include_adult=false&query=${name}`);

   setApiTV(data.results);
   
  //  console.log(apiTV);

  }
  
  
  async function topTvRated() {
  
let {data}=await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=1`)

    setTopRated(data.results);

}

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  
  };


  useEffect(() => {

    getTv()

    topTvRated()

},[])

    return <>

      
      <div className="container-fluid g-0  mb-5">

        <div className="cont mt-5">
          
          <div className="col-md-10 mx-auto">
<Slider className='ps-3 slid-md' {...settings}>
            {topRated.map((top) => <div key={top.id} className='col-md-6 '>
              
              <Link to={`/detailstvshow/${top.id}`}>
              <div className="img-toprated md-slid">
                
<img className='wd-slid' src={`https://image.tmdb.org/t/p/w500/`+top.poster_path} alt="" />

</div>
</Link>

            </div>)}                
            

    </Slider>

        </div>
</div>
        
        

        <div className="search-tv mt-5 text-center mb-3 pb-5b-3 h-100">
          
<input className='form-control w-50 mx-auto' onChange={getDataTv} type="text" />

<button className='btn btn-outline-light mt-4' onClick={()=>searchTv(dataTv)}>Search Tv</button>

          <div className="row">
            

            {apiTV.map((tv) => <div key={tv.id} className='col-md-3 p-4  text-center'>

              <Link to={`/detailstvshow/${tv.id}`}>
              {dataTv ? <div className='img-search border-bottom  text-center'>
<img width={170} height={250} src={`https://image.tmdb.org/t/p/w500/`+tv.poster_path} alt="" />                
                <h2 className=' mt-4 h5 text-white'>{tv.title?.split(' ').slice(0,2).join(' ')}</h2>
</div>:null}

</Link>


            </div>)}






</div>
          


</div>








          <div className="row position-relative">
    
          <div className="titles text-white mt-5 fonts ps-5 ">
    
<h1>Trending<br/>tvshow<br/>Right Now </h1>
<p>Top Trending tvshow by Week</p>
            </div>

                {tvshow.map((tv) => <div key={tv?.id} className="card middle border-0 col-md-3 mx-3 my-5 fonts">
                    <Link className='card middle border-0 col-md-3 mx-3 my-5 fonts ' to={`/detailstvshow/${tv.id}`}>
                    
            <div className="front">
                          <img className='' src={`https://image.tmdb.org/t/p/w500/` + tv?.poster_path} alt="" />
                        
                      </div>
                        <div className="info position-absolute top-100 w-100  text-center pt-2"><h3  className='text-white h4 fs-6'>{tv?.name.split(' ').slice(0,2).join(' ')}</h3></div>
            <div className="back">
                <div className="back-content middle ">

                      <h2>{tv?.media_type }</h2>
          
                 <div className="overvies  overflow-hidden p-4 d-flex justify-content-center align-items"><p className='trans'>{tv?.overview}  </p></div>   
                    <div className="sm">
                       <a href=""> <i className='fab fa-facebook cursor-pointer '></i></a>  
                     <a href=""><i className='fab fa-twitter cursor-pointer '></i> </a>  
                     <a href=""><i className='fab fa-instagram cursor-pointer '></i></a>   
                     <a href=""><i className='fab fa-youtube cursor-pointer '></i> </a>   
                       
                      </div>
                    
            </div>
                  </div>
                  </Link>
        </div> )}





                </div>
  
        


        
          


        </div>
        


      
        
        
        
    </>
}
