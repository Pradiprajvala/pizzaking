import React from 'react'
import { GlobalStyle } from '../globalStyles';
import Hero from '../Components/Hero/index.js'
import Products  from '../Components/Products/index.js'
import{ productData,sweetProductData } from '../Components/Products/data.js'
import Feature from '../Components/Feature/index.js';
import Footer from '../Components/Footer/index.js'

const Home = () => {
  return(
    <>  <GlobalStyle />
      <Hero />
     
      <Products heading='Choose your favourite' data={productData}/>
      <Feature />
      <Products heading='Sweet' data={sweetProductData}/>
      <Footer /> </>
    )
}
export default Home;