// For nextjs, import css on layout.js file
// import "aos/dist/aos.css";
// 
"use client";
import Aos from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "bottom-bottom",
    });
  }, []);
  return (
    <main >
      <div data-aos="fade-up" id="hero-section"><Hero /></div>
    </main>
  );
}
