import React from 'react'

import { Route, Switch, BrowserRouter } from "react-router-dom"
import CarPage from '../pages/CarPage/CarPage'


import HomePage from '../pages/Home/HomePage'


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/car"}>
          <CarPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router