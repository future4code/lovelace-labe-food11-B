import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
// // import RadioButtonsGroup from "../../components/selectButtonCar/RadioButtonGroup";
// import {
//   Button,
//   ContainerSubtotal,
//   EnderecoCliente,
//   EnderecoEntrega,
//   Rectangle,
//   SomaCarrinho,
//   Subtotal,
//   Title,
//   ValorFrete,
// } from "./styled";

const CartPage = () => {
  useProtectedPage();
  return (
    <div><h1>CartPage</h1></div>
    // <div>
    //   <Title>Meu Carrinho</Title>
    //   <Rectangle>
    //     <EnderecoEntrega>Endereço de Entrega</EnderecoEntrega>
    //     <EnderecoCliente>Rua Alessandra Vieira, 42</EnderecoCliente>
    //   </Rectangle>
    //   <ValorFrete>Frete R$ 6,00</ValorFrete>

    //   <ContainerSubtotal>
    //     <Subtotal>Subtotal</Subtotal>
    //     <SomaCarrinho>RS 67,00</SomaCarrinho>
    //   </ContainerSubtotal>
    //   <RadioButtonsGroup />

    //   <Button>Confirmar</Button>
    // </div>
  );
};

export default CartPage;
