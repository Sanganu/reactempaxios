import React from 'react';
import Employee from "./pages/Employee";
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
        <Employee />
    </div>
  );
}

export default App;
