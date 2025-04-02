import React, { useRef } from "react";

function Offers({ saleType }) {
  const salesData = {
    summer: {
      title: "Summer Sale ☀️",
      description: "Get up to 50% off on summer essentials!",
      bgImage: "../../assets/summersale.jpeg",
    },
    winter: {
      title: "Winter Sale ❄️",
      description: "Stay warm with discounts up to 40% on winter wear!",
      bgImage:
        "https://images.unsplash.com/photo-1518609571773-39b7d30464e2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    festive: {
      title: "Festive Sale 🎉",
      description: "Celebrate with amazing deals on festive outfits!",
      bgImage:
        "https://images.unsplash.com/photo-1603897291622-3a4ff7c81203?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    clearance: {
      title: "Clearance Sale 🛒",
      description: "Hurry! Up to 70% off on all items before stock runs out!",
      bgImage:
        "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  };

  const sale = salesData[saleType];
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction === "left" ? -300 : 300;
    }
  };

  const products = [
    {
      name: "T-Shirts",
      img: "https://images.unsplash.com/photo-1621951753015-740c699ab970?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "30%",
    },
    {
      name: "Tops",
      img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "20%",
    },
    {
      name: "Jeans",
      img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "40%",
    },
    {
      name: "Dresses",
      img: "https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "50%",
    },
    {
      name: "Hoodies",
      img: "https://images.unsplash.com/photo-1622567893612-a5345baa5c9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "25%",
    },
    {
      name: "Sneakers",
      img: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "35%",
    },
    {
      name: "Watches",
      img: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "10%",
    },
    {
      name: "Caps",
      img: "https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "20%",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-2 justify-center items-center">
      <h1 className="text-2xl font-bold">{sale?.title}</h1>
      <p className="text-gray-600">{sale?.description}</p>
      <div className="flex flex-wrap gap-4 justify-center items-center md:justify-start md:items-start  ">
        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded-md">
            <img src={product.img} alt={product.name} className="w-32 h-32 object-cover" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">Discount: {product.discount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
