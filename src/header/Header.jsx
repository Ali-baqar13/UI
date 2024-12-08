import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo-img.png'
import { BsChevronDoubleRight } from "react-icons/bs";
import { BsChevronCompactRight,BsChevronRight} from "react-icons/bs";






const Header = () => {

  const navLinks = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/upload",
      display: "Upload Image",
    },

   
    {
      path: "/statistics",
      display: "Statistics",
    },
    {
      path: "/about",
      display: "About",
    },
    

  ];

  const [icon1,setIcon1]=useState(true)
  const [icon2,setIcon2]=useState(true)
  const [icon3,setIcon3]=useState(true)
  const [icon4,setIcon4]=useState(true)

  return (
    <header className="flex justify-between mt-3 px-32">
      <div className="flex ">
        <figure className="w-[30px] h-[25px]"> 
          <img className="w-full h-full" src={logo}></img>
        </figure>
        <span className="font-bold text-lg ml-1">Medi</span><span>Care</span>
      </div>
      <nav className="w-[40%] mr-5">
        <ul className="flex justify-between w-[100%]">
          <li><NavLink className={({ isActive }) =>
                isActive
                  ? "clicked font-serif"
                  : "unclicked font-serif"
              } to="/home">Home {icon1  && <BsChevronRight onClick={()=>setIcon1(true)} className="inline-block w-3 pb-[2px]"/>}</NavLink></li>

<li><NavLink className={({ isActive }) =>
                isActive
                  ? "clicked font-serif"
                  : "unclicked font-serif"
              } to="/upload">Upload Image {icon2  && <BsChevronRight onClick={()=>setIcon2(false)} className="inline-block w-3 pb-[2px]"/>}</NavLink></li>

<li><NavLink className={({ isActive }) =>
                isActive
                  ? "clicked font-serif"
                  : "unclicked font-serif"
              } to="/statistics">Statistics {icon3  && <BsChevronRight onClick={()=>setIcon3(false)} className="inline-block w-3 pb-[2px]"/>}</NavLink></li>


<li><NavLink className={({ isActive }) =>
                isActive
                  ? "clicked font-serif"
                  : "unclicked font-serif"
              } to="/about">About {icon4 && <BsChevronRight onClick={()=>setIcon4(false)} className="inline-block w-3 pb-[2px]"/>}</NavLink></li>
        </ul>
      </nav>
      
      <div className="border-2 border-black rounded-3xl px-3 font-semibold text-start cursor-pointer hover:bg-black hover:text-white">Discover Appendix <BsChevronDoubleRight className='inline-block pb-[2px]'/> </div>
    </header>
  )
}

export default Header