import { useState } from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const Auth = ({ setTitleModalSingUp, setTitleModalLogIn, onCloseModal }: any) => {

    const [showLogin, setShowLogin] = useState({show: true})

    const showLoginForm = () => {
        setShowLogin((prev: {show:boolean}) => ({...prev, show: true}))
        setTitleModalLogIn();

    }
    const showSignUpForm = () => {
        setTitleModalSingUp();
        setShowLogin((prev: {show:boolean}) => ({...prev, show: false}))
    }


    return showLogin.show ? <LoginForm onCloseModal={onCloseModal} showSignUpForm={showSignUpForm}/> : <SignUpForm showLoginForm={showLoginForm} onCloseModal={onCloseModal}/>
}

export default Auth
