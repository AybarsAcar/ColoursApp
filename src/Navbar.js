import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
//importing our slider and its css
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./styles/NavbarStyles"

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  //we used header for rendering just to make sure it sits at the top -- could have used a div
  render() {

    const {classes} = this.props;

    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">React Colour Picker</Link>
        </div>
        {this.props.showAllColors && (
          <div className={classes.sliderContainter}>
            <span>Level: {this.props.level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={this.props.level}
                min={100}
                max={900}
                step={100}
                onAfterChange={this.props.changeLevel}
                trackStyle={{ backgroundColor: "transparent" }}
                railStyle={{ height: "8px" }}
                handleStyle={{
                  backgroundColor: "green",
                  outline: "none",
                  border: "2px solid green",
                  boxShadow: "none",
                  width: "13px",
                  height: "13px",
                  marginLeft: "-7px",
                  marginTop: "-3px",
                }}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select value={this.state.format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format Changed to {this.state.format.toUpperCase()}
            </span>
          }
          ContentProps={{ "aria-describedby": "message-id" }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);
