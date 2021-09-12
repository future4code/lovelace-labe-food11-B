import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import AdressForm from "../../components/AdressForm/AdressForm";

import useUnprotectedPage from "../../hooks/useUnprotectedPage";

import { ScreenContainer } from "./styled";

export default function SignUpPage() {
  const [currentScreen, setCurrentScreen] = useState("user");

  const buttonAction = () => {
    if (currentScreen === "user") {
      setCurrentScreen("adress");
    } else {
      setCurrentScreen("user");
    }
  };

  const renderScreen = () => {
    if (currentScreen === "user") {
      return <SignUpForm buttonAction={buttonAction}/>;
    } else {
      return <AdressForm buttonAction={buttonAction}/>;
    }
  };

  useUnprotectedPage();
  const history = useHistory();
  return <ScreenContainer>{renderScreen()}</ScreenContainer>;
}
