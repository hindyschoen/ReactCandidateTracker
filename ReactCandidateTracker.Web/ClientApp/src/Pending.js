import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CandidateRow from './CandidateRow';
import { Link } from 'react-router-dom';

const Pending=()=>{
    const [candidates, setCandidates]=useState([]);

    useEffect(() => {
        const getCandidates= async () => {
            const { data } = await axios.get('/api/candidate/getcandidates', 0);
            setCandidates(data);
        }

        getCandidates();
    }, []);



return(
    <div style={{ backgroundColor: 'white', minHeight: 1000, paddingTop: 10 }}>
         <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Details</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                      </tr>
                </thead>
                <tbody>
                    {!!candidates.length && candidates.map(c=><CandidateRow candidate={c} key={c.id} />)}
                 </tbody>
            </table>
        </div>







);


}
export default Pending;