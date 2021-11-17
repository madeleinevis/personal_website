import React from "react";
import Languages from "./Languages";
import Tools from "./Tools";
import {Grid, Paper} from "@mui/material";
import MainStyle from "../../../styles/MainStyle";

const Stack = () => {
    const classes = MainStyle();
    return(
        <React.Fragment>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.card}><Languages/></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.card}><Tools/></Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
export default Stack;