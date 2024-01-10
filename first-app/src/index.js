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
    <h1>React Course</h1>
  );
}
function SubHeader(){
  return(
    <p>This is a subheader.</p>
  );
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
  <p>This is a footer.</p>
  );
}





//REACT-STRICTMODE SHOWS US THE POSİİBLE ERRORS AND EXCEPTİONs.


