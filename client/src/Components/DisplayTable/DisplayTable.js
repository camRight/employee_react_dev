import React, {useState} from 'react';
import {Button} from "react-bootstrap";
const DisplayTable = (props) => {
    // logic should be on pages
    console.log(props.results)
    // ternary for sort


    
    return (
        <table className="table table-secondary table-striped">
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {/* {console.log(props.arr)} */}
                {/* use map here for the TR's */}
                {props.results.length > 0 ? props.results.map(people => {
                    return (
                        <tr>
                            <td><img src={people.picture.thumbnail}/></td>
                            <td><p>{people.name.first}</p></td>
                            <td><p>{people.name.last}</p></td>
                            <td><p>{people.email}</p></td>
                            <td><p>{people.phone}</p></td>
                        </tr>
                    )
                }) : <tr>dada
                </tr> }
            </tbody>
        </table>
    )
}

export default DisplayTable;