import {FOOTER_HEIGHT, HEADER_HEIGHT} from "../utils/constants";
import {makeStyles} from "@material-ui/core";

const MainStyle = makeStyles( {
    root: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: '0 50px',
        width: '100%',
        // background: 'linear-gradient(to top, #ffffff,#00c0ff)',
    },
    body: {
      padding: "0 50px"
    },
    card: {
        flexGrow: 1,
        borderRadius: 15,
        height: '100%',
        border: 'solid 5px #76bbff',
        textAlign: 'center',
        padding: '5px'
    },
    image: {
        width: '100%',
        height: '100%',
        padding: '10px'
    },
    header: {
        height: `${HEADER_HEIGHT}px`,
        textAlign: 'center',
        // color: 'white',
        fontFamily: 'Concert One, cursive'
    },
    header_title:{
        fontSize: '80px'
    },
    header_slogan:{
        fontSize:'32px'
    },
    footer: {
        height: `${FOOTER_HEIGHT}px`,
        textAlign: 'center',
    },
    main_cloud: {
        fontSize: '64px'
    },
    canvas: {
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        width: "100%",
        height: document.body.scrollHeight
    }
});

export default MainStyle;