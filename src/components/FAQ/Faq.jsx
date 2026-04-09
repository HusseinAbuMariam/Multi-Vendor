import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const faqData = [
  {
    question: "How do I track my order?",
    answer: "You can track your order from your account dashboard under orders section."
  },
  {
    question: "What are the shipping options?",
    answer: "We offer standard and express shipping depending on your location."
  },
  {
    question: "How do returns and refunds work?",
    answer: "You can request a return within 14 days and refunds are processed quickly."
  },
  {
    question: "How do I become a vendor?",
    answer: "Click on 'Start Selling' and follow the registration process."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
        <Navbar/>
        <section id="faq" className="w-screen ml-[calc(-50vw+49.3%)] bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6">

            {/* Header */}
            <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#132f48] mb-4">
                Frequently Asked Questions
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
                Everything you need to know about orders, shipping, and selling.
            </p>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
            {faqData.map((item, index) => (
                <div
                key={index}
                className="bg-[#132f48] text-white rounded-xl shadow-md border hover:shadow-lg transition"
                >
                
                {/* Question */}
                <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center p-5 text-left"
                >
                    <span className="font-semibold ">
                    {item.question}
                    </span>

                    <span className={`text-xl transition-transform ${
                    openIndex === index ? "rotate-180 text-[#f4a261]" : "text-gray-400"
                    }`}>
                    ⌄
                    </span>
                </button>

                {/* Answer */}
                <div
                    className={`px-5 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                    }`}
                >
                    <p className="text-[#f4a261]">
                    {item.answer}
                    </p>
                </div>

                </div>
            ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">
                Still have questions?
            </p>
            <Link to="/contact">
            
                <button className="bg-[#132f48] text-white px-6 py-2 rounded-lg hover:bg-[#f4a261] hover:text-[#132f48] transition">
                    Contact Support
                </button>
            </Link>
            </div>

        </div>
        </section>
    <Footer/>
    </>
  );
};

export default FAQ;