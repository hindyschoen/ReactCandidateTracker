import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import AddCandidate from './AddCandidate';
import Pending from './Pending';
import ViewDetails from './ViewDetails';
import Confirmed from './Confirmed';
import Refused from './Refused';
import { CandidateCountContextComponent } from './CandidateCountContext';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
             <CandidateCountContextComponent >
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/addCandidate' component={AddCandidate}/>
                    <Route exact path='/pending' component={Pending}/>
                    <Route exact path='/viewdetails/:id' component={ViewDetails}/>
                    <Route exact path='/confirmed' component={Confirmed}/>
                    <Route exact path='/refused' component={Refused}/>
                                     
                </Layout>
             </CandidateCountContextComponent >
        );
    }
}