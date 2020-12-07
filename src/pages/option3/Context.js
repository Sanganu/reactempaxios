import React, { useState, useEffect } from "react";
import Detail from "./Detail";
import {Table} from "react-bootstrap";

const Context = () => {
    const [empRecords, setEmpRecords] = useState([])
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=30&nat=us", {
            "Access-Control-Allow-Origin": "cors"
        })
            .then((data) => {
                return data.json()
            })
            .then((employeeDetails) => {
                // console.log(employeeDetails)
                let employeeData = employeeDetails.results
                // console.log("Emp on contextjs", employeeData)
                let employeeRecords = employeeData.map((employee) => (
                    {
                        name: employee.name.title + "." + employee.name.first + " " + employee.name.last,
                        pic: employee.picture.thumbnail,
                        dob: employee.dob.date,
                        cell: employee.cell,
                        email: employee.email,
                        uuid: employee.login.username
                    }
                ))
                setEmpRecords(employeeRecords)
                console.log("State",employeeRecords)
            })
    }, []);

    return (<div>
        <div className="row">
            <div className="col-md-12">
                <h4>Using useEffect for Axios call</h4>
                 <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Profile Pic</th>
                            <th>DOB</th>
                            <th>Cell</th>
                            <th>Email</th>
                            <th>Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empRecords.map((employee, key) => <Detail key={key} employee={employee} />)}
                    </tbody>
                </Table>
            </div>
        </div>
    </div>)
}

export default Context;
