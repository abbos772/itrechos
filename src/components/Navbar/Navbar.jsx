import React, { useState,useEffect } from 'react'
import './Navbar.scss'
import Logo from './img/Itrechos.png'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMenuOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true); 
        } else {
          setIsScrolled(false); 
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
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
          <a href="#">HOME</a>
          <a href="#Servic">SERVICES</a>
          <a href="#About">About US</a>
          <a href="#Blog">BLOG</a>
          <a href="#Contact">CONTACT</a>
          <div className='tel'>
            <FaPhoneVolume/>
            <p style={{color:"white"}}>+998 93 772 09 30</p>
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