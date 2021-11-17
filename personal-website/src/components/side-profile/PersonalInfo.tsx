import React from "react";
import {DOB, EMAIL, GITHUB, LINKEDIN, LOCATION, NAME, PHONE} from "../../utils/constants";
import profile_picture from "../../images/profile_picture.png"
import MainStyle from "../../styles/MainStyle";
import {Grid, Paper} from "@mui/material";

const PersonalInfo = () => {
    const classes = MainStyle();
    return(
        <React.Fragment>
                <Grid container spacing={1}>
                    <Grid item xs = {12}>
                        <img src={profile_picture} alt={"Madeleine Vis"} className={classes.image}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.card}>{NAME}</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.card}>{DOB}</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.card}>{LOCATION}</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.card}>{EMAIL}</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.card}>{PHONE}</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.card}><a href={LINKEDIN}>LinkedIn</a></Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.card}><a href={GITHUB}>GitHub</a></Paper>
                    </Grid>
                </Grid>

        </React.Fragment>
        );
};

export default PersonalInfo;