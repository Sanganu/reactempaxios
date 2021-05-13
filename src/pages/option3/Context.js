import React, { useState, useEffect } from "react";
import Detail from "./Detail";
import {Table} from "react-bootstrap";

const Context = () => {
    const [empRecords, setEmpRecords] = useState([])
    const[employeeDB,setEmployeeDB]= useState([])
    const [change,setChange] =useState(false)

    useEffect(() => {
        setTimeout( () => {
                fetch("https://randomuser.me/api/?results=15&nat=us", {
                    "Access-Control-Allow-Origin": "no-cors"
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
                            title:employee.name.title,
                            name:  employee.name.first + " " + employee.name.last,
                            pic: employee.picture.thumbnail,
                            dob: employee.dob.date,
                            cell: employee.cell,
                            email: employee.email,
                            uuid: employee.login.username
                        }
                    ))
                    setEmpRecords(employeeRecords)
                    setEmployeeDB(employeeRecords)
                    // console.log("State",employeeRecords)
                })
            },3000)
    }, []);

    const sortName = (sortOrder) =>{
        console.log(sortOrder,"Order")
        let tempEmpRecords = empRecords;
        let final = 0;
        if( sortOrder === "ASC"){

            for(let i=0;i< tempEmpRecords.length-1;i++){
                if( i === tempEmpRecords.length-1){
                    final = i
                }else{
                    final = i+1
                }
                for(let j=final;j<tempEmpRecords.length-1;j++){
                    if(tempEmpRecords[i].name > tempEmpRecords[j].name){
                        let swap = tempEmpRecords[i]
                        tempEmpRecords[i] = tempEmpRecords[j]
                        tempEmpRecords[j] = swap
                    }
                }
            }
         
        }else{
  
            for(let i=0;i< tempEmpRecords.length-1;i++){
                if( i === tempEmpRecords.length-1){
                    final = i
                }else{
                    final = i+1
                }
                for(let j=final;j<tempEmpRecords.length-1;j++){
                    if(tempEmpRecords[i].name < tempEmpRecords[j].name){
                        let swap = tempEmpRecords[i]
                        tempEmpRecords[i] = tempEmpRecords[j]
                        tempEmpRecords[j] = swap
                    }
                }
            }
        }
        setEmpRecords(tempEmpRecords)
        if (change)
        setChange(false)
        else
        setChange(true)
        console.log(tempEmpRecords,empRecords)
    }

    const sortDOB = () => {

    }

    return (<div className="container">
        <div className="row">
            <div className="col-md-12">
                <h4>Employee Database - useState/useEffect</h4>
                 <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Name
                                <button onClick={() => sortName("ASC")}>&uarr;</button>
                                <button onClick={() => sortName("DESC")}>&darr;</button>
                             </th>
                            <th>Profile Pic</th>
                            <th>DOB
                                <button onClick={() => sortDOB("ASC")}>&uarr;</button>
                                <button onClick={() => sortDOB("DESC")}>&darr;</button>      
                            </th>
                            <th>
                       `        Cell
                            </th>
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
