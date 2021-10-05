import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import FavWatch from "./components/FavWatch";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allWatches: [],
      favWatches: [],
    };
  }

  componentDidMount = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}/home`)
      .then((items) => {
        this.setState({
          allWatches: items.data,
        });
      });

    await axios.get(`${process.env.REACT_APP_SERVER_URL}/fav`).then((items) => {
      this.setState({
        favWatches: items.data,
      });
    });
  };

  addFav = async (name, image, description, usd) => {
    let data = {
      name: name,
      image: image,
      description: description,
      usd: usd,
    };

    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/fav`, data)
      .then((items) => {
        this.setState({
          favWatches: items.data,
        });
      });
  };

  deleteFav = (id) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/fav/${id}`)
      .then((items) => {
        this.setState({
          favWatches: items.data,
        });
      });
  };

  updateFav = (e, id, name, image, description, usd) => {
    e.preventDefault();
    let data = {
      name: name,
      image: image,
      description: description,
      usd: usd,
    };

    axios
      .put(`${process.env.REACT_APP_SERVER_URL}/fav/${id}`, data)
      .then((items) => {
        this.setState({
          favWatches: items.data,
        });
      });
  };

  render() {
    return (
      <div>
        <Header />
        {this.props.auth0.isAuthenticated ? (
          <>
            <LogoutButton />
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home
                    allWatches={this.state.allWatches}
                    addFav={this.addFav}
                  />
                </Route>
                <Route exact path="/fav">
                  <FavWatch
                    favWatches={this.state.favWatches}
                    deleteFav={this.deleteFav}
                    updateFav={this.updateFav}
                  />
                </Route>
              </Switch>
            </Router>
          </>
        ) : (
          <LoginButton />
        )}

        {/* @todo show login button and hide the list for unauthenticated users */}

        {/* @todo show logout button and show items list components for authenticated users */}
      </div>
    );
  }
}

export default withAuth0(App);
