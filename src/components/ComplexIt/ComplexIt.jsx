import React from 'react'
import "./Complexit.scss"
import img from './img/manwoman.png'
import { SlArrowDown } from 'react-icons/sl'
import Blog from '../Blog/Blog'
const ComplexIt = () => {
  return (
    <div>
    <div className='Com'>
        <div className='Com_flex'>
            <div className='Com_img'>
                <img src={img} alt="" />
            </div>
            <div className='Com_text'>
                <h3>Why choose us</h3>
                <h1>Proven Expertise in Complex IT Solutions</h1>
                <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver end-to-end architectures rather than economically sound benefits. Progressively simplify end-to-end paradigms. Assertively streamline interactive interfaces after value-added infrastructure.</p>
             <div className='Com_text1'>
                <div className='Com_text2'>
                    <h2>An Award winning company</h2>
                    <SlArrowDown />
                </div>
                <div className='line'></div>
             </div>
             <div className='Com_text1'>
                <div className='Com_text2'>
                    <h2>Quick Research and Solutionsy</h2>
                    <SlArrowDown />
                </div>
                <div className='line'></div>
             </div>
             <div className='Com_text1'>
                <div className='Com_text2'>
                    <h2>Dedicated Support 24/7</h2>
                    <SlArrowDown />
                </div>
                <div className='line'></div>
             </div>
             <div className='Com_text1'>
                <div className='Com_text2'>
                    <h2>Quick Support & Tech Solution</h2>
                    <SlArrowDown />
                </div>
           
             </div>
            </div>
            
        </div>
    </div>
    <Blog/>
    </div>
  )
}

export default ComplexIt