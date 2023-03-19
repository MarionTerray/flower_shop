import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Banner.css'

function Banner() {
  const title = "Flowers Shop";

  return (
    <div className='banner'>
      <img src={logo} alt='Flowers Shop' className='logo' />
      <h1 className='title'>{title}</h1>
    </div>
  )
}

export default Banner
