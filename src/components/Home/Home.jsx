import React from 'react'
import Fvendors from '../fvendor/Fvendors'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Popularcategory from '../popularcategory/Popularcategory'
import Footer from '../footer/Footer'
import LatestProducts from '../Latest Products/Latest Products'
import Features from '../Features/Features'
import Stores from '../Stores/Stores'
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Fvendors />
      <Popularcategory />
      <LatestProducts />
      <Features />
      <Stores/>
      <Footer />
    </>
  )
}

export default Home