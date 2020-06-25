import React, { useState } from 'react';
import './Header.css';

const Header:React.FC = () => {
    return (
       <header className="header">
           <span className="logoWrapper">PAXFUL</span>
           <ul className="listWrapper">
               <li>Buy Bitcoins</li>
               <li>Sell Bitcoins</li>
               <li>Wallet</li>
               <li>Support</li>
               <li>Your account</li>
           </ul>
       </header>
    );
};

export default Header;
