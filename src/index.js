import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Users from "./components/Users";
import Createuser from "./components/Createuser";
import ViewUser from "./components/ViewUser";
import EditUser from "./components/EditUser";
import Navbar from "./components/Navbar";

let apiURL = "https://6188e783d0821900178d75f4.mockapi.io/api/v1/user";
const routing = (
  // Parent for all the routes
  <BrowserRouter>
    <Navbar />
    {/* To select the desired Route */}

    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/users">
        <Users apiURL={apiURL} />
      </Route>
      <Route exact path="/create-user">
        <Createuser apiURL={apiURL} />
      </Route>
      <Route exact path="/user/:id">
        <ViewUser apiURL={apiURL} />
      </Route>
      <Route exact path="/edit-user/:id">
        <EditUser apiURL={apiURL} />
      </Route>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
