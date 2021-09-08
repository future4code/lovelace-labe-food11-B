import React from 'react';
import RadioButtonsGroup from '../../components/selectButtonCar/RadioButtonGroup';
import { Button, Title } from './styled'


const CarPage = () => {
    return (
        <div>        
           
            
     <Title>Meu Carrinho</Title>
     <br/>

     <RadioButtonsGroup/>
   
<br></br>
   

     <Button>Confirmar</Button>
     <br></br>
   
     </div>
    )
}

export default CarPage
