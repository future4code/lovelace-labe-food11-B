import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import CartPage from "../pages/CartPage/CartPage";
import RestauranteListPage from "../pages/RestaurantListPage/RestaurantListPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/signup"}>
          <SignUpPage />
        </Route>
        <Route exact path={"/cart"}>
          <CartPage />
        </Route>
        <Route exact path={"/restaurants"}>
          <RestauranteListPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
