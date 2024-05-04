"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Profile from "@/assets/images/profile2.png";
import Link from "next/link";
import { MdMenuOpen } from "react-icons/md";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { scrollToSection, scrollToTop } from "@/utils/scrollTo";
const Header = () => {
  const [isExpand, setIsExpand] = useState(false);
  const [section, setSection] = useState("")
  const navbarRef = useRef(null);
  useEffect(()=>{
    setSection(localStorage.getItem("section"))
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsExpand(false)
      }
    };
    window.addEventListener('mousedown', handleClickOutside)
  },[])
  return (
    <div   ref={navbarRef} className=" bg-primary py-2 border-b-[2px]  text-white text-sm font-semibold sticky top-0  z-10">
      <div  className="px-5 sm:px-10 lg:px-20 flex gap-20 justify-between items-center    ">
        <button  onClick={scrollToTop}>
          <Image
            height="50"
            width="50"
            priority
            src={Profile}
            alt="Profile - Digital Wizard Masud"
          />
        </button>
        {/* For Larger Device  */}
        <div className=" w-full  hidden lg:flex justify-center gap-20 ">
          <button className={`${section=="hero-section" && "text-cyellow"}`} onClick={()=>scrollToTop(setSection)}>Home</button>
          <button className={`${section=="about-section" && "text-cyellow"}`} onClick={() => scrollToSection("about-section", setSection)}>
            About
          </button>
          <button className={`${section=="reviews-section" && "text-cyellow"}`} onClick={() => scrollToSection("reviews-section", setSection)}>
            Reviews
          </button>
          <button className={`${section=="contact-section" && "text-cyellow"}`} onClick={() => scrollToSection("contact-section", setSection)}>
            Contact
          </button>
        </div>

        {/* For Small Device  */}
        <div className="block lg:hidden">
          <div
            onClick={() => setIsExpand(!isExpand)}
            className="border rounded-md cursor-pointer text-slate-200 p-1"
          >
            {isExpand ? (
              <MdMenuOpen className="text-2xl text-slate-200" />
            ) : (
              <IoMenu className="text-2xl text-slate-200" />
            )}
          </div>
        </div>
      </div>
      <motion.div
        animate={isExpand ? {height:"auto", opacity:1 } : {height:"0",  scaleY:"0"}}
        initial={{height:0, opacity:0, }}
        transition={{ease:"anticipate", duration:0.5}}
        className="lg:hidden  "
      >
        <div className="flex   flex-col items-start gap-5 px-5 sm:px-10 py-5">
        <button onClick={() => scrollToSection("hero-section", setSection)}>Home</button>
        <button onClick={() => scrollToSection("about-section", setSection)}>About</button>
        <button onClick={() => scrollToSection("reviews-section", setSection)}>
          Reviews
        </button>
        <button onClick={() => scrollToSection("contact-section", setSection)}>
          Contact
        </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;



// export const scrollToSection = (sectionName, setSection) =>{
//   let section = document.getElementById(sectionName);
//   section?.scrollIntoView({ behavior: 'smooth',   });
//   localStorage.setItem("section", sectionName)
//   setSection(sectionName)
// }


// export const scrollToTop = (setSection) =>{
//   localStorage.setItem("section", "hero-section")
//   setSection("hero-section")
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// }
