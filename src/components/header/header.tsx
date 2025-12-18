"use client"
import { faBars, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkHeader from "./LinkHeader";
import { useState } from "react";

const Header = () => {
  const [click,setClick] = useState(false);
  return (
    <div className="fixed center center h-12 main-color w-full z-10 text-gray-200">
      <div className="container flex justify-between items-center">
        <FontAwesomeIcon className="text-xl ms-3" icon={faListCheck} />
        <div className="block md:hidden cursor-pointer me-3 text-xl" onClick={() => setClick(prev => !prev)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`links md:flex ${click ? "w-full main-color z-11 flex text px-4 flex-col absolute left-0 top-12 h-fit" : "hidden"}`}>
          <LinkHeader href="#features" text="Features" setClick={setClick}/>
          <LinkHeader href="#how-work" text="How Works" setClick={setClick}/>
          <LinkHeader href="#testimonial" text="Testimonial" setClick={setClick}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
