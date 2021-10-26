import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({loginData,logout}) {
    
    return (
        <div className='p-3 d-flex justify-content-between align-items-center'>
            
            <ul className='list-unstyled d-flex align-items-center'>
            <li className='px-2 h1'>
                  <NavLink to="/home">Noxe</NavLink>
              </li>
              {loginData?
                <>
                <li className='px-2'>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li className='px-2'>
                    <NavLink to="/movies">Movies</NavLink>
                </li>
                <li className='px-2'>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className='px-2'>
                    <NavLink to="/tvshows">Tv shows</NavLink>
                </li>
                </>:''}
            

            </ul>
            <ul className='list-unstyled d-flex '>
               <h5>Hello : {loginData?.first_name}</h5>
               <i className='fab fa-facebook m-2'></i>
               <i className='fab fa-instagram m-2'></i>
               <i className='fab fa-youtube m-2'></i>
              
             {loginData?
               <li onClick={logout} className='px-2'>
                 Logout
               </li>:
               <>
                <li className='px-2'>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li className='px-2'>
                    <NavLink to="/register">Register</NavLink>
                </li>
               </>
             }
             
            
            

            </ul>

        </div>
    )
}
