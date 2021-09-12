import React from "react";
import { useHistory } from "react-router-dom";

import useUnprotectedPage from "../../hooks/useUnprotectedPage";

import LoginForm from "./LoginForm";

import { goToSignUp } from "../../routes/coordinator";

import { ScreenContainer, SignUpButtonContainer } from "./styled";
import Button from "@material-ui/core/Button";

export default function LoginPage() {
  useUnprotectedPage();
  const history = useHistory();
  return (
    <ScreenContainer>
      <LoginForm />
      <SignUpButtonContainer>
        <Button
          onClick={() => {
            goToSignUp(history);
          }}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
        >
          Não possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
}
