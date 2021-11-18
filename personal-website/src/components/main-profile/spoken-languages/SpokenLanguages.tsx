import React from "react";
import {Grid} from "@mui/material";

const SpokenLanguages = () => {
    return(
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <h5>Spoken Languages</h5>
                </Grid>
                <Grid item xs={6}>
                    <p>Fluent: Dutch</p>
                </Grid>
                <Grid item xs={6}>
                    <p>Fluent: English</p>
                </Grid>
                <Grid item xs={6}>
                    <p>Conversational: French</p>
                </Grid>
                <Grid item xs={6}>
                    <p>Basic: Mandarin</p>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
export default SpokenLanguages;