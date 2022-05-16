import React from 'react'
import {HeroBanner, Product, FooterBanner}  from '../components';


const Home = () => {
  return (
    <div>
      <HeroBanner  /> 
      <div className='products-heading'>
        <h2> Best Selling Products</h2>
        <p2>Cars of many variations</p2>
      </div>

      <div className='products-container'>
        {["Product 1", "Product 2"].map(
          (product) => product)}
      </div>
    </div>
  )
}

export default Home;