import React from "react";



const Detail= (props) =>{
    return(<>
        <tr>
            <th>{props.employee.title + " " +props.employee.name}</th>
            <th><img alt={props.employee.name} src={props.employee.pic} /></th>
            <th>{props.employee.dob}</th>
            <th>{props.employee.cell}</th>
            <th>{props.employee.email}</th>
            <th>{props.employee.uuid}</th>
        </tr>
    </>)
}

export default Detail;
