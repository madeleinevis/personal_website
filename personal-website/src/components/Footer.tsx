import React from "react";

import { FOOTER_TEXT } from "../utils/constants";
import MainStyle from "../styles/MainStyle";

// interface Props {}

const Footer = () => {
    const classes = MainStyle();
    return (
        <div className={classes.footer}>
            {FOOTER_TEXT}
        </div>
    );
};

export default Footer;