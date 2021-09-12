import React, { useState } from "react";
import { InputsContainer, SignUpFormFormContainer } from "./styled";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/useForm";
import { signup } from "../../services/user";
import { useHistory } from "react-router-dom";
import AdressForm from '../../components/AdressForm/AdressForm'

export default function SignUpForm(props) {
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    signup(form, clear, history);
  };

  return (
    <SignUpFormFormContainer>
      <form onSubmit={onSubmitForm}>
        <InputsContainer>
          <TextField
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Nome Completo"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
          />
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"cpf"}
            value={form.cpf}
            onChange={onChange}
            label={"CPF"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
        </InputsContainer>
        <Button
          onClick={props.buttonAction}
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
        >
          Cadastrar Endereço
        </Button>
      </form>
    </SignUpFormFormContainer>
  );
}
