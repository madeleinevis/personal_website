import {createStyles, makeStyles, Theme} from "@material-ui/core";
import {FOOTER_HEIGHT, HEADER_HEIGHT} from "../utils/constants";

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
        },

        card: {

        }
    })
);

export default MainStyle;