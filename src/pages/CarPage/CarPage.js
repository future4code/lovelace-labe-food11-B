import React from 'react';
import Footer from '../../components/footer/footer';
import RadioButtonsGroup from '../../components/selectButtonCar/RadioButtonGroup';
import { Button, ContainerSubtotal, EnderecoCliente, EnderecoEntrega, Rectangle, SomaCarrinho, Subtotal, Title, ValorFrete } from './styled'


const CarPage = () => {
    return (
        <div>        
           
            
     <Title>Meu Carrinho</Title>
     <br/>
     <Rectangle>
     <EnderecoEntrega>Endereço de Entrega</EnderecoEntrega>
     <EnderecoCliente>Rua Alessandra Vieira, 42</EnderecoCliente>
     </Rectangle>
 <ValorFrete>Frete R$ 6,00</ValorFrete>
 <br></br>

 <ContainerSubtotal>
<Subtotal>Subtotal</Subtotal>
<SomaCarrinho>RS 67,00</SomaCarrinho>
</ContainerSubtotal>
<br></br>
<br/>
<br/>
<br/>
<br/>
     <RadioButtonsGroup/>
   
<br></br>
   

     <Button>Confirmar</Button>
     <br></br>
     <Footer/>
     
   
     </div>
    )
}

export default CarPage
