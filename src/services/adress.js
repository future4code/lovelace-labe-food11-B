import axios from "axios";
import { baseURL } from "../constants/baseURL ";


export const putAdress = (body, clear) => {
  axios
    .put(`${baseURL}/adress`, body)
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
