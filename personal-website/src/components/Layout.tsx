import MainStyle from "../styles/MainStyle";
import React from "react";

// components
import Header from "./Header";
import Body from "./Body";
import {Container, Grid} from "@mui/material";
import {FOOTER_TEXT} from "../utils/constants";


// define interface to represent component props
// interface Props {}

const Layout = () => {
    const classes = MainStyle();
    return(
        <React.Fragment>
            <Container>
                <Grid container className={classes.root} id={"layout"}>
                    <Grid item xs={12}>
                        <Header/>
                    </Grid>
                    <Grid item xs={12}>
                        <Body/>
                    </Grid>
                    <Grid item xs={12} className={classes.footer}>
                        {FOOTER_TEXT}
                    </Grid>
                </Grid>
            </Container>

        </React.Fragment>
        );
};

export default Layout;