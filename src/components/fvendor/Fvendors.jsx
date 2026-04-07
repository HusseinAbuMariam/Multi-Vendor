import React from "react";

const vendors = [
  {
    name: "StyleHaven",
    logo: "src/photo/Logo-Square_1200x628_pad_ffffff.png",
  },
  {
    name: "TecZone",
    logo: "src/photo/teczone.png",
  },
  {
    name: "HomeEssence",
    logo: "src/photo/Homeessence .png",
  },
  {
    name: "BeautyGlow",
    logo: "src/photo/Beautyglow.png",
  },
];

const Fvendors = () => {
  return (
    <div className=" w-screen ml-[calc(-50vw+49.3%)] bg-gray-50 py-20 mt-[40%] ">
      
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Featured Vendors
      </h2>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-8">

        {vendors.map((vendor, index) => (
          <div
            key={index}
            className="w-[240px] h-[300px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between p-6"
          >

            {/* TOP SECTION */}
            <div className="flex flex-col items-center gap-4 mt-4">

              <div className="w-24 h-24 flex items-center justify-center">
                <img
                  src={vendor.logo}
                  alt={vendor.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold text-[#132f48] text-center">
                {vendor.name}
              </h3>

            </div>

            {/* BOTTOM BUTTON */}
            <button className="w-full bg-[#132f48] text-white font-bold py-2 rounded-lg hover:bg-[#f4a261] hover:text-[#132f48] hover:scale-105 transition-all duration-300">
              View Store
            </button>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Fvendors;