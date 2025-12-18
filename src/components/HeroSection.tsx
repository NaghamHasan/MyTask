import React from "react";
import HeroSvg from "./svgs/HeroSvg";

const HeroSection = () => {
  return (
    <section className="heroSection center">
      <div className="container flex justify-between items-center">
        <div className="w-full text-center md:w-[40%] md:text-start">
          <h1 className="main-text-color font-bold text-3xl mb-5">
            Master Your Workflow,Build Your Success
          </h1>
          <p className="mt-3 text-gray-700">
            Plan,truck,and manage all your tasks in one flexible interface. Stay
            organized and hit your deadlines without the stress
          </p>
          <button className="main-button mt-5">Get Started</button>
        </div>
        <div className="hidden md:inline-block md:w-[50%]">
          <HeroSvg />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
