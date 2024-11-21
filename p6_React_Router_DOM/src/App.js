// video lecture time start from 06H:07M:00S and end 6H:35M:00S by web3mantra youtube changel
import './App.css';
import Header from "./components/Header";
import Home from './components/Home';
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import React, {useState, useEffect} from 'react';
// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Error />} />



        </Routes>
      </div>
    </Router>
  );
}

export default App;




// https://www.npmjs.com/package/react-router-dom
// https://v5.reactrouter.com/web/guides/quick-start