import React from 'react';
import Employee from "./pages/Employee";
import Oneemp from "./pages/Oneemp";

// import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {
  return (
    <div className="App">
      <div className="jumbotron bg-warning">
        <h2> Employee Directory</h2>
      </div>  
       <div className="container">
          <div className="row">
             <div className = "col-md-12">
                  <h4>MDBREACT DATATABLE - With state</h4>
                  <Employee />
              </div>
           </div>
       </div>      
       <div className="container">
          <div className="row">
             <div className = "col-md-12">
                  <h4>MDBREACT DATATABLE - With Hooks</h4>
                  <Oneemp />
              </div>
           </div>
       </div>           
    </div>
  );
}

export default App;
