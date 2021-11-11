import Grid from "@material-ui/core/Grid";
import React from "react";

const Languages = () => {
    return(
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <h4>Languages</h4>
                </Grid>
                <Grid item xs={6}>
                    <p>Java</p>
                </Grid>
                <Grid item xs={6}>
                    <p>Python</p>
                </Grid>
                <Grid item xs={6}>
                    <p>NodeJS</p>
                </Grid>
                <Grid item xs={6}>
                    <p>MySQL</p>
                </Grid>
                <Grid item xs={6}>
                    <p>Gremlin</p>
                </Grid>
            </Grid>
        </React.Fragment>
        );
};

export default Languages;