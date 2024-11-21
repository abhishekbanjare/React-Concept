// video lecture time start from 06H:35M:00S and end 6H:35M:00S by web3mantra youtube changel
import './App.css';
import Header from "./components/Header";
import Home from './components/Home';
import Contact from "./components/Contact";
import About from "./components/About";
import React, {useState, useEffect} from 'react';
// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Error from "./components/Error";
import Mail from "./components/Mail";
import Insta from "./components/Insta";
import Userdetails from './components/Userdetails';


function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
                  {/* Home */}
          <Route path="/">
              <Route index element={<Home />} />
              <Route path="/aap" element={<Home />} />
          </Route>
                <Route path="/app/:userId" element={<Userdetails />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />}>
                <Route index element={<Insta />} />
                <Route path="insta" element={<Insta />} />
                <Route path="Mail" element={<Mail />} />
          </Route>

          <Route path="*" element={<Error />} />



        </Routes>
      </div>
    </Router>
  );
}

export default App;




// https://www.npmjs.com/package/react-router-dom
// https://v5.reactrouter.com/web/guides/quick-start
// https://dev.to/adidoshi/react-router-dom-v6-51j2