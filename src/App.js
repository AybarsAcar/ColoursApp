import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Pallette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import NewPaletteForm from "./NewPaletteForm";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Page from "./Page";

class App extends Component {
  constructor(props) {
    super(props);
    //to check local storage
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || seedColors };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  }

  //to save and delete we pass in the syncLocalStorage as a callback function
  //because we want to make sure it is called after the first one is finished executing
  deletePalette(id) {
    this.setState(
      (st) => ({
        palettes: st.palettes.filter((palette) => palette.id !== id),
      }),
      this.syncLocalStorage
    );
  }

  savePalette(newPalette) {
    //we need to save this new palette in some sort of database
    //structure we can use
    //just concat the newPalette to existing palettes in the state for now
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      //then call a function to add to a local storage as a callback
      this.syncLocalStorage
    );
  }

  //save palettes to local storage
  //make sure to use the same key in savedPalettes' .getItem()
  syncLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  //order does matter****
  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/new/"
                  render={(routeProps) => (
                    <Page>
                      <NewPaletteForm
                        savePalette={this.savePalette}
                        palettes={this.state.palettes}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={(routeProps) => (
                    <Page>
                      <PaletteList
                        palettes={this.state.palettes}
                        deletePalette={this.deletePalette}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={(routeProps) => (
                    <Page>
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={(routeProps) => (
                    <Page>
                      <SingleColorPalette
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route render={(routeProps) => (
                    <Page>
                      <PaletteList
                        palettes={this.state.palettes}
                        deletePalette={this.deletePalette}
                        {...routeProps}
                      />
                    </Page>
                  )} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
