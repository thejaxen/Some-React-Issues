import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";


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
function Header(){
  return(
    <div>
    <MainHeader/>
    <SubHeader/>
    </div>
  );
}
function MainHeader(){
  return(
    <h1 className="heading1" >React Course</h1>
  );
}
function SubHeader(){
  return(
    <p style={subHeaderStyle}>This is a subheader.</p>
  );
}
const subHeaderStyle={
  color:"red",
  backgroundColor:"black"
}
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


