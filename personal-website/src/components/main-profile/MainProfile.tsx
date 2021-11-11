import Grid from "@material-ui/core/Grid";
import React from "react";
import Stack from "./stack/Stack";
import Education from "./education/Education";
import SoftSkills from "./soft-skills/SoftSkills";
import Projects from "./projects/Projects";

const MainProfile = () => {
    return(
        <React.Fragment>
            <Grid container>
                <Grid item sm={12} md={12}>
                    <h2>About me.</h2>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Stack/>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Projects/>
                </Grid>
                <Grid item sm={12} md={6}>
                    <SoftSkills/>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Education/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default MainProfile;