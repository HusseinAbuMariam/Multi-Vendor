import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (name && email && password) {
      localStorage.setItem(
        "user",
        JSON.stringify({ name, email })
      );
      navigate("/");
    }
  };

  return (
    <div className="w-screen ml-[calc(-50vw+45%)] bg-gray-50">
      <Navbar />

      <section className="pt-[120px] min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full border flex items-center justify-center bg-gray-100">
                🛍️
              </div>
            </div>

            <h1 className="text-2xl font-bold text-[#132f48]">
              Create Account
            </h1>
            <p className="text-gray-500 text-sm">
              Join us and start your shopping journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-6">

            {/* Name */}
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border  bg-[#132f48] text-white rounded-md px-10 py-2 outline-none focus:ring-2 focus:ring-[#132f48]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="absolute left-3 top-2.5 text-gray-400">👤</span>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                placeholder="me@example.com"
                className="w-full border  bg-[#132f48] text-white rounded-md px-10 py-2 outline-none focus:ring-2 focus:ring-[#132f48]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="absolute left-3 top-2.5 text-gray-400">📧</span>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border   bg-[#132f48] text-white rounded-md px-10 py-2 outline-none focus:ring-2 focus:ring-[#132f48]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span className="absolute left-3 top-2.5 text-gray-400">🔒</span>

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#132f48] text-white py-2 rounded-md hover:bg-[#f4a261] hover:text-[#132f48] transition"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <Link to="/account" className="underline cursor-pointer">
              Sign In
            </Link>
          </p>

        </div>
      </section>
    </div>
  );
};

export default Register;