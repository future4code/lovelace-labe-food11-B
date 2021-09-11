import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import RestaurantsList from "../pages/RestaurantsList/RestaurantsList";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/signup"}>
          <SignUpPage />
        </Route>
        <Route exact path={"/restaurant"}>
          <RestaurantsList />
        </Route>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
