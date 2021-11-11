import Grid from "@material-ui/core/Grid";
import React from "react";

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
export default SoftSkills;