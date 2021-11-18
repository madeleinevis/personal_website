import React from "react";
import {IMG} from "../../utils/constants"
import Marquee from "react-fast-marquee";

const Cloud = (props: { speed: number; size: number;}) => {
    const speed = props.speed;
    const size = props.size;

    const styleObj = {
        fontSize: size,
        height:"60px"
    }
    return (
        <Marquee speed={speed} gradient={false}>
            <div style={styleObj}>{IMG}</div>
        </Marquee>
    );
}

export default Cloud;
