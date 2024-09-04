import React, { useEffect, useState } from "react";
import { useSideBar } from "../Contexts/SideBarContext";
import { IoBagHandleOutline } from "react-icons/io5";
import { useCart } from "../Contexts/CartContext";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, setIsOpen } = useSideBar();

  const [isActive, setisActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setisActive(true) : setisActive(false);
    });
  }, []);

  const { cartAmount } = useCart();

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md " : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className=" container flex mx-auto h-full items-center justify-between">
        <Link to={"/"}>
          <img src={Logo} alt="" />
        </Link>
        <div
          className="relative cursor-pointer flex"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoBagHandleOutline className="text-4xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 h-[18px] w-[18px] text-[12px] rounded-full text-white justify-center flex items-center ">
            {cartAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
