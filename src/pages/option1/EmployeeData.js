import React from "react";
import { MDBDataTableV5 } from 'mdbreact';

function EmployeeData(props){
   let datatable = {
        columns: [
            {
                label: "First name",
                field:"fname",
                width:150,
                attributes:{
                    "aria-controls":"DataTable",
                    "aria-label":"First Name"
                }
            },
            {
                label:"Last name",
                field:"lname",
                width:150
            },
            {
                label:"Email",
                field:"email"
            },
            {
                label:"Nationality",
                field:"nationality"
            }, 
            {
                label:"Phone",
                field:"phone"
            },
            {
                label:"Profile",
                field:"profile",
                tag:"img"
            }
        ],
        rows: props.rows
    }
 
        return(<div>
            <MDBDataTableV5 hover data={datatable}/>
        </div>)
 
}


export default EmployeeData;
