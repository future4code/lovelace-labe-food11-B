import React from 'react'
import CarPage from '../pages/CarPage/CarPage'
import HomePage from '../pages/Home/HomePage'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"car"}>
          <CarPage/> 
        </Route>
        </Switch>
    </BrowserRouter>
  )
}