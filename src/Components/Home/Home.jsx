import styles from './Home.module.css';
// import { useState } from 'react';


import Topmovies from '../Topmovies/Topmovies';
import Toptvshow from '../Toptvshow/Toptvshow';
 import Topactors from '../Topactors/Topactors';
export default function Home() {

 
  



    return <>
<div className="container-fluid g-0  mb-5 me-0  p-0 m-auto ">
      <Topmovies/>
      
      <Toptvshow/>
      
<Topactors/>

      </div>
        
        
        
    </>
}
