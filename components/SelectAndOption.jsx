// Description: Select and Option with Search Field 
import React, { useState, useEffect, useRef } from 'react';
import countries from "@/utils/countrycode";
import { IoIosArrowDown } from "react-icons/io";
// const country = {
//     name: "Denmark",
//     dial_code: "+45",
//     code: "DK",
//   }
const SelectAndOption = ({country, setCountry}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const dropdownRef = useRef(null);
    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
        setFilteredCountries(
          countries.filter((country) => country.name.toLowerCase().includes(value))
        );
        setIsOpen(true); // Open dropdown when searching
      };
    
      const handleItemClick = (country) => {
        setCountry(country);
        setIsOpen(false); // Close dropdown after selection
      };
    
      const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      }, []);
    return (
       <div className="relative" ref={dropdownRef}>
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer bg-cgray w-20  justify-between flex px-2 items-center h-full">
              <button
                
                className="rounded-l text-zinc-500"
              >
                {country.dial_code}
              </button>
             <IoIosArrowDown className={`text-zinc-500 ${isOpen && "rotate-180"}`} />
            </div>

            {isOpen && (
              <div className="absolute mt-1 w-[200px] bg-white border border-gray-300 rounded shadow-lg max-h-48 overflow-y-auto">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-2 border text-ctextGray bg-cgray  border-gray-300 rounded-l"
                  value={searchTerm}
                  onChange={handleSearch}
                  onFocus={() => setIsOpen(true)}
                />
                <div className="border-t"></div>
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country, index) => (
                    <div
                      key={index}
                      className="p-2 bg-cgray text-ctextGray hover:bg-cdark cursor-pointer"
                      onClick={() => handleItemClick(country)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleItemClick(country);
                        }
                      }}
                      tabIndex="0"
                    >
                      {country.name}
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-ctextGray bg-cgray">
                    No results found
                  </div>
                )}
              </div>
            )}
          </div> 
    );
};

export default SelectAndOption;