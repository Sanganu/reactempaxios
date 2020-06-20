import React, { Component } from "react";
import axios from"axios";
import EmployeeData from "./EmployeeData";

class Employee extends Component{
    state = {
        rows: []
    }
    componentDidMount = () => {
        axios.get("https://randomuser.me/api/?results=200&nat=us")
        .then((employeeRecords) => {
            console.log(employeeRecords);
            let emprec = employeeRecords.data.results;
            let employeedata= []
            for(let i=0;i<emprec.length;i++){
                let record = {
                    fname: emprec[i].name.first,
                    lname: emprec[i].name.last,
                    email: emprec[i].email,
                    nationality: emprec[i].nat,
                    phone:emprec[i].phone,
                    profile:`${emprec[i].picture.medium}`
                }
                employeedata.push(record)
            }
            this.setState({rows: employeedata},() => {
                console.log("State",this.state.rows)
            })
        })
    }
    render(){
        return (<div className="container bg-info">
                <EmployeeData rows={this.state.rows}/>
            </div>)
    }
}

export default Employee;