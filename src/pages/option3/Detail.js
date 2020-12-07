import React from "react";



const Detail= (props) =>{
    return(<>
        <tr>
            <th>{props.name}</th>
            <th><img alt={props.name} src={props.pic} /></th>
            <th>{props.dob}</th>
            <th>{props.cell}</th>
            <th>{props.email}</th>
            <th>{props.uuid}</th>
        </tr>
    </>)
}

export default Detail;
