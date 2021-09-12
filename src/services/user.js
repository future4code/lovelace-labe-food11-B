import { baseURL } from "../constants/urls";
import { goToHome } from "../routes/coordinator";
import axios from "axios";

export const login = (body, clear, history) => {
  axios
    .post(`${baseURL}/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("data", JSON.stringify(response.data.user));
      clear();
      goToHome(history);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signup = (body, clear, history) => {
  axios
  .post(`${baseURL}/signup`, body)
  .then((response) => {
    clear();
    goToHome(history);
  })
  .catch((error) => {
    console.log(error);
  });
}
