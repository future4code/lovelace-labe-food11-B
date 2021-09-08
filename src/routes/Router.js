import React from 'react'
import HomePage from '../pages/Home/HomePage'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        </Switch>
    </BrowserRouter>
  );
}