import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './navBar.css'
const NavBar = () => {
  return <div className='nav-wrap'>
      <h1>Ecommerce</h1>
      <nav>
          <ul>
              <li> <a href="">products</a></li>
              <li> <a href="">contact</a></li>
              <li> <a href="">help</a></li>
              <CartWidget></CartWidget>
          </ul>
      </nav>
  </div>;
};

export default NavBar;
