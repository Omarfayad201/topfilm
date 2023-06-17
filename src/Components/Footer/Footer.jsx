import React from 'react'
import logo from '../../assets/images/7a1bd9d0-7eef-40f7-8e40-94049c9f2830.jpeg'
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';
export default function Footer() {
    return <>
        <footer className='bg-nav  fonts  mt-5 '>
        <div className="container text-white pt-5 px-5">
            <div className="info-footer text-center">
                
                    <h3>Smart Move <span><img className='logo-fot' src={logo} alt="" /></span> Tv WebSet</h3>
                    

                        <ul className="navbar-nav mt-4">
        <li className="nav-item d-flex justify-content-center align-items-center">
                            <NavLink className="nav-link  text-white spas-fot px-4 md-footer-link" aria-current="page" to="/">Home</NavLink>
                
                            <NavLink className="nav-link text-white spas-fot px-4 md-footer-link" to="/movies">Movies</NavLink>
        
                        <NavLink className="nav-link text-white spas-fot px-4 md-footer-link" to="/tvshow">TvShow</NavLink>
                        
                         <NavLink className="nav-link text-white spas-fot px-4 md-footer-link " to="/actors">Actors</NavLink>
                        
                        </li>

      </ul>
                    <div className="cont-footer d-flex justify-content-center align-items-center  ">
                   <div className="icon-footer d-flex justify-content-center align-items-center">
                        
<i className='fab fa-facebook-f'></i>

                  </div>     
                   <div className="icon-footer d-flex justify-content-center align-items-center">
                        
<i className='fab fa-instagram'></i>

                  </div>     
                   <div className="icon-footer d-flex justify-content-center align-items-center">
                        
<i className='fab fa-linkedin-in'></i>

                  </div>     
</div>

                 <p className='mt-5 spas'> © 2023 Frontend Development ui design </p>   

                    
        </div>
        
        
            




        </div>    
</footer>
    
    </>
}
