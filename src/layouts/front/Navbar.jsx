import { AppBar, Button, Container, IconButton, Toolbar, Typography } from "@material-ui/core";
import { RecentActors } from "@material-ui/icons";
import { useHistory } from "react-router";

function Navbar() {
    const history = useHistory();

    const goHome = () => {
        return history.push("/");
    }

    const goJobAds = () => {
        return history.push("/job-ads");
    }

    return (
        <header>
            <AppBar position="static">
                <Container>
                    <Toolbar className="px-0">
                        <IconButton onClick={ goHome } edge="start" color="inherit" aria-label="menu">
                            <RecentActors fontSize="large"/>
                        </IconButton>
                        <Typography variant="h6">
                            HRMS
                        </Typography>
                        <div className="spacer"/>

                        <Button onClick={ goJobAds } color="inherit">İş İlanları</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    );
}

export default Navbar;
