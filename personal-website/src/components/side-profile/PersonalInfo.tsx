import Grid from "@material-ui/core/Grid";
import React from "react";
import {DOB, EMAIL, GITHUB, LINKEDIN, LOCATION, NAME, PHONE} from "../../utils/constants";

const PersonalInfo = () => {
    return(<Grid container>
        <Grid item xs={12}>
            {NAME}
        </Grid>
        <Grid item xs={12}>
            {DOB}
        </Grid>
        <Grid item xs={12}>
            {LOCATION}
        </Grid>
        <Grid item xs={12}>
            {EMAIL}
        </Grid>
        <Grid item xs={12}>
            {PHONE}
        </Grid>
        <Grid item xs={12}>
            <a href={LINKEDIN}>LinkedIn</a>
        </Grid>
        <Grid item xs={12}>
            <a href={GITHUB}>GitHub</a>
        </Grid>
    </Grid>);
};

export default PersonalInfo;