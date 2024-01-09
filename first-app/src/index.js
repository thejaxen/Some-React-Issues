import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
  <div>
    <MainBody/>
  </div>
  </React.StrictMode>
);

function MainBody(){
  return (
    <div> 
      <p>Using functions in rendering.</p>
    </div>
  );
}





//REACT-STRICTMODE SHOWS US THE POSİİBLE ERRORS AND EXCEPTİONs.


