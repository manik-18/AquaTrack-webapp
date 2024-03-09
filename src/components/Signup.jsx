import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../context/context";
import { showToast } from './Alert';

const Signup = () => {
  const { signup,user } = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate("/login");
      showToast('success', 'Signup successful now please Login!');
    } catch (error) {
      showToast('error', 'Signup Unsuccessfull');
    }
  };

  return (
    <div>
      <div>
        <div className="min-h-screen flex items-center justify-center">
          <div className="border-2 border-accent p-8 rounded shadow-md w-96">
            <h2 className="text-accent text-center text-2xl font-semibold mb-4">
              Sign Up
            </h2>
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-primary text-sm mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border rounded focus:outline-none focus:border-accent"
                  placeholder="Enter your email"
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
                Sign Up
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-primary">
                Already have an account?{" "}
                <Link to="/login" className="text-accent underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
