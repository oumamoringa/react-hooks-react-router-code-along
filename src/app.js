
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Login from "./login";
import NavBar from "./navbar"
import SignUp from "./signup";
import Messages from "./messages";

function App() {
  return (
    <div>
        <Home />
        <NavBar />
        <Switch>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/signup">
            <SignUp />
        </Route>
        <Route path="/messages">
            <Messages />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
