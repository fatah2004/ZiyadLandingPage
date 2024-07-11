import React, { useState } from "react";
import GlobalStyles from 'styles/GlobalStyles';
import AdminPage from "./AdminPage.js";
import LoginPage from "./pages/Login.js";
import RestaurantLandingPage from "./demos/RestaurantLandingPage.js";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<RestaurantLandingPage />} />
          <Route path="/admin" element={isLoggedIn ? <AdminPage onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
        </Routes>
      </Router>
    </>
  );
}
