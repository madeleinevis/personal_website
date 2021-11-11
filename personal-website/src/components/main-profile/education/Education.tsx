import Grid from "@material-ui/core/Grid";
import React from "react";

const Education = () => {
    return(
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <h4>Education</h4>
                </Grid>
                <Grid item xs={6}>
                    <h5>University</h5>
                </Grid>
                <Grid item xs={6}>
                    <p>MEng Computer Science: 1st Class Honours</p>
                </Grid>
                <Grid item xs={6}>
                    <h5>High School</h5>
                </Grid>
                <Grid item xs={6}>
                    <p>A-Level: AAA (Maths, Physics, Computer Science)</p>
                </Grid>
            </Grid>
        </React.Fragment>
        );
};
export default Education;