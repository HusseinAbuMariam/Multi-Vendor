import React from "react";

const vendors = [
  {
    name: "Audio Excellence",
    desc: "Premium audio equipment including headphones, speakers, sound systems.",
    location: "321 Sound Avenue",
    time: "112 mins",
    img:"src/photo/Audio.png",
  },
  {
    name: "Style Boutique",
    desc: "Trendy fashion for men and women with latest collections.",
    location: "100 Fashion Street",
    time: "95 mins",
    img:"src/photo/Style.png",
  },
  {
    name: "Shoe Paradise",
    desc: "Wide selection of shoes for all occasions.",
    location: "200 Footwear Lane",
    time: "113 mins",
    img:"src/photo/Shoe.png",
  },
  {
    name: "Accessory World",
    desc: "Bags, watches, jewelry, and fashion accessories.",
    location: "300 Accessory Road",
    time: "37 mins",
    img:"src/photo/Accessory.png",
  },
];

const Fvendors = () => {
  return (
    <div className="container mx-auto w-screen ml-[calc(-50vw+49.3%)] bg-gray-100  px-6 lg:px-16 py-16">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl  text-[#132f48] font-bold md:text-4xl">
          Explore Our Trusted Stores
        </h2>
        <p className="text-gray-500 mt-3">
          Browse trusted stores and discover unique products.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {vendors.map((vendor, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border shadow-sm hover:shadow-lg transition p-6 text-center"
          >
            {/* Image */}
            <div className="w-20 h-20 mx-auto mb-4 rounded-xl border overflow-hidden">
              <img
                src={vendor.img}
                alt={vendor.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold">{vendor.name}</h3>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-2">
              {vendor.desc}
            </p>

            {/* Info */}
            <div className="mt-4 text-sm text-gray-600 space-y-1">
              <p>📍 {vendor.location}</p>
              <p>⏱ {vendor.time}</p>
            </div>

            {/* Button */}
            <button className="mt-5 bg-[#132f48] text-white px-4 py-2 rounded-md hover:bg-[#f4a261] hover:text-[#132f48] transition">
              Browse Products
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fvendors;