import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import Home from './components/home/Home';
import About from './components/about/About'
import reportWebVitals from './reportWebVitals';
import Contact from './components/contact/Contact';
import Collaboration from './components/collaboration/Collaboration';
import AboutDarkMode from './components/about/AboutDarkMode';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode >
    {/* <RouterProvider router={router}/> */}
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes >
              <Route path = '/' element = { <Home /> } />
              <Route path = '/o nas' element = { <About /> } />
              <Route path = '/kontakt' element = { <Contact /> } />
              <Route path = '/galeria' element = { <AboutDarkMode /> } />
              <Route path = '/współpraca' element = { <Collaboration /> } />

      </Routes>
    </HashRouter>
  </React.StrictMode>
);

