import React from "react";

const products = [
  {
    name: "Smart Watch",
    desc: "Modern smartwatch with health tracking features.",
    price: "$79.99",
    oldPrice: "$99.99",
    img: "src/photo/samrt watch.png",
  },
  {
    name: "Gaming Headset",
    desc: "High quality sound with noise cancellation.",
    price: "$59.99",
    oldPrice: "$79.99",
    img: "src/photo/Gaming Headset.png",
  },
  {
    name: "Leather Jacket",
    desc: "Stylish and durable leather jacket.",
    price: "$199.99",
    oldPrice: "$249.99",
    img: "src/photo/Leather Jacket.png",
  },
  {
    name: "Backpack",
    desc: "Perfect for travel and daily use.",
    price: "$49.99",
    oldPrice: "$69.99",
    img: "src/photo/Backpack.png",
  },
];

const LatestProducts = () => {
  return (
    <section className="w-screen ml-[calc(-50vw+49.3%)] bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#132f48]">
            Latest Products
          </h2>
          <p className="text-gray-500 mt-4">
            Discover the newest arrivals from our vendors
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                />

                {/* Wishlist */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-100">
                  ❤️
                </button>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col h-full">
                <h3 className="font-semibold text-lg text-[#132f48] mb-2">
                  {item.name}
                </h3>

                <p className="text-gray-500 text-sm mb-4">
                  {item.desc}
                </p>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-bold text-[#132f48]">
                    {item.price}
                  </span>
                  <span className="line-through text-gray-400 text-sm">
                    {item.oldPrice}
                  </span>
                </div>

                {/* Button */}
                <button className="mt-auto bg-[#132f48] text-white py-2 rounded-lg hover:bg-[#f4a261] hover:text-[#132f48] transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestProducts;