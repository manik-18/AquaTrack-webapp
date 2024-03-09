import React, { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Analysis from "./pages/Analysis";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useFirebase } from "./context/context";

const App = () => {
  const { user } = useFirebase();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("email") === null && location.pathname==="/login") {
      navigate("/login");
    }
    else if(localStorage.getItem("email") === null && location.pathname==="/signup"){
      navigate("/signup");
    }
    else if(localStorage.getItem("email") === null ){
      navigate("/login");
    }
  }, [user, location.pathname, navigate]);

  const isLoggedIn = !!user;

  return (
    <>
      {isLoggedIn &&
        location.pathname !== "/login" &&
        location.pathname !== "/signup" && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/analysis" element={<Analysis />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
      {isLoggedIn &&
        location.pathname !== "/login" &&
        location.pathname !== "/signup" && <Footer />}
    </>
  );
};

export default App;
