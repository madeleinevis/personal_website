import React from "react";
import {ABOUTME} from "../../utils/constants";
import MainStyle from "../../styles/MainStyle";
import Card from "../../styles/CardStyle";

const AboutMe = () => {
    const classes = MainStyle();
    return(
        <Card>
            <div className={classes.card_title}>
                About Me
            </div>
            <div>
                {ABOUTME}
            </div>
        </Card>

    );
};

export default AboutMe;