import React from 'react'
import './Developers.scss'
import { GoArrowUpRight } from 'react-icons/go'
import img from './img/Img.png'
import img2 from './img/Img2.png'
import img3 from './img/Img3.png'
import img4 from './img/Img4.png'
const Developers = () => {
  return (
    <div className='container'>
        <div className='developers'>
            <div className='dev_top'>
                <h3>OUR TEAM</h3>
                <div className='dev_text'>
                    <h1>Our Professional <br /> Team member</h1>
                    <button><GoArrowUpRight /> VIEW ALL</button>
                </div>
            </div>
            <div className='Users'>
                <div className='user'>
                       <img src={img} alt="" />
                       <div className='user_text'>
                        <h4>Eleanor Pena</h4>
                        <p>Senior Developer</p>
                       </div>
                </div>
                <div className='user'>
                <img src={img2} alt="" />
                <div className='user_text'>
                        <h4>Ralph Edwards</h4>
                        <p>Senior Developer</p>
                       </div>
                </div>
                <div className='user'>
                <img src={img3} alt="" />
                <div className='user_text'>
                        <h4>Albert Flores</h4>
                        <p>Senior Developer</p>
                       </div>
                </div>
                <div className='user'>
                <img src={img4} alt="" />
                <div className='user_text'>
                        <h4>Jerome Bell</h4>
                        <p>Senior Developer</p>
                       </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Developers