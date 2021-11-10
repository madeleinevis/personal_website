import Grid from "@material-ui/core/Grid";
import React from "react";

const Tools = () => {
    return(<Grid container>
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
    </Grid>);
};
export default Tools;