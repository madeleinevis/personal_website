import {Paper, styled} from "@mui/material";

const Card = styled(Paper)(() => ({
    borderRadius: 15,
    flexGrow: 1,
    height: '100%',
    border: 'solid 5px #76bbff',
    textAlign: 'center',
    // padding: '5px',
    color: "#505050"
}));
export default Card;