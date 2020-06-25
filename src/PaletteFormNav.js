import React, { Component } from "react";
import PaletteMetaForm from "./PaletteMetaForm";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';import { Button } from "@material-ui/core";
import styles from "./styles/PaletteFormNavStyles";

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = { newPaletteName: "", formShowing: false };
    this.handleChange = this.handleChange.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  showForm() {
    this.setState({ formShowing: true });
  }

  hideForm() {
    this.setState({ formShowing: false });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    const { classes, open } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <AddCircleOutlineIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create a Palette
            </Typography>
          </Toolbar>
          <div classes={classes.navBtns}>
            <Link className={classes.link} exact to="/">
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
              >
                Go Back
              </Button>
            </Link>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={this.showForm}
            >
              Save Palette
            </Button>
          </div>
        </AppBar>
        {this.state.formShowing && (
          <PaletteMetaForm
            palettes={this.props.palettes}
            handleSubmit={this.props.handleSubmit}
            hideForm={this.hideForm}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
