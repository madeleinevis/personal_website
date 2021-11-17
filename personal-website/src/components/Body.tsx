import React from "react";
import SideProfile from "./side-profile/SideProfile";
import MainProfile from "./main-profile/MainProfile";
import {Grid} from "@mui/material";

const Body = () => {
    // const classes = MainStyle();
    return(
        <React.Fragment>
            <Grid container columnSpacing={1}>
                <Grid item xs={3}>
                    <SideProfile/>
                </Grid>
                <Grid item xs={9}>
                    <MainProfile/>
                </Grid>
            </Grid>
        </React.Fragment>
        );
};

export default Body;