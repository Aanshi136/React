import React from 'react';
import Navbar from './Navbar';
import './Navbar.css';
import HomePg from './HomePg';
import './HomePg.css';
import Service from './Service';
import './Service.css';
import About from './About';
import './About.css';
import Contact from './Contact';
import './Contact.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <HomePg />
        <Service />
        <About />
        <Contact />
      </>
    ),
  },
  {
    path: "/Home",
    element: (
      <>
        <Navbar />
        <HomePg />
      </>
    ),
  },
  {
    path: "/Service",
    element: (
      <>
        <Navbar />
        <Service />
      </>
    ),
  },
  {
    path: "/About",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/Contact",
    element: (
      <>
        <Navbar />
        <Contact />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
