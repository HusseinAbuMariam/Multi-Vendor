import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="w-screen ml-[calc(-50vw+49.3%)] bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#132f48] mb-4">
              Contact Us
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto font-bold">
              Have questions or need help? Send us a message and we’ll get back to you.
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Form */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <form className="space-y-5">

                <div>
                  <label className="block mb-1 text-sm font-bold  text-[#132f48]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border bg-[#132f48] text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#132f48]"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-bold  text-[#132f48]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full border bg-[#132f48]  text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#132f48]"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-bold  text-[#132f48]">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full border bg-[#132f48] text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#132f48]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#132f48] text-white py-3 rounded-lg hover:bg-[#f4a261] hover:text-[#132f48] transition"
                >
                  Send Message
                </button>

              </form>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center space-y-6">

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-[#132f48] mb-2">
                  📍 Address
                </h3>
                <p className="text-gray-500">
                  Gaza, Palestine
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-[#132f48] mb-2">
                  📧 Email
                </h3>
                <p className="text-gray-500">
                  support@multivendor.com
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-[#132f48] mb-2">
                  📞 Phone
                </h3>
                <p className="text-gray-500">
                  +970 59 000 0000
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;