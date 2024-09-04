import React from "react";
import women from "../assets/Women.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-pink-200 overflow-hidden h-[630px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="mx-auto container flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div> New Trends
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMEN</span>
          </h1>
          <Link className="self-start uppercase font-semibold border-b-2 border-zinc-700"   to={"/"} >
           Discover More
           </Link>
        </div>
        <div className="hidden lg:block">
          <img src={women} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
