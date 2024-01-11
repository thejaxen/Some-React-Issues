import React from 'react';
import ReactDOM from 'react-dom/client';


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
    <h1 className="text-primary" >React Course</h1>
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
  return (
    <div> 
      <p>Using functions in rendering.</p>
    </div>
  );
}
function Footer(){
  return(
  <p style={{color:"white",backgroundColor:"black"}}>This is a footer.</p>
  );
}





//REACT-STRICTMODE SHOWS US THE POSİİBLE ERRORS AND EXCEPTİONs.


