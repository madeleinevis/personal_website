import React from "react";
import SideProfile from "./side-profile/SideProfile";
import MainProfile from "./main-profile/MainProfile";
import {Container, Grid} from "@mui/material";
import MainStyle from "../styles/MainStyle";

const Body = () => {
    const classes = MainStyle();
    return(
        <React.Fragment>
            <Container>
                <Grid container columnSpacing={1} className={classes.container}>
                    <Grid item xs={3}>
                        <SideProfile/>
                    </Grid>
                    <Grid item xs={9}>
                        <MainProfile/>
                    </Grid>
                </Grid>
            </Container>

        </React.Fragment>
        );
};

export default Body;