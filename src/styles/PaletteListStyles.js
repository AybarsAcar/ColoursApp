import sizes from "./sizes";

export default {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out"
    }
  },

  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#181570",
    backgroundImage:
      "url(https://www.transparenttextures.com/patterns/concrete-wall-2.png)",
    overflow: "scroll",
    "& h1": {
      fontSize: "2rem",
    },
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    paddingBottom: "2rem",
    paddingTop: "1rem",
    [sizes.down("xl")]: {
      width: "60%",
    },
    [sizes.down("lg")]: {
      width: "70%",
    },
    [sizes.down("md")]: {
      width: "80%",
    },
    [sizes.down("sm")]: {
      width: "70%",
    },
    [sizes.down("xs")]: {
      width: "50%",
    },
  },

  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
    },
  },
};
