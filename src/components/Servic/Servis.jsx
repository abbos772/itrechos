import React from 'react'
import './Servis.scss'
import img from './img/Icon.png'
import cart from './img/Icon2.png'
import img3 from './img/Icon3.png'
import img4 from './img/Icon4.png'
import { GoArrowUpRight } from 'react-icons/go'
const Servis = () => {
  return (
    <div className='servis'>
        <div className='container'>
            <div className='servis_flex'>
              <div id='Servic' className='servis_texts'>
                <h4>SERVICE</h4>
                <h1>We Providing Complete Professional IT Services.</h1>
                <p>Assertively streamline interactive interfaces after value a infrastructures. Authoritatively fabricate fully tested methodologies before Holistic deliver end-to-end architectures rather sound benefits.</p>
              <div className='big_box'>
              <div className='servis_box'>
                <img src={img} alt="" />
                <div className='servis_mini_boxes'>
                  <div className='servis_mini_box'>
                  <h3>Analytical research problem findings</h3>
                  <h5>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. </h5>
                  </div>
                </div>
               </div>
               <div className='servis_box'>
                <img src={img} alt="" />
                <div className='servis_mini_boxes'>
                  <div className='servis_mini_box'>
                  <h3>Ensure Quality services</h3>
                  <h5>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. </h5>
                  </div>
                </div>
               </div>
               <div className='servis_box'>
                <img src={img} alt="" />
                <div className='servis_mini_boxes'>
                  <div className='servis_mini_box'>
                  <h3>Provide in time Delivery</h3>
                  <h5>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. </h5>
                  </div>
                </div>
               </div>
              </div>
              </div>
              <div className='big_cartss'>
                <div className='cartss'>
                  <div className='bola'>
                    <img src={cart} alt="" />
                    <div className='ob'>
                    <h4>Network solution</h4>
                    <p>Assertively streamline interactive interfaces after value-added infrastructures.</p>
                    <button><GoArrowUpRight />LEARN MORE</button>
                    </div>
                  </div>
                  <div className='bola'>
                    <img src={img3} alt="" />
                    <div className='ob'>
                    <h4>Cyber security</h4>
                    <p>Assertively streamline interactive interfaces after value-added infrastructures.</p>
                    <button><GoArrowUpRight />LEARN MORE</button>
                    </div>
                  </div>
                 
                </div>
                <div className='cartss2'>
                  <div className='bola'>
                    <img src={img4} alt="" />
                    <div className='ob'>
                    <h4>Data analytics</h4>
                    <p>Assertively streamline interactive interfaces after value-added infrastructures.</p>
                    <button><GoArrowUpRight />LEARN MORE</button>
                    </div>
                  </div>
                  <div style={{background: "rgba(255, 137, 17, 1)"}} className='bola' id='bole'>
                    
                    <div className='ob'>
                   <div></div>
                    <button style={{paddingLeft:"200px"}}><GoArrowUpRight /></button>
                    <h2 style={{fontFamily:"sans-serif",paddingTop:"200px"}}>View all services</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Servis