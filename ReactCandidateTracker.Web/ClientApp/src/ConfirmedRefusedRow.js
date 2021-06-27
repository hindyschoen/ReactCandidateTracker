import React from 'react';
const ConfirmedRefusedRow=({candidate})=>{
    const{firstName, lastName, phoneNumber, email, notes}=candidate;
    return(
        <tr>
          
            
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{phoneNumber}</td>
            <td>{email}</td>
            <td>{notes}</td>
        </tr>

    );

}
export default ConfirmedRefusedRow;