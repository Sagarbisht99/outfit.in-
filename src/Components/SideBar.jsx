import React from "react";
import { useSideBar } from "../Contexts/SideBarContext";
import { FaArrowRight } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useCart } from "../Contexts/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { setIsOpen, isOpen, handlerClose } = useSideBar();
  const { cart, clearCart, total } = useCart();

  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      } w-full px-4 lg:px-6 bg-white transition-all duration-300 fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] z-30`}
    >
      <div className="flex items-center justify-between py-4 border-b">
        <div className="text-sm font-semibold uppercase">
          Shopping Bag ({cart.length})
        </div>
        <div
          onClick={handlerClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <FaArrowRight />
        </div>
      </div>
      <div className="flex flex-col flex-grow overflow-hidden">
        {/* Cart Items Container */}
        <div
          className="flex flex-col flex-grow overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 300px)" }}
        >
          {cart.length > 0 ? (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <div className="text-center text-gray-500 py-4">
              Your cart is empty
            </div>
          )}
        </div>
        {/* Footer with Total and Delete Button */}
        <div className="flex justify-between items-center py-4 border-t mt-auto">
          <div className="font-semibold uppercase">
            <span className="mr-2">Total:</span>$ {total.toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer text-2xl py-2 px-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            <MdDeleteOutline />
          </div>
        </div>
       <div className="flex gap-2 flex-col">
       <Link
          to="./"
          className="bg-zinc-300 font-medium text-zinc-800 p-4 flex items-center justify-center "
        >
          View Cart
        </Link>
        <Link
          to="./"
          className="bg-zinc-700 font-medium text-white p-4 flex items-center justify-center "
        >
          CheckOut
        </Link>
       </div>
      </div>
    </div>
  );
};

export default SideBar;
