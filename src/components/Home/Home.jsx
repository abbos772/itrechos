import React from 'react'
import Hero from '../Hero/Hero'
import Total from '../Total/Total'
import About from '../AboutUs/About.'
import Servis from '../Servic/Servis'
import ComplexIt from '../ComplexIt/ComplexIt'
import Project from '../Project/Project'
import Developers from '../Developers/Developers'
import Swap_com from '../Swap_com/Swap_com'
import Bot from '../BOT/Bot'
import Footer_top from '../Footer_top/Footer_top'

const Home = () => {
  return (
    <div><Hero/>
        <Total/>
        <About/>
        <Servis/>
        <ComplexIt/>
        <Project/>
        <Developers/>
        <Swap_com/>
        <Bot/>
        <Footer_top/>
    </div>
  )
}

export default Home