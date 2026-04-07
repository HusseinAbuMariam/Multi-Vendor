import React from "react";

const category = [
  {
    name: "Electronics",
    logo: "src/photo/electronic.png",
  },
  {
    name: "Fashion",
    logo: "src/photo/fashion.png",
  },
  {
    name: "Beauty",
    logo: "src/photo/beauty.png",
  },
  {
    name: "Gaming",
    logo: "src/photo/gaming.png",
  },
  {
    name: "Home & Living",
    logo: "src/photo/home.png",
  },
];

const Popularcategory = () => {
  return (
    <div className="w-screen ml-[calc(-50vw+49.3%)] bg-gray-100 py-20">
      
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-16 text-[#132f48]">
        Popular Categories
      </h2>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10 px-6">
        {category.map((item, index) => (
          <div
            key={index}
            className="w-[260px] bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center group"
          >
            {/* Image */}
            <div className="w-28 h-28 mb-6 flex items-center justify-center">
              <img
                src={item.logo}
                alt={item.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-all duration-300"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-[#132f48] mb-4">
              {item.name}
            </h3>

            {/* Button */}
            <button className="mt-auto w-full bg-[#132f48] text-white font-semibold py-2 rounded-lg hover:bg-[#f4a261] hover:text-[#132f48] transition-all duration-300">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popularcategory;