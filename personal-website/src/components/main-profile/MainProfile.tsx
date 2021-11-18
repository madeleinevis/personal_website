import React from "react";
import Stack from "./stack/Stack";
import Education from "./education/Education";
import SoftSkills from "./soft-skills/SoftSkills";
import Projects from "./projects/Projects";
import MainStyle from "../../styles/MainStyle";
import SpokenLanguages from "./spoken-languages/SpokenLanguages";
import AboutMe from "./AboutMe";
import {Container, Grid} from "@mui/material";
import Card from "../../styles/CardStyle";

const MainProfile = () => {
    const classes = MainStyle();

    return(
        <React.Fragment>
            <Container>
                <Grid container className={classes.body} spacing={1}>
                    <Grid item sm={12} md={12}>
                        <AboutMe/>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Stack/>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Card>
                            <Projects/>
                        </Card>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Card>
                            <SoftSkills/>
                        </Card>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Card>
                            <SpokenLanguages/>
                        </Card>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Card>
                            <Education/>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

        </React.Fragment>
    );
};

export default MainProfile;