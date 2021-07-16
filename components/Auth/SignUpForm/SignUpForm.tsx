import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "semantic-ui-react";
import { SignUpDataI } from "../../../interfaces/SignUpData.interface";
import { postSignUp } from "../../../providers/Access.provider";

const SignUpForm = ({ showLoginForm }: any) => {

    const initialState: SignUpDataI = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
    }

    const [formData, setFormData] = useState<SignUpDataI>(initialState);
    const [errorSubmit, setErrorSubmit] = useState("")

    const handleSubmit = async(e: any) => {

        const res: any = await postSignUp(formData);

        if(res.error){
            setErrorSubmit(res.error)
            return;
        }


        e.target.reset()

        setFormData((prev: SignUpDataI) => ({...prev, initialState}))

    }

    const handleChangeInput = (e: any) => {

        const { name, value } = e.target;

        setFormData((prev: SignUpDataI) => ({...prev, [name]: value}))

    }


    return (
        <Form className="login-form" onSubmit={handleSubmit}>
            <span className="errorForm">{errorSubmit}</span>
            <Form.Input
                name="firstName"
                type="text"
                placeholder="firstName"
                required
                onChange={handleChangeInput}
            />

            <Form.Input
                name="lastName"
                type="text"
                placeholder="lastName"
                required
                onChange={handleChangeInput}
            />

            <Form.Input
                name="userName"
                type="text"
                placeholder="userName"
                required
                onChange={handleChangeInput}
            />

            <Form.Input
                name="email"
                type="text"
                placeholder="email"
                required
                onChange={handleChangeInput}
            />


            <Form.Input
                name="password"
                type="password"
                placeholder="password"
                required
                onChange={handleChangeInput}
            />
            <div className="actions">
                <Button type="button" basic>
                    Log In
                </Button>
                <Button type="submit" className="submit">
                    Sign Up
                </Button>
            </div>
        </Form>
    )
}

export default SignUpForm
