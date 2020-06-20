import React, { Component } from "react";
import axios from"axios";

class Employee extends Component{
    state = {

    }
    compoenetDidMount = () => {
        axios.get("")
        .then((employeeRecords) => {
            console.log(employeeRecords.results);
        })
    }
    render(){
        reutn(<div className="jumbotron bg-warning">
        <h5> Employee Directory</h5>
        <h6>An app using axios, mdbreact Datatable</h6>
            </div>)
    }
}
