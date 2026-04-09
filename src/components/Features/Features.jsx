import React from "react";

const Features = () => {
  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-[#132f48]/10 text-[#132f48] px-4 py-1 rounded-full text-sm font-medium">
            Powerful Marketplace Features
          </span>

          <h2 className="text-4xl font-bold mt-6 text-[#132f48]">
            Everything you need to shop and sell in one place
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover trusted vendors, secure payments, and a seamless shopping experience
            all in one place.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="src/photo/feature.png"
              alt="Marketplace"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-semibold text-[#132f48] mb-4">
              A complete multi-vendor system
            </h3>

            <p className="text-gray-500 mb-6">
              Our platform helps you discover products, shop بسهولة, and even start
              your own store with powerful tools.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">

              <div className="p-4 rounded-lg hover:bg-gray-100 transition">
                <h4 className="font-semibold text-[#132f48]">
                  Multiple Vendors
                </h4>
                <p className="text-sm text-gray-500">
                  Shop from many stores in one place.
                </p>
              </div>

              <div className="p-4 rounded-lg hover:bg-gray-100 transition">
                <h4 className="font-semibold text-[#132f48]">
                  One Cart System
                </h4>
                <p className="text-sm text-gray-500">
                  Add products from different vendors in one cart.
                </p>
              </div>

              <div className="p-4 rounded-lg hover:bg-gray-100 transition">
                <h4 className="font-semibold text-[#132f48]">
                  Secure Payments
                </h4>
                <p className="text-sm text-gray-500">
                  Safe and trusted payment methods.
                </p>
              </div>

              <div className="p-4 rounded-lg hover:bg-gray-100 transition">
                <h4 className="font-semibold text-[#132f48]">
                  Start Selling
                </h4>
                <p className="text-sm text-gray-500">
                  Open your store and sell your products easily.
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <button className="bg-[#132f48] text-white px-6 py-2 rounded-lg hover:bg-[#f4a261] hover:text-[#132f48] transition">
                Browse Stores →
              </button>

              <button className="border border-[#132f48] text-[#132f48] px-6 py-2 rounded-lg hover:bg-[#132f48] hover:text-white transition">
                Start Selling
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;