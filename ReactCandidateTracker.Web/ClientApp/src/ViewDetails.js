import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {CandidateCountContext} from './CandidateCountContext';
import {useHistory, useParams} from 'react-router-dom';
import Pending from './Pending';

const ViewDetails=()=>{
    const history=useHistory();
    const {id}=useParams();
    const[isLoading, setIsLoading]=useState(true);
    const [candidate, setCandidate] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '', status: '', notes: '' });
    const { updateCandidateCount} = useContext(CandidateCountContext);
   
     useEffect(() => {
        const getCandidate = async () => {
            const { data } = await axios.get(`/api/candidate/getCandidateById?id=${id}`);
            setCandidate(data);
            setIsLoading(false);
         
        }
        getCandidate();
    }, [id]);

    const onClick=e=>{
        const copy = { ...candidate };
        copy[e.target.name] = e.target.value;
        setCandidate(copy);
       
    }
    useEffect(() => {
        const updateCandidate = async () => {
            await axios.post('/api/candidate/update', candidate);
            updateCandidateCount();
                       
        }
        updateCandidate();
    }, [candidate])
   

    const { firstName, lastName, phoneNumber, email, status, notes } =candidate;
    return(
        <div className="row">
            <div className="col-lg-8">
                {isLoading && <h2>Loading...</h2>}
                {!isLoading && 

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card card-body bg-light">
                                <h4>Name: {firstName} {lastName}</h4>
                                <h5>Email: {email}</h5>
                                <h4>Phone Number: {phoneNumber}</h4>
                                <h4>Status: {status}</h4>
                                <h4>Notes:</h4><p>{notes}</p>
                                                        
                                <div>
                                
                                {status==="Pending" && <button className="btn btn-primary" name="status" value="Confirmed" onClick={onClick}>Confirm</button>}
                                {status==="Pending" && <button className="btn btn-danger" name="status" value="Refused" onClick={onClick} >Refuse</button>}
                                </div>
                                                     
                                </div> </div></div></div>
                            }
                            
            </div>

        </div>




    );
     
    

}
export default ViewDetails;