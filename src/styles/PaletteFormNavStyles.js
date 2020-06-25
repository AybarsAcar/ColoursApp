//important our global constants
import {DRAWER_WIDTH} from "../constants"
import sizes from "./sizes";

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  navBtns: {
    marginRight: "1rem",
    [sizes.down("xs")]: {
      marginRight: "0"
    }
  },
  button: {
    margin: "0 0.5rem",  
    [sizes.down("xs")]: {
      padding: "0.3rem"
    }  
  },
  link: {
    textDecoration: "none"
  },
  hide: {
    display: "none",
  },
});

export default styles;