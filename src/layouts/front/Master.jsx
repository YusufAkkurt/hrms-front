import './Master.css';
import React, { Component } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import JobAdList from "../../pages/front/jobAd/JobAdList";
import { Container } from "@material-ui/core";
import { Route } from "react-router";
import JobAdCreate from "../../pages/front/jobAd/JobAdCreate";

class Master extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Container className="my-2em">
                    <Route path="/" component={ JobAdList } exact/>
                    {/* JOB ADS - ROUTE */}
                    <Route path="/job-ads" component={ JobAdList } exact/>
                    <Route path="/job-ads/create" component={ JobAdCreate }/>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default Master;
