import MainStyle from "../styles/MainStyle";
import React from "react";
import Grid from '@material-ui/core/Grid'

// components
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";


// define interface to represent component props
// interface Props {}

const Layout = () => {
    const classes = MainStyle();
    return(
        <React.Fragment>
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Header/>
                </Grid>
                <Grid item xs={12}>
                    <Body/>
                </Grid>
                <Grid item xs={12}>
                    <Footer/>
                </Grid>
            </Grid>
        </React.Fragment>
        );
};

export default Layout;