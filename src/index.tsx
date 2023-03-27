import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
  //  Link,
  // createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './components/home/Home';
import About from './components/about/About'
import reportWebVitals from './reportWebVitals';
import Contact from './components/contact/Contact';
// import Gallery from './components/gallery/Gallery';
import Collaboration from './components/collaboration/Collaboration';
import AboutDarkMode from './components/about/AboutDarkMode';
// import LogoBar from './components/layout/logoBar';

// const router = createBrowserRouter([
  
//   {
//     path: "/",
//     element: <Home />,

//   },
//   {
//     path: "/o nas",
//     element: <About />,
//   },
//   {
//     path: "/kontakt",
//     element: <Contact />,
//   },
//   {
//     path: "/galeria",
//     element: <Gallery />,
//   },
//   {
//     path: "/współpraca",
//     element: <Collaboration />,
//   },
// ]);

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
