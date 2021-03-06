
import React from "react";
import {Grid} from "@mui/material";
import MainStyle from "../../../styles/MainStyle";

const Projects = () => {
    const classes = MainStyle();
    return(
        <React.Fragment>
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <h4>Projects</h4>
                </Grid>
                <Grid item xs={12}>
                    <h5>University Dissertation</h5>
                </Grid>
                <Grid item xs={12}>
                    <h5>Masters Dissertation</h5>
                </Grid>
                <Grid item xs={12}>
                    <h5>Twitter Application with AWS Services</h5>
                </Grid>
                <Grid item xs={12}>
                    <h5>Front-End Development - Online CV</h5>
                </Grid>
            </Grid>
        </React.Fragment>
        );
};
export default Projects;