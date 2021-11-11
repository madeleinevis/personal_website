import Grid from "@material-ui/core/Grid";
import React from "react";

const Projects = () => {
    return(
        <React.Fragment>
            <Grid container>
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
            </Grid>
        </React.Fragment>
        );
};
export default Projects;