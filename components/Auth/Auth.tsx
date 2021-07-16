import { useState } from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const Auth = ({ onCloseModal, setTitleModal }: any) => {

    const [showLogin, setShowLogin] = useState(true)

    const showLoginForm = () => {
        setShowLogin(true)
        setTitleModal("This is the login form")
    }
    const showSignUpForm = () => {
        setShowLogin(false)
        setTitleModal("This is the Sign Up form")
    }


    return showLogin ? <LoginForm showSignUpForm={showSignUpForm}/> : <SignUpForm showLoginForm={showLoginForm}/>
}

export default Auth
