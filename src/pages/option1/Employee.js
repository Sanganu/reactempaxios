import React, { Component } from "react";
import axios from "axios";
import EmployeeData from "./EmployeeData";

class Employee extends Component {
    state = {
        rows: []
    }
    componentDidMount = () => {
        setTimeout( () => {
        axios.get("https://randomuser.me/api/?results=15&nat=us")
            .then((employeeRecords) => {
                // console.log(employeeRecords);
                let emprec = employeeRecords.data.results;
                let employeedata = []
                for (let i = 0; i < emprec.length; i++) {
                    let record = {
                        fname: emprec[i].name.first,
                        lname: emprec[i].name.last,
                        email: emprec[i].email,
                        nationality: emprec[i].nat,
                        phone: emprec[i].phone

                    }
                    employeedata.push(record)
                }
                this.setState({ rows: employeedata }, () => {
                    // console.log("State", this.state.rows)
                })
            })
        }, 3000);   
    }
    render() {
        return (<div className="container bg-info">
                <div className="row">
                    <div className="col-md-12">
                        <h4>MDBREACT DATATABLE - With Class Component</h4>
                        <EmployeeData rows={this.state.rows} />
                    </div>
                </div>
            </div>)
    }
}

export default Employee;