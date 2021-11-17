import React from "react";
import {Grid} from "@mui/material";

const Tools = () => {
    return(
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <h4>Tools</h4>
                </Grid>
                <Grid item xs={6}>
                    <p>Spring</p>
                </Grid>
                <Grid item xs={6}>
                    <p>AWS Services</p>
                </Grid>
                <Grid item xs={6}>
                    <p>Cloud Foundry</p>
                </Grid>
            </Grid>
        </React.Fragment>
        );
};
export default Tools;