import React from "react";
import { useProduct } from "../Contexts/ProductContext";
import { useCart } from "../Contexts/CartContext";
import { useParams } from "react-router-dom";
import { MdDescription } from "react-icons/md";

const ProductDetail = () => {
  const { Products } = useProduct();
  const { addToCart } = useCart();
  const { id } = useParams();

  // Find the product based on the ID from the URL
  const product = Products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <section className="flex items-center justify-center h-screen bg-gray-100">
        <span className="text-lg font-medium">Loading...</span>
      </section>
    );
  }

  const { image, description, price, title } = product; 
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-8">
      <section className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl mx-4 sm:mx-8 lg:mx-16">
        <div className="lg:flex">
          {/* Image Section */}
          <div className="lg:w-1/2 p-4">
            <img
              src={image}
              alt={title}
              className="w-full max-w-[300px] h-auto object-cover rounded-lg shadow-md mx-auto"
            />
          </div>
          {/* Details Section */}
          <div className="lg:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">
                {title}
              </h1>
              <div className="text-xl text-red-600 font-semibold mb-4">
                ${price}
              </div>
              <div className="text-base text-gray-700 mb-6 flex items-start">
                <MdDescription className="mr-2 text-gray-600" />
                {description}
              </div>
            </div>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-black text-white py-3 px-6  font-semibold hover:bg-blue-700 transition-colors"
            >
              Add To Cart
            </button>
          </div>
        </div> 
      </section>
    </div>
  );
};

export default ProductDetail;
