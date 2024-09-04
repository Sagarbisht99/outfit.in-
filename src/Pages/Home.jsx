import React from "react";
import { useProduct } from "../Contexts/ProductContext";
import Product from "../Components/Product";
import Hero from "../Components/Hero";

const Home = () => {
  const { Products, currentPage, pageHandler } = useProduct();

  console.log(Products.length);

  return (
    <div>
      <Hero />
      <section className="p-16">
        <div className="conatiner mx-auto">
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 max-w-sm md:max-w-none">
            {Products.slice(currentPage * 10 - 10, currentPage * 10).map(
              (product) => {
                return <Product product={product} key={product.id} />;
              }
            )}
          </div>
        </div>
      </section>
      <div className="flex items-center gap-2 justify-center my-3">
        {[...Array(Products.length / 10)].map((__, index) => {
          return (
            <button
              onClick={() => pageHandler(index + 1)}
              className={` ${currentPage === index + 1 && "bg-black text-white"} text-center h-[50px] w-[50px] justify-center flex items-center text-xl font-semibold  border-[2px] border-black `}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
