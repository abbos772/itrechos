import React, { useState } from 'react'
import './Navbar.scss'
import Logo from './img/Itrechos.png'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMenuOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <div className='navbar'> 
      <div className='container'>
       <div className='nav_flex'>
       <div className='nav_logo'>
               <img src={Logo} alt="" />
        </div>
       <div className={`nav_menu ${toggle ? "show" : ""}`}>
       <button
            id="menu_close"
            className="menu"
            onClick={() => setToggle(!toggle)}
          >
            <IoMdClose fontSize={30} />
          </button>
       <div className='nav'>
          <a href="">HOME</a>
          <a href="">SERVICES</a>
          <a href="">PAGES</a>
          <a href="">BLOG</a>
          <a href="">CONTACT</a>
          <div className='tel'>
            <FaPhoneVolume/>
            <p>+998 93 772 09 30</p>
          </div>
       </div>
       </div>
       <button className="menu" onClick={() => setToggle(!toggle)}>
            <IoMenuOutline fontSize={30} />
          </button>
       </div>
     
      </div>
    </div>
  )
}

export default Navbar