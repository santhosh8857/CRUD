import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavLink,
} from "reactstrap";
import { FaLaptopCode } from "react-icons/fa";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Users from "./components/Users";
import { IconContext } from "react-icons/lib";
import Createuser from "./components/Createuser";
import ViewUser from "./components/ViewUser";

let apiURL = "https://6188e783d0821900178d75f4.mockapi.io/api/v1/user";
const routing = (
  // Parent for all the routes
  <BrowserRouter>
    <Navbar color="light" expand="md" light>
      <NavbarBrand href="/">
        <h2>
          <IconContext.Provider value={{ color: "blue" }}>
            <FaLaptopCode className="primary" />
          </IconContext.Provider>
        </h2>
      </NavbarBrand>
      <Collapse navbar>
        <Nav className="me-auto" navbar>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/users">Users</NavLink>
          <NavLink href="/create-user">Create User</NavLink>
        </Nav>
        <NavbarText>
          <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input
                type="text"
                className="form-control bg-light border-0 small"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>
        </NavbarText>
      </Collapse>
    </Navbar>
    {/* To select the desired Route */}

    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/users">
        <Users apiURL={apiURL} />
      </Route>
      <Route exact path="/create-user" component={Createuser} />
      <Route exact path="/user/:id">
        <ViewUser apiURL={apiURL} />
      </Route>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
