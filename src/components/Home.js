import React from "react";

function Home(){
    return(<div className="container text-center mx-auto landing">
    <h3>Welcome to Employee Directory</h3>
    <main className="container m-3 p-3 bg-secondary">
       <h2>Employee data rendered using randomapi</h2>
       <ul>
           <h6>NPM packages used</h6>
           <li>Axios </li>
           <li>Bootstrap</li>
           <li>MDBReact</li>
       </ul>
    </main>
    </div>)
}
export default Home;