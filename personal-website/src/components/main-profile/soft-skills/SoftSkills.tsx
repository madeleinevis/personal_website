
import React from "react";
import {Grid} from "@mui/material";

const SoftSkills = () => {
    return(
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <h4>Soft Skills</h4>
                </Grid>
                <Grid item xs={6}>
                    <p>Leadership</p>
                </Grid>
                <Grid item xs={6}>
                    <p>Curiosity</p>
                </Grid>
            </Grid>
        </React.Fragment>
        );
};
export default SoftSkills;