import React, { useRef, useEffect } from "react";
import Parallax from "parallax-js";
const ParallaxBackground = ({children}) => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneRef.current, {
      relativeInput: true,
    });

    return () => {
      parallaxInstance.destroy();
    };
  }, []);

  return (
    <div ref={sceneRef} className="parallax-container overflow-hidden">
      <div data-depth="0.2" className="parallax-layer h-[90vh]  relative ">
        <div className="text-white h-full flex justify-center items-center">
            {children}
        </div>
        <div className="absolute  top-[10%] left-[50%]">
          <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 3.3541L2.42705 24.5h21.1459L13 3.3541z"
              stroke="#FF4C60"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>

        <div className=" absolute top-[30%] left-[30%]">
          <svg width="30" height="25" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M.1436 8.9282C3.00213 3.97706 8.2841.92763 14.00013.92796c5.71605.00032 10.9981 3.04992 13.85641 8 2.8583 4.95007 2.8584 11.0491-.00014 16.00024l-2.77128-1.6c2.28651-3.96036 2.28631-8.84002.00011-12.8002-2.2862-3.96017-6.5124-6.40017-11.08513-6.4-4.57271.00018-8.79872 2.43984-11.08524 6.4002l-2.77128-1.6z"
              fill="#44D7B6"
              fillRule="evenodd"
            />
          </svg>
        </div>

        <div className=" absolute top-[90%] left-[58%]">
          <svg width="30" height="25" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M29.8564 16.0718c-2.85854 4.95114-8.1405 8.00057-13.85654 8.00024-5.71605-.00032-10.9981-3.04992-13.85641-8-2.8583-4.95007-2.8584-11.0491.00014-16.00024l2.77128 1.6c-2.28651 3.96036-2.28631 8.84002-.00011 12.8002 2.2862 3.96017 6.5124 6.40017 11.08513 6.4 4.57271-.00018 8.79872-2.43984 11.08524-6.4002l2.77128 1.6z"
              fill="#6C6CE5"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className=" absolute top-[64%] left-[23%]"></div>
        <div className=" absolute top-32 left-52">
          <svg width="19" height="21" xmlns="http://www.w3.org/2000/svg">
            <rect
              transform="rotate(-40 6.25252 10.12626)"
              x="7"
              width="3"
              height="25"
              rx="1.5"
              fill="#6C6CE5"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className=" absolute top-[86%] left-[90%]">
          <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 22.6459L2.42705 1.5h21.1459L13 22.6459z"
              stroke="#FFD15C"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className=" absolute top-[25%] left-[70%]">
          <svg width="49" height="17" xmlns="http://www.w3.org/2000/svg">
            <g fill="#FF4C60" fillRule="evenodd">
              <path d="M.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C23.1175 5.50106 25.5 10.78292 25.5 16.5H23c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0C4.90625 7.70116 3 11.92697 3 16.5H.5z" />
              <path d="M23.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C46.1175 5.50106 48.5 10.78292 48.5 16.5H46c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0-3.09375 2.28651-5 6.51232-5 11.08535h-2.5z" />
            </g>
          </svg>
        </div>
        <div className=" absolute top-[38%] left-[84%]">
          <svg width="15" height="23" xmlns="http://www.w3.org/2000/svg">
            <rect
              transform="rotate(30 9.86603 10.13397)"
              x="7"
              width="3"
              height="25"
              rx="1.5"
              fill="#6C6CE5"
              fillRule="evenodd"
            />
          </svg>
        </div>

        <div className=" absolute top-[65%] left-[71%]">
          <svg width="47" height="29" xmlns="http://www.w3.org/2000/svg">
            <g fill="#44D7B6" fillRule="evenodd">
              <path d="M46.78878 17.19094c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36265-9.0893-.26708-11.74616-4.27524-2.65686-4.00817-3.08917-9.78636-1.13381-15.15866l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12693 2.12514 3.20674 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40949 8.48988-8.70673l2.34923.85505z" />
              <path d="M25.17585 9.32448c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36264-9.0893-.26708-11.74616-4.27525C.16049 11.92447-.27182 6.14628 1.68354.77398l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12692 2.12514 3.20675 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40948 8.48988-8.70672l2.34923.85505z" />
            </g>
          </svg>
        </div>

        <div className=" absolute top-[75%] left-[23%]">
          <svg width="33" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32.36774.34317c.99276 5.63023-1.09332 11.3614-5.47227 15.03536-4.37895 3.67396-10.3855 4.73307-15.75693 2.77837C5.76711 16.2022 1.84665 11.53014.8539 5.8999l3.15139-.55567c.7941 4.50356 3.93083 8.24147 8.22772 9.8056 4.29688 1.56413 9.10275.71673 12.60554-2.2227C28.34133 9.98771 30.01045 5.4024 29.21635.89884l3.15139-.55567z"
              fill="#FFD15C"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};



export default ParallaxBackground;
