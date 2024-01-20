import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from "./header";
import Students from "./students";
import faker from "@faker-js/faker";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
  <div>
    <Header/>
    <MainBody/>
    <div className="container row"></div>
    <Students Experience={2} name="Mert Duyar"/>
    <Students Experience={5} name="Resul Özkale"/>
    <Students Experience={7} name="Murat Koç"/>
    <Footer/>
  </div>
  </React.StrictMode>
);

function MainBody(){
  const firstvariable = "React JS"; //var and let also could be used for declaring variable
  const lecturenumber = "3";
  const lecture = "New lecture is ";
  const lehrer = "English";
  return (
    <div> 
      <p>Creating and using variables like {firstvariable} </p>
      <p>Total lecture: {lecturenumber}</p>
      <div>{lecture} {lehrer}</div>
      <ul>
        <li>Basic Doundation</li>
        <li>Functional and Class Components</li> 
      </ul>
      <p>Using functions in rendering.</p>
      <div>Enter task: <input maxLength={4} readOnly={false} placeholder='Mert'></input> </div>
    </div>
  );
}

function Footer(){
  return(
  <p style={{color:"white",backgroundColor:"black"}}>This is a footer.</p>
  );
}


//REACT-STRICTMODE SHOWS US THE POSİİBLE ERRORS AND EXCEPTİONs.


