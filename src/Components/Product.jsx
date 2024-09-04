import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { useCart } from "../Contexts/CartContext";

const Product = ({ product }) => {
  const { id, image, category, price, title } = product;

      const {addToCart} = useCart();    
      
            

  return (
    <div>
      <div className=" border-[1px] mb-4 relative group transition overflow-hidden border-[#e4e4e4] h-[300px]">
        <div className="w-full h-full flex justify-center items-center">
          {/* {image} */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300 "
              src={image}
              alt=""
            />
          </div>
        </div>

        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300  flex flex-col justify-center items-center gap-2 ">
          <button>
            <div onClick={() => addToCart(product , id)} className="flex items-center active:bg-black justify-center w-12 h-12 bg-red-500">
              <IoMdAdd className="text-2xl text-white" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12  bg-white flex items-center justify-center text-black  drop-shadow-xl"
          >
            <IoEyeSharp />
          </Link>
        </div>
      </div>

      <div>
          <div className="text-lg mb-1 text-gray-600">{category}</div>
          <Link to={`/product/${id}`}>
            <h2 className="font-bold text-xl mb-1">{title}</h2>
          </Link>
          <div className="font-semibold text-xl">$ {price}</div>
        </div>
    </div>
  );
};

export default Product;
