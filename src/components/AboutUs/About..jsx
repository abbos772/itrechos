import React from 'react'
import './About.scss'
import aboutMan from './img/Image (3).png';
import aboutMan2 from './img/Image (4).png';
const About = () => {
  return (
    <div className='About container'>
         <div id='About'  className='about_texts'>
            <h4>ABOUT US</h4>
            <h1>Our Company Specialize In IT Solutions & Technology with Passion</h1>
            <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver end-to-end architectures rather than economically sound benefits. Progressively simplify end-to-end paradigms. Assertively streamline interactive interfaces after value-added infrastructure.</p>
         </div>
         <div  className='about_flex'>
            <div className='about_images'>
              <div className='abt_img'>
                <img src={aboutMan} alt="" />
                <div className='abt_box'>
                    <h3>12+ </h3>
                    <p>Years  Experience</p>
                </div>
              </div>
              <div className='abt_img2'>
                <img src={aboutMan2} alt="" />
              </div>
            </div> 
            <div className='about_left_text'>
                <h3>We try to give all kind of technology solution as your requirements and we are the best in field.</h3>
                <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver end-to-end architectures rather than economically sound benefits. Progressively simplify end-to-end paradigms. Assertively streamline interfaces .</p>
                <div className='line'></div>
                <h3>Provide IT services to hundreds of SME customers across a diverse range of sectors.</h3>
                <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver end-to-end architectures rather than economically sound benefits. Progressively simplify end-to-end paradigms. Assertively streamline interfaces .</p>
                <button>MORE ABOUT US</button>
            </div>
         </div>
    </div>
  )
}

export default About