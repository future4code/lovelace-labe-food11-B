import React from "react";
import { useHistory } from "react-router";
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToLogin, goToRestaurantsList } from "../../routes/coordinator";

export default function HomePage() {
  useProtectedPage();
  const history = useHistory()
  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={() => goToRestaurantsList(history)}>Restaurantes</button>
      <button onClick={() => {localStorage.removeItem('token')
    goToLogin(history)}}> Logout </button>
    </div>
  );
}
