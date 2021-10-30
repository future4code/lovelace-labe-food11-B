import React from "react"
import { ScreenContainer, SignUpButtonContainer } from "./styled"
import Button from '@material-ui/core/Button'
import LoginForm from "./LoginForm"
import { useHistory } from 'react-router-dom'
// import {goToSignUp} from "../../routes/coordinator"
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { neutralColor } from "../../constants/colors"

export default function LoginPage (){
    useUnprotectedPage()
    const history = useHistory()
    return (
        <ScreenContainer>
            <LoginForm />
            <SignUpButtonContainer>
                <Button
                    onClick={() => console.log('você clicou')}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"neutralColor "}
                >
                    Não possui conta? Cadastre-se
                    </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

