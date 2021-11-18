import React from "react";
import {DOB, EMAIL, GITHUB, LINKEDIN, LOCATION, NAME, PHONE} from "../../utils/constants";
import profile_picture from "../../images/profile_picture.png"
import MainStyle from "../../styles/MainStyle";
import {Container, Grid} from "@mui/material";
import Card from "../../styles/CardStyle";

const PersonalInfo = () => {
    const classes = MainStyle();
    return(
        <React.Fragment>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs = {12}>
                        <img src={profile_picture} alt={"Madeleine Vis"} className={classes.profile_image}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>{NAME}</Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>{DOB}</Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>{LOCATION}</Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>{EMAIL}</Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>{PHONE}</Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card><a href={LINKEDIN}>LinkedIn</a></Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card><a href={GITHUB}>GitHub</a></Card>
                    </Grid>
                </Grid>
            </Container>


        </React.Fragment>
        );
};

export default PersonalInfo;