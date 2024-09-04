import React from "react";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { useCart } from "../Contexts/CartContext";

const CartItem = ({ item }) => {
  const { title, id, image, price, amount } = item;

  const {removeFromCart , increamentCart , decreamentCart } = useCart()



  return (
    <div className="flex gap-x-4  lg:px-6 border-b border-grey-200 w-full font-light text-gray-500">
      <div className=" w-full min-h-[150px] flex items-center gap-x-4 ">
        <div>
          <Link to={`/product/${id}`}>
            <img className="max-w-[80px]" src={image} alt="" />
          </Link>
        </div>
        <div className="flex flex-col w-full gap-3">
          <div className="flex items-center w-full justify-between">
            <Link
              className="uppercase font-medium max-w-[240px] text-black hover:underline "
              to={`/product/${id}`}
            >
              {title}
            </Link>
            <div className="text-xl cursor-pointer">
              <MdCancel onClick={() => removeFromCart(id) } className="text-gray-900 text-2xl hover:text-red-500 transition " />
            </div>
          </div>
          <div className=" flex gap-x-2 items-center  h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-black font-medium">
              <div onClick={() => decreamentCart(id) } className="flex-1 flex items-center justify-center cursor-pointer">
                <TiMinus />
              </div>
              <div className="px-2 h-full flex justify-center items-center">{amount}</div>
              <div onClick={() => increamentCart(id) } className="flex-1 flex items-center justify-center cursor-pointer">
              <FaPlus />
              </div>
            </div>
            <div>$ {price}</div>
            <div className="flex-1 text-black font-semibold flex justify-end">{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
