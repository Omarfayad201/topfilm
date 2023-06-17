import styles from './Movies.module.css';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export default function Movies() {
  const [topMovies, setTopMovies] = useState([]);

  const [searchData, setSearchData] = useState([]);

  const [data, setData] = useState(null);

  const [search, setSearch] = useState([]);
  
  const [print, setPrint] = useState(false);

  const [movies, setMovies] = useState([]);
  
  const [loading, setLoading] = useState(false);

  async  function getMovies() {
       setLoading(true)
let {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50`)

  setLoading(false)
      let response =  data.results
      const slicedArray = response
      
setMovies(slicedArray)



   
  }


   function getData(val) {

    setData(val.target.value);
    setPrint(false)
   
    
  }

  async function searchMove(name) {
   
    let { data }= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=1&include_adult=false&query=${name}`) 
    
setSearchData(data.results)
    // console.log(searchData);
  
  }

  // searchMove(data);


 async function topRatedMovie() {
  
let {data}=await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US&page=1`)

   setTopMovies(data.results)
   
   console.log(topMovies);

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

    getMovies();
    topRatedMovie();
},[])

    return <>
      
      <div className="container-fluid g-0 mb-5">

         <div className="cont mt-5">
          
          <div className="col-md-10 mx-auto">
<Slider className='ps-2 slid-md' {...settings}>
              {topMovies.map((movie) => <div key={movie.id} className='col-md-3 '>
              <Link to={`/detailsmovies/${movie.id}`}>
                <div className="img-toprated ">
<img className='wd-slid'  src={`https://image.tmdb.org/t/p/w500/`+movie.poster_path} alt="" />

                </div>
              </Link>
              </div>)}          
            

    </Slider>

        </div>
</div>


        <div className="search-movie mt-5 text-center mb-3 pb-5b-3 h-100">
        
        <input className='form-control w-50 mx-auto' onChange={getData} type="text"  name='' id=''/>

          {/* {
            print? <h3 className='mt-4 text-white'>{searchData.title}</h3>:null
       } */}
          
          <button  onClick={()=>searchMove(data)} className='btn btn-outline-light mt-3'>Search Movie</button>

          <div className="row">
            

            {searchData.map((searchMovies) => <div key={searchMovies.id} className='col-md-3 p-4  text-center'>
<Link to={`/detailsmovies/${searchMovies.id}`}>
              {data?<div className="img-search border-bottom  text-center">
              <img width={170} height={250} src={`https://image.tmdb.org/t/p/w500/`+ searchMovies.poster_path} alt="" />
              <h2 className='mt-4 h5 text-white'>{searchMovies.title?.split(' ').slice(0,1).join(' ') }</h2>
</div>:null}
            </Link>
            



          </div>)}
      </div>
          
          



    </div>
      

          {loading == true ?<div className="loading-page d-flex justify-content-center align-items-center  bg-dark position-absolute top-0 start-0 end-0 bottom-0 ">
<h1>loading... </h1>
<i className='fas fa-spinner fa-spin fs-1'></i>
        </div>:<div className="row position-relative">
    
          <div className="titles text-white mt-5 fonts ps-5">
    
<h1>Trending<br/>Movies<br/>Right Now </h1>
<p>Top Trending movies by Week</p>
            </div>

                {movies.map((movie) => <div key={movie.id} className="card middle border-0 col-md-3 mx-3 my-5 fonts">
                    <Link className='card middle border-0 col-md-3 mx-3 my-5 fonts' to={`/detailsmovies/${movie.id}`}>
            <div className="front">
                          <img className='' src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt="" />
                        
                      </div>
                        <div className="info position-absolute top-100 w-100  text-center pt-2"><h3  className='text-white h4'>{movie.title.split(' ').slice(0 ,1).join('')}</h3></div>
            <div className="back">
                <div className="back-content middle ">
                            <h2>{ movie.media_type}</h2>
          
                 <div className="overvies  overflow-hidden p-4 d-flex justify-content-center align-items"><p className='trans'>{movie.overview}  </p></div>   
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
  
        }


        
          


        </div>
        


      
        
        
        
    </>
}
