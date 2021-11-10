import Grid from "@material-ui/core/Grid";
import React from "react";
import PersonalInfo from "./PersonalInfo";

const SideProfile = () => {
    return(<Grid container>
        <Grid item xs={12}>
            <PersonalInfo/>
        </Grid>
    </Grid>);
};

export default SideProfile;