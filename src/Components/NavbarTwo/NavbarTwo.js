import React from 'react';
import "./NavbarTwo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';

const AppNavbar = () => {
   return (
      <div className='navbar-container'>
         <div className='links'>
            <ul>
               <li><h3>BTC/USDT <FontAwesomeIcon icon={faAngleDown} /> <br/> Assest Info</h3> </li>
               <li>24H Change <br/> 0.80%</li>
               <li>24H High <br/> 42000</li>
               <li>24H Low <br/> 40000</li>
               <li>24H Vol(BTC) <br/> 2755</li>
               <li>24H Turnover(USDT) <br/> 115676</li>
            </ul>
         </div>

      </div>
   );
};

export default AppNavbar;
