import sizes from "./sizes"

export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },

  logo: {
    marginRight: "15px",
    padding: "0 17px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },

  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    [sizes.down("sm")]: {
      width: "150px"
    }
  },
  

  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
};
