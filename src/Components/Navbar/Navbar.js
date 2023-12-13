import React from 'react';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';

const AppNavbar = () => {
   return (
      <div className='navbar-container'>
         <div className='logo'>
            <h1>Coinstore</h1>
         </div>
         <div className='links'>
            <ul>
               <li>Market</li>
               <li>Trade <FontAwesomeIcon icon={faAngleDown} /></li>
               <li>Earn</li>
               <li>Crypto Launch <FontAwesomeIcon icon={faAngleDown} /></li>
               <li className="icon-list-item">
                  <FontAwesomeIcon icon={faFire} /> Contest
               </li>
               <li>Event <FontAwesomeIcon icon={faAngleDown} /></li>
               <li>Blog</li>
               <li>Discover</li>
               <li>3rd Anniversery</li>
            </ul>
         </div>

         <div className='navbar-button'>
            <button className='button-left'>Login</button>
            <button className='button-right'>Register</button>
         </div>

         <div className='sidebar'>
            <FontAwesomeIcon icon={faBars} />
         </div>

      </div>
   );
};

export default AppNavbar;
