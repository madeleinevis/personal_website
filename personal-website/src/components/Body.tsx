import Grid from "@material-ui/core/Grid";

import React from "react";
import SideProfile from "./side-profile/SideProfile";
import MainProfile from "./main-profile/MainProfile";
import MainStyle from "../styles/MainStyle";

const Body = () => {
    const classes = MainStyle();
    return(<Grid container className={classes.content}>
        <Grid item xs={2}>
            <SideProfile/>
        </Grid>
        <Grid item xs={10}>
            <MainProfile/>
        </Grid>
    </Grid>);
};

export default Body;