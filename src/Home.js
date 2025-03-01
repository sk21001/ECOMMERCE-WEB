import React from 'react';
import './Home.css';
import Product from './Product';
import About from './About';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
  < div className='header1'>
    <div className='header2'>
      <nav className='nav1'>
        <h1>AMAZON</h1>
        <ul>

          <Link to= "./About" className='About'> <li>ABOUT</li></Link> 
          <Link to="/" className='Home'><li>HOME</li></Link> 
          <li>CART</li>
          <li>SIGNUP</li>
        </ul>
      </nav>
      <div className='sc'>
      <input className='in1' placeholder='SEARCH' ></input>
      </div>
      <div>
     <Product/>
      </div>
    </div>
  </div>
  )
}

export default Home;