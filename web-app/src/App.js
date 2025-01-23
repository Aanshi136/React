import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './Navbar.css';
import HomePg from './HomePg';
import './HomePg.css';
import Service from './Service';
import './Service.css';
import About from './About';

import Contact from './Contact';
import './Contact.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePg />
              <Service />
              <About />
              <Contact />
            </>
          }  
        />
        <Route path="/HomePg" element={<HomePg />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

