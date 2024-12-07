import React from 'react'
import './Blog.scss'
import img from './imgs/Image.png'
import imag from './imgs/Imag.png'
import im from './imgs/im.png'
import i from './imgs/i.png'
const Blog = () => {
  return (
    <div className='container'>
        <div className='Blog'>
            <h1>Ready To Transform Your Business?</h1>
            <div className='Blog_flex'>
                <div className='Blog_card'>
                    <img src={img} alt="" />
                    <div className='Blog_text'>
                        <h3>Tech Solution</h3>
                        <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver 
                        end sound benefits. </p>
                    </div>
                </div>
                <div className='Blog_card'>
                    <img src={imag} alt="" />
                    <div className='Blog_text'>
                        <h3>Quick Support</h3>
                        <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver 
                        end sound benefits. </p>
                    </div>
                </div>
            
                <div className='Blog_card'>
                    <img src={im} alt="" />
                    <div className='Blog_text'>
                        <h3>IT Project Solution</h3>
                        <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver 
                        end sound benefits. </p>
                    </div>
                </div>
                <div className='Blog_card'>
                    <img src={i} alt="" />
                    <div className='Blog_text'>
                        <h3>Solving IT Challenges</h3>
                        <p>Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver 
                        end sound benefits. </p>
                    </div>
                </div>
            
            </div>
            
        </div>
    </div>
  )
}

export default Blog