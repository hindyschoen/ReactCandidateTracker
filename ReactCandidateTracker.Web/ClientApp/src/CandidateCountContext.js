import React, { useState, useEffect, createContext} from 'react';
import axios from 'axios';

const CandidateCountContext=createContext();

const CandidateCountContextComponent=({children})=>{
const [pendingCount, setPendingCount]=useState(0);
const [confirmedCount, setConfirmedCount]=useState(0);
const [refusedCount, setRefusedCount]=useState(0);
const [draftCandidate, setDraftCandidate]=useState({firstName:'', lastName:'', email:'', phoneNumber:'', notes:''});

const updateCandidateCount= async () => {
    const { data } = await axios.get('/api/candidate/totalCandidates');
    setPendingCount(data[0]);
    setConfirmedCount(data[1]);
    setRefusedCount(data[2]);
}

useEffect(() => {
    updateCandidateCount();
}, []);

return (
    <CandidateCountContext.Provider value={{ pendingCount, confirmedCount,refusedCount, updateCandidateCount,draftCandidate, setDraftCandidate }}>
        {children}
    </CandidateCountContext.Provider>
)




}
export {CandidateCountContext, CandidateCountContextComponent};