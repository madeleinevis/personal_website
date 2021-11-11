import Grid from "@material-ui/core/Grid";
import React from "react";
import Languages from "./Languages";
import Tools from "./Tools";

const Stack = () => {
    return(
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <Languages/>
                </Grid>
                <Grid item xs={12}>
                    <Tools/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
export default Stack;