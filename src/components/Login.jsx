import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../context/context";
import { showToast } from "./Alert";

const Login = () => {
  const { login } = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user } = useFirebase(); // Call useFirebase to get user object

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      localStorage.setItem("email", email); // Set email from input field
      navigate("/");
      showToast("success", "Login successful!");
    } catch (error) {
      showToast("error", "Login unsuccessful!");
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="border-2 border-accent p-8 rounded shadow-md w-96">
          <h2 className="text-accent text-center text-2xl font-semibold mb-4">
            Login
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-primary text-sm mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-2 border rounded focus:outline-none focus:border-accent"
                placeholder="Enter your username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-primary text-sm mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border rounded focus:outline-none focus:border-accent"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-black p-2 rounded hover:bg-[#33965c] focus:outline-none focus:shadow-outline-blue"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-primary">
              Don't have an account?{" "}
              <Link to="/signup" className="text-accent underline">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
