import {createStyles, makeStyles, Theme} from "@material-ui/core";
import {FOOTER_HEIGHT, HEADER_HEIGHT, SIDE_MARGIN} from "../utils/constants";

const MainStyle = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            minHeight:`(${150 + HEADER_HEIGHT + FOOTER_HEIGHT}px)`,
            background: theme.palette.background.paper,
            marginLeft: SIDE_MARGIN,
            marginRight: SIDE_MARGIN,
            [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            ...theme.mixins.toolbar,
        },
        contentShift: {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            margin: SIDE_MARGIN,
        },
    })
);

export default MainStyle;