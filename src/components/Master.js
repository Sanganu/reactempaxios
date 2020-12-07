import React, { useState } from "react";
import IT from "../pages/option1/Employee";
import Marketing from "../pages/option2/Oneemp";
import Production from "../pages/option3/Context";
import Home from "./Home";
import Navbar from "./Navbar";

function Master(){
    const [currentPage,setCurrentPage] = useState('Home')
    const renderPage = () => {
        switch(currentPage){
            case 'Home':
               return <Home />
            case 'IT Department':
               return <IT />
            case 'Production'   :
                return <Production />
            case 'Marketing' : 
                return <Marketing />
            default: 
                return <Home />
        }
    };

   return(<div className="container landing">
       <Navbar currentPage={currentPage}
       handlePageChange= {setCurrentPage} />
          
       {renderPage()}
   </div>)
}

export default Master;
