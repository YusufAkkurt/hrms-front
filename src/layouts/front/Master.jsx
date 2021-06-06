import './Master.css';
import React, { Component } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import JobAdList from "../../pages/front/JobAdList";
import { Container } from "@material-ui/core";

class Master extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Container className="my-2em">
                    <JobAdList/>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default Master;
