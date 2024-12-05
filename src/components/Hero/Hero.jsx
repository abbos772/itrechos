import React from 'react'
import './Hero.scss'
import { LuCirclePlay } from 'react-icons/lu'
import heroImg from './img/Image (1).png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            <div className='hero_flex'>
                <div className='hero_text'>
                   <div className='mini_t'>
                   <div className='d'></div>
                   <h3>WELCOME TO Ztech!</h3>
                   </div>
                   <h1>We are ready 
<b> To provide </b> <br />
It solution</h1>
                  <p>
                  Assertively streamline interactive interfaces after value infrastructures. untorn datively fabricate fully tested methodologies before Assertively streamline interactive
                  interfaces after  infrastructures. We are 100+ professional software .
                  </p>
                  <div className='play'>
                    <button>EXPLORE SERVICES</button>
                    <div className='pl'>
                    <LuCirclePlay />
                    <h4> Watch A Video
                    </h4>
                    </div>
                   
                  </div>
                </div>
                <div className='hero_img'>
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero