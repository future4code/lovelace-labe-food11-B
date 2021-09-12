import React, { useState } from "react";
import { InputsContainer, AdressFormContainer } from "./styled";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/useForm";
import { signup } from "../../services/user";
import { useHistory } from "react-router-dom";

export default function AdressForm() {
  const [form, onChange, clear] = useForm({
    street: "",
    number: "",
    city: "",
    neighbourhood: "",
    state: "",
    completed: "",
  });
  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    signup(form, clear, history);
  };

  return (
    <AdressFormContainer>
      <form onSubmit={onSubmitForm}>
        <InputsContainer>
          <TextField
            name={"street"}
            value={form.street}
            onChange={onChange}
            label={"Logradouro"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
          />
          <TextField
            name={"number"}
            value={form.number}
            onChange={onChange}
            label={"Número"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
          />
          <TextField
            name={"neighbourhood"}
            value={form.neighbourhood}
            onChange={onChange}
            label={"Bairro/Distrito"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
          />
          <TextField
            name={"neighbourhood"}
            value={form.neighbourhood}
            onChange={onChange}
            label={"Bairro/Distrito"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
          />
          <TextField
            name={"city"}
            value={form.city}
            onChange={onChange}
            label={"Cidade"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
          />
          <TextField
            name={"state"}
            value={form.state}
            onChange={onChange}
            label={"Estado"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
          />
          <TextField
            name={"complement"}
            value={form.complement}
            onChange={onChange}
            label={"Complemento"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            type={"text"}
          />
        </InputsContainer>
        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
        >
          Enviar
        </Button>
      </form>
    </AdressFormContainer>
  );
}
