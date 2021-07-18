import { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { SignUpDataI } from "../../../interfaces/SignUpData.interface";
import { postSignUp } from "../../../providers/Access.provider";
import { toast } from "react-toastify";


const SignUpForm = ({ showLoginForm, onCloseModal }: any) => {

    const initialState: SignUpDataI = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
    }

    const [formData, setFormData] = useState<SignUpDataI>(initialState);

    const handleSubmit = async(e: any) => {

        const isValid = validationFormData(formData)
        console.log(isValid)
        if(!isValid){
            toast.error("Please verify that all fields are complete and try again")
            return;
        }

        const res: any = await postSignUp(formData);

        if(res.error){
            toast.error(res.error)
            return;
        }
        toast.success(`Welcome ${res.data.user.firstName}`);
        console.log(res)

        e.target.reset()

        setFormData((prev: SignUpDataI) => ({...prev, initialState}))
        onCloseModal()

    }

    const handleChangeInput = (e: any) => {

        const { name, value } = e.target;

        setFormData((prev: SignUpDataI) => ({...prev, [name]: value}))

    }

    const validationFormData = (data: any) => {

        var isValid = true;
        Object.keys(data).forEach((e:string) => {
            //@ts-ignore
            const value = data[`${e}`]
            console.log(value)
            if(!value || value.lenth <= 0) {
                isValid = false;
                return isValid;
            }
            
        })

        return isValid;
    }


    return (
        <Form className="login-form" onSubmit={handleSubmit}>
            {/* <span className="errorForm">{errorSubmit.error}</span> */}
            <Form.Input
                name="firstName"
                type="text"
                placeholder="firstName"
                required
                value={formData.firstName}
                onChange={handleChangeInput}
            />

            <Form.Input
                name="lastName"
                type="text"
                placeholder="lastName"
                required
                value={formData.lastName}
                onChange={handleChangeInput}
            />

            <Form.Input
                name="username"
                type="text"
                placeholder="userName"
                required
                value={formData.username}
                onChange={handleChangeInput}
            />

            <Form.Input
                name="email"
                type="text"
                placeholder="email"
                required
                value={formData.email}
                onChange={handleChangeInput}
            />


            <Form.Input
                name="password"
                type="password"
                placeholder="password"
                required
                value={formData.password}
                onChange={handleChangeInput}
            />
            <div className="actions">
                <Button type="button" onClick={showLoginForm} basic>
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
