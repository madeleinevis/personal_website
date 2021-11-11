import Grid from "@material-ui/core/Grid";
import React from "react";
import PersonalInfo from "./PersonalInfo";

const SideProfile = () => {
    return(
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <PersonalInfo/>
                </Grid>
            </Grid>
        </React.Fragment>
        );
};

export default SideProfile;