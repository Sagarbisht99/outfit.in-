import React, { useEffect } from "react";
import { useProduct } from "../Contexts/ProductContext";
import { useCart } from "../Contexts/CartContext";
import { useParams } from "react-router-dom";
import { MdDescription } from "react-icons/md";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const ProductDetail = () => {
  const { Products } = useProduct();
  const { addToCart } = useCart();
  const { id } = useParams();

  // Find product by ID
  const product = Products.find((item) => item.id === parseInt(id));

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <section className="flex items-center justify-center h-screen bg-gray-100">
        <span className="text-lg font-medium text-gray-700">Loading product details...</span>
      </section>
    );
  }

  const { image, description, price, title } = product;

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-50 py-8">
      <Header />
      <section className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl mx-4 sm:mx-8 lg:mx-16">
        <div className="lg:flex lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-1/2 p-6 flex justify-center">
            <img
              src={image}
              alt={title}
              className="w-full max-w-[300px] h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          {/* Details Section */}
          <div className="lg:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">
                {title}
              </h1>
              <p className="text-xl text-red-600 font-semibold mb-4">${price}</p>
              <div className="text-base text-gray-700 mb-6 flex items-start">
                <MdDescription className="mr-2 text-gray-600" />
                {description}
              </div>
            </div>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetail;
