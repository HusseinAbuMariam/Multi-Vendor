import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate, Link } from "react-router-dom";

const Account = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("user", JSON.stringify({ email }));
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
                🛒
              </div>
            </div>

            <h1 className="text-2xl font-bold text-[#132f48]">
              Welcome Back!
            </h1>
            <p className="text-gray-500 text-sm">
              Sign in to continue your journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                placeholder="me@example.com"
                className="w-full   bg-[#132f48] text-white border rounded-md px-10 py-2 outline-none focus:ring-2 focus:ring-[#132f48]"
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
                className="w-full border  bg-[#132f48] text-white rounded-md px-10 py-2 outline-none focus:ring-2 focus:ring-[#132f48]"
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

            {/* Options */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#" className="hover:underline text-[#132f48]">
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#132f48] text-white py-2 rounded-md hover:bg-[#f4a261] hover:text-[#132f48] transition"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm mt-6">
            Don't have an account?{" "}
            <Link to="/Register" className="underline cursor-pointer">
              Register
            </Link>
          </p>

        </div>
      </section>
    </div>
  );
};

export default Account;