import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import SellerDashBoard from "./Pages/SellerDashBoard";
import BuyerDashBoard from "./Pages/BuyerDashBoard";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> //home
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/seller/profile" element={<SellerDashBoard />} />
          <Route path="/buyer/profile" element={<BuyerDashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
