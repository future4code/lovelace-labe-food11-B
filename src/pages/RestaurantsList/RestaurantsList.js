import React from "react";
import { useHistory } from 'react-router-dom'
import { goToLogin } from '../../routes/coordinator';
import useProtectedPage from "../../hooks/useProtectedPage";

const RestaurantsList = () => {
  const history = useHistory()
  useProtectedPage();
  return (
    <div>
      <h1>RestaurantsList</h1>
      <button
        onClick={() => {
          localStorage.clear();
          goToLogin(history)
        }}
      >
        Sair
      </button>
    </div>
  );
};
export default RestaurantsList;
