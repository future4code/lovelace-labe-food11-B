import { baseURL } from "../constants/urls";
import { goToRestaurants } from "../routes/coordinator";
import axios from "axios";

export const login = (body, clear, history) => {
  axios
    .post(`${baseURL}/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("data", JSON.stringify(response.data.user));
      clear();
      goToRestaurants(history);
    })
    .catch((error) => {
      console.log(error);
    });
};
