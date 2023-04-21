import React from "react";
import { Switch, Redirect } from "react-router-dom";
import Header from "../components/header/header";
import Home from "../pages/home/home";
import { PrivateRouter } from "./privateRouter";

export const HomeRouter = () => {
  return (
    <>
      <Header />
      <Switch>
        <PrivateRouter exact path="/home" component={Home} />
        <Redirect from="/" to="/home" />
      </Switch>
    </>
  );
};
