

const LoginForm = ({showSignUpForm}: any) => {

    return (
        <div>
            <h1>This is LoginForm</h1>
            <button onClick={showSignUpForm}>Ir al registro</button>
        </div>
    )
}

export default LoginForm
