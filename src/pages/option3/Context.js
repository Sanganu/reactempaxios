import React, { useState, useEffect } from "react";
import Detail from "./Detail";

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
                console.log("Emp on contextjs", employeeData)
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
                console.log(employeeRecords)
            })
    }, []);

    return (<div>
        <div className="row">
            <div className="col-md-12">
                <h4>MDBREACT DATATABLE - With Hooks</h4>
                <table>
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
                </table>
            </div>
        </div>
    </div>)
}

export default Context;
