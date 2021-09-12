import React from "react";
import Router from "./routes/Router";
import styled from "styled-components";
import RestauranteListPage from './pages/RestaurantListPage/RestaurantListPage'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
`;

export default function App() {
  return (

      <AppContainer>
        {/* <RestauranteListPage /> */}
        <Router />
      </AppContainer>
  );
}
