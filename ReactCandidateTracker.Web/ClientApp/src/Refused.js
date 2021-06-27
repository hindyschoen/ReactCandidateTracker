import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ConfirmedRefusedRow from './ConfirmedRefusedRow';

const Refused=()=>{
    const [candidates, setCandidates]=useState([]);

    useEffect(() => {
        const getCandidates= async () => {
            const { data } = await axios.get(`/api/candidate/getcandidates?status=refused`);
            setCandidates(data);
        }

        getCandidates();
    }, []);



return(
    <div style={{ backgroundColor: 'white', minHeight: 1000, paddingTop: 10 }}>
        <h1>Refused</h1>
         <table className="table table-hover table-striped table-bordered">
                        <thead >
                     <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Notes</th>
                      </tr>
                </thead>
                <tbody>
                    {!!candidates.length && candidates.map(c=><ConfirmedRefusedRow candidate={c} key={c.id} />)}
                 </tbody>
            </table>
        </div>







);


}
export default Refused;