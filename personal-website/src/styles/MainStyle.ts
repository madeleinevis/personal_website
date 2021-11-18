import {FOOTER_HEIGHT, HEADER_HEIGHT} from "../utils/constants";
import {makeStyles} from "@material-ui/core";

const MainStyle = makeStyles( {
    root: {
        // flex: 1,
        // display: "flex",
        // flexDirection: "column",
        // // padding: ""0 50px"",
        // width: ""100%"",
        // background: ""linear-gradient(to top, #ffffff,#00c0ff)"",
    },
    body: {
      // padding: "0 0 0 50px"
        margin: "0",
        width: "100%"
    },
    container: {
        margin: "0",
        width: "100%"
    },
    profile_image: {
        width: "100%",
        height: "100%"
        // padding: ""10px""
    },
    header: {
        height: `${HEADER_HEIGHT}px`,
        textAlign: "center",
        // color: ""white"",
        fontFamily: "Concert One, cursive"
    },
    header_title:{
        fontSize: "80px"
    },
    header_slogan:{
        fontSize:"32px"
    },
    footer: {
        height: `${FOOTER_HEIGHT}px`,
        textAlign: "center",
    },
    main_cloud: {
        fontSize: "64px"
    },
    canvas: {
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        margin:0
    },
    card_title: {
        fontSize: "medium",
        fontWeight: "bold"
    }
});

export default MainStyle;