import React from "react";
import {HEADER_TITLE, SLOGAN} from "../utils/constants";
import MainStyle from "../styles/MainStyle";

// define interface to represent component props
// interface Props {}

const Header = () => {
    const classes = MainStyle();
    return (
        <div className={classes.header}>
            <div className={classes.header_title}>
                {HEADER_TITLE}
            </div>
            <div className={classes.header_slogan}>
                {SLOGAN}
            </div>
        </div>
    );
};

export default Header;