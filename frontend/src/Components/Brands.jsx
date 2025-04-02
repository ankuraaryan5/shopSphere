import React,{useRef} from "react";

function Brands() {
    const scrollRef = useRef(null);
    const brands = [
    { name: "Nike", img: "https://images.unsplash.com/photo-1608541737042-87a12275d313?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Adidas", img: "https://images.unsplash.com/photo-1555274175-75f4056dfd05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Puma", img: "https://images.unsplash.com/photo-1608379894453-c6b729b05596?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Levi's", img: "https://images.unsplash.com/photo-1590838855320-43fe04e3c29c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Gucci", img: "https://images.unsplash.com/photo-1645676525012-939439cfc560?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Zara", img: "https://images.unsplash.com/photo-1572615208281-3c9a9a9fb41c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "H&M", img: "https://images.unsplash.com/photo-1578983662508-41895226ebfb?q=80&w=2111&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Louis Vuitton", img: "https://images.unsplash.com/photo-1596622723231-b20320c7346b?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Tommy Hilfiger", img: "https://images.unsplash.com/photo-1536028009925-1a0d66558f20?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Calvin Klein", img: "https://images.unsplash.com/photo-1614003151344-c3a493e9fb0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ];
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction === "left" ? -300 : 300;
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Popular Brands</h1>
      <div className="flex justify-between items-center">
        <button
          onClick={() => scroll("left")}
          className="p-2 bg-gray-300 rounded-full"
        >
          ◀
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 border border-gray-300 rounded-md p-4 min-w-[150px]"
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="w-32 h-32 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold">{brand.name}</h2>
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="p-2 bg-gray-300 rounded-full"
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Brands;
