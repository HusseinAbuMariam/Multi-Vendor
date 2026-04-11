import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
     <section className="absolute overflow-hidden py-10 w-full  left-0 right-0 bg-[radial-gradient(circle_at_top_left,rgba(19,47,72,0.12),transparent_45%),radial-gradient(circle_at_top_right,rgba(255,120,60,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(255,107,53,0.12),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(19,47,72,0.06),transparent_50%)] ">
        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">

        {/* LEFT */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-[#132f48] mb-4">
            Big Sale Season
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            Mega Discount up to{" "}
            <span className="text-orange-500 font-bold text-xl">
              70% OFF
            </span>{" "}
            on Fashion, Electronics & More.
          </p>
          <Link to="/products" onClick={() => {
                  setTimeout(() => {
                    const section = document.getElementById("products");
                    section.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition">
              Shop Now
            </button>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex gap-4">

          <div
            className="flex-[2] min-h-[400px] rounded-xl bg-cover bg-center shadow-lg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80')",
            }}
          />

          <div className="flex flex-col flex-1 gap-4">

            <div
              className="min-h-[190px] rounded-xl bg-cover bg-center shadow-lg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80')",
              }}
            />

            <div
              className="min-h-[190px] rounded-xl bg-cover bg-center shadow-lg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80')",
              }}
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;