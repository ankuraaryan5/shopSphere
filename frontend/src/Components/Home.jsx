import React, { useState, useEffect } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Offers from "./Offers";
import Category from "./Category";
import Brands from "./Brands";

const images = [
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const saleType = "summer";
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="w-full relative overflow-hidden">
        <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          <button className="bg-white text-black px-4 py-2 rounded-md">
            Shop Now
          </button>
          <button className="bg-gray-400 text-white px-4 py-2 rounded-md">
            Learn More
          </button>
        </div>
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="relative w-full h-screen flex-shrink-0">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-screen object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
                currentIndex === index
                  ? "bg-white border-2 border-black scale-110"
                  : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div
          className=" flex justify-center h-96 items-center p-4 w-full bg-cover bg-center bg-no-repeat transition-transform duration-300 transform hover:scale-105"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4ncyUyMGNsb3RoaW5nfGVufDB8fDB8fHww")`,
          }}
        >
          <h1 className=" text-white text-4xl font-extrabold drop-shadow-md">
            Women's Clothing
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center text-white text-2xl font-bold gap-4 w-full h-96">
          <div
            className=" flex justify-center items-center border-2 border-white md:h-48 w-full bg-cover bg-center bg-no-repeat transition-transform duration-300 transform hover:scale-105 h-full"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1608739872119-f78feab7f976?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}
          >
            <h1 className=" text-white text-3xl font-bold drop-shadow-md">
              Men's Clothing
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:h-48">
            <div
              className=" flex justify-center items-center border-2 border-white p-4 w-full bg-cover bg-center bg-no-repeat transition-transform duration-300 transform hover:scale-105  md:h-full"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1741992556912-3b2d62461e75?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
              }}
            >
              <h1 className=" text-white text-2xl font-semibold drop-shadow-md ">
                Kid's Clothing
              </h1>
            </div>
            <div
              className=" flex justify-center items-center border-2 border-white p-4 w-full bg-cover bg-center bg-no-repeat transition-transform duration-300 transform hover:scale-105 md:h-full"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1709257232578-79b3419e87f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
              }}
            >
              <h1 className=" text-white text-2xl font-semibold drop-shadow-md">
                Accessories
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Offers saleType={saleType} />
      <Brands />
    </div>
  );
}

export default Home;
