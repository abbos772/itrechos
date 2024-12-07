import React from 'react'
import './Swap_com.scss'
import Swipper from '../Swipper/Swipper'
const Swap_com = () => {
  return (
    <div className='Swap_com'>
        <div className='container'>
           <div className='Swap_flex'>
           <div className='Swap_top'>
                <h4>Testimonial</h4>
                <h1>Trusted by more than 1000+ <br /> company’s around the world</h1>
            </div>
            <div className='Swap_bottom'>
                <Swipper/>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Swap_com