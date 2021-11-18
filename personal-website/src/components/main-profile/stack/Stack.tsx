import React from "react";
import Languages from "./Languages";
import Tools from "./Tools";
import {Grid} from "@mui/material";
import Card from "../../../styles/CardStyle";

const Stack = () => {
    return(
        <React.Fragment>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Card><Languages/></Card>
                </Grid>
                <Grid item xs={12}>
                    <Card><Tools/></Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
export default Stack;