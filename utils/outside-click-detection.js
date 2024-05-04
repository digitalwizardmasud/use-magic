import React from "react";

const OutSideClickDetection = () => {
  const navbarRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        console.log("Clicked outside of the Navbar");
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
  }, []);

  return <div ref={navref}>{/* All Content Here  */}</div>;
};

export default OutSideAreaDetection;
