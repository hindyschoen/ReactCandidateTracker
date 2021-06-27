import React from 'react';
import {Link} from 'react-router-dom';
const CandidateRow=({candidate})=>{
    const{firstName, lastName, phoneNumber, email, id}=candidate;
    return(
        <tr>
          
            <td> <Link to={`/viewdetails/${id}`} className="btn btn-link" >View Details </Link> </td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{phoneNumber}</td>
            <td>{email}</td>
        </tr>

    );

}
export default CandidateRow;