import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import MainBody from "./MainBody";
import Students from "./Components/students";
import faker from "@faker-js/faker";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
  <div>
    <Header/>
    <MainBody/>
    <Footer/>
  </div>
  </React.StrictMode>
);






//REACT-STRICTMODE SHOWS US THE POSİİBLE ERRORS AND EXCEPTİONs.


