import React, { Component } from 'react';
import { AppBar, Button, Container, IconButton, Toolbar, Typography } from "@material-ui/core";
import { RecentActors } from "@material-ui/icons";

class Navbar extends Component {


    render() {
        return (
            <header>
                <AppBar position="static">
                    <Container>
                        <Toolbar className="px-0">
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <RecentActors fontSize="large"/>
                            </IconButton>
                            <Typography variant="h6">
                                HRMS
                            </Typography>
                            <div className="spacer"/>
                            <Button color="inherit">İş İlanları</Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </header>
        );
    }
}

export default Navbar;
