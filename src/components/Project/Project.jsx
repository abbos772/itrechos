import React from 'react'
import './Project.scss'
import { GoArrowUpRight } from 'react-icons/go'

const Project = () => {
  return (
    <div className='Project'>
        <div className='container'>
            <div id='Blog' className='Pro'>
              <div className='Pro_top'>
                <div className='Pro_text'>
                <h4>PROJECTS</h4>
                <h1>Awesome works For Our Clients</h1>
                <p>Assertively streamline interactive interfaces after value a infrastructures. Authoritatively fabricate fully tested methodologies before Holistic deliver end-to-end architectures rather sound benefits.</p>
                </div>
              </div>
              <div className='Pro_bottom'>
                <div className='Pro_box box1'>
                    <div className='tech'>
                        <h6>TECH</h6>
                        <h4>Tech Cover Industry</h4>
                        <h5>There are many variations of passages</h5>
                    </div>
                </div>
                <div className='Pro_box box2'>
                <div className='tech'>
                        <h6>TECH</h6>
                        <h4>Tech Cover Industry</h4>
                        <h5>There are many variations of passages</h5>
                    </div>
                </div>
                <div className='Pro_box box3'>
                <div className='tech'>
                        <h6>TECH</h6>
                        <h4>Tech Cover Industry</h4>
                        <h5>There are many variations of passages</h5>
                    </div>
                </div>
                <div className='Pro_box box4'>
                <div className='tech'>
                        <h6>TECH</h6>
                        <h4>Tech Cover Industry</h4>
                        <h5>There are many variations of passages</h5>
                    </div>
                </div>
                <div className='Pro_box box5'>
                <div className='tech'>
                        <h6>TECH</h6>
                        <h4>Tech Cover Industry</h4>
                        <h5>There are many variations of passages</h5>
                    </div>
                </div>
                <div className='Pro_box box6'>
                    <h4>View all services</h4>
                    <GoArrowUpRight />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Project