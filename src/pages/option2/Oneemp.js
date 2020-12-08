import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTable } from "mdbreact";
import axios from "axios";


//Tutorial - https://dev.to/vsfarooqkhan/data-tables-in-react-js-made-easy-with-mdbreact-27b9
//npm install mdbreact;

function Oneemp() {
    let [stateRows, setStateRows] = useState([]);

    const columns = [
        {
            label: "First Name",
            field: "fname",
            sort: "asc",
            width: 150
        },
        {
            label: "Last Name",
            field: "lname",
            sort: "asc",
            width: 150
        },
        {
            label: "Email",
            field: "email",
            sort: "asc",
            width: 150
        },
        {
            label: "Phone number",
            field: "phone",
            sort: "asc",
            width: 150
        },
        {
            label: "Location",
            field: "location",
            sort: "asc",
            width: 150
        }
    ]

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=15&nat=us")
            .then((records) => {
                // console.log("Records", records);
                let employeedetails = records.data.results.map((emp, i) => {
                    let rec = {
                        fname: emp.name.first,
                        lname: emp.name.last,
                        email: emp.email,
                        phone: emp.cell,
                        location: emp.location.city + " " + emp.location.country
                    }
                    return (rec)
                })
                setStateRows(employeedetails)
            })
    }
        , [])

    return (<div className="container bg-secondary">
        <div className="row">
            <div className="col-md-12">
                <h4 className="text-warap m-3 mb-3">MDBREACT DATATABLE - With useEffect</h4>
                <MDBDataTable striped bordered hover data={{ columns: columns, rows: stateRows }} />
            </div>
        </div>

    </div>)
}

export default Oneemp;
