import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Routes/LandingPage.jsx";

// eslint-disable-next-line no-unused-vars
import React from "react";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
