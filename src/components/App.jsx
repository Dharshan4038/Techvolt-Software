import React from 'react'
import Header from './header/Header'
import Banner from './banner/Banner'
import Social from './social/Social'
import Navbar from './navbar/Navbar'
import Slider from './imageSlider/Slider'
import Products from './products/Products'
import Statistics from './statistics/Statistics'
import DigitalMarketing from './digitalMarketing/DigitalMarketing'
import Internship from './internships/Internship'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div>
        <Header />
        <Banner />
        <Social />
        <Navbar />
        <Slider />
        <Products />
        <Statistics />
        <DigitalMarketing />
        <Internship />
        <Footer />
    </div>
  )
}

export default App