import React from "react";
import Stack from "./stack/Stack";
import Education from "./education/Education";
import SoftSkills from "./soft-skills/SoftSkills";
import Projects from "./projects/Projects";
import MainStyle from "../../styles/MainStyle";
import SpokenLanguages from "./spoken-languages/SpokenLanguages";
import AboutMe from "./AboutMe";
import {Grid} from "@mui/material";
import Card from "../../styles/CardStyle";

const MainProfile = () => {
    const classes = MainStyle();

    return(
        <React.Fragment>
            <Grid container rowSpacing={1} columnSpacing={1} className={classes.body}>
                <Grid item sm={12} md={12}>
                    <Card className={classes.card}>
                        <AboutMe/>
                    </Card>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Stack/>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Card  className={classes.card}>
                        <Projects/>
                    </Card>

                </Grid>
                <Grid item sm={12} md={6}>
                    <Card className={classes.card}>
                        <SoftSkills/>
                    </Card>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Card className={classes.card}>
                        <SpokenLanguages/>
                    </Card>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Card className={classes.card}>
                        <Education/>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default MainProfile;