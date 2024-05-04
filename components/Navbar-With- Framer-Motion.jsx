"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Profile from "@/assets/images/profile2.png";
import Link from "next/link";
import scrollToSection from "@/utils/ScrollToSection";
import { MdMenuOpen } from "react-icons/md";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
const Header = () => {
  const [isExpand, setIsExpand] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div className=" bg-primary py-3 border-b-[2px]  text-white font-semibold sticky top-0  z-10">
      <div className="px-5 sm:px-10 lg:px-20 flex justify-between items-center    ">
        <Link href="/">
          <Image
            height="50"
            width="50"
            priority
            src={Profile}
            alt="Profile - Digital Wizard Masud"
          />
        </Link>
        {/* For Larger Device  */}
        <div className=" hidden lg:flex gap-5 ">
          <button onClick={() => scrollToSection("hero-section")}>Home</button>
          <button onClick={() => scrollToSection("about-section")}>
            About
          </button>
          <button onClick={() => scrollToSection("reviews-section")}>
            Reviews
          </button>
          <button onClick={() => scrollToSection("contact-section")}>
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
        transition={{ease:"anticipate", duration:0.3}}
        className="lg:hidden  "
      >
        <div className="flex   flex-col items-start gap-5 px-5 sm:px-10 py-5">
        <button onClick={() => scrollToSection("hero-section")}>Home</button>
        <button onClick={() => scrollToSection("about-section")}>About</button>
        <button onClick={() => scrollToSection("reviews-section")}>
          Reviews
        </button>
        <button onClick={() => scrollToSection("contact-section")}>
          Contact
        </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
