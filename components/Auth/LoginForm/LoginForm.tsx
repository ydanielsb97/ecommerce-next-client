import { FormEvent, useState } from "react";
import { Form, Button, Input } from "semantic-ui-react";
import { toast } from "react-toastify";
import { LogInDataI } from "../../../interfaces/LogInData.interface";
import { postLogIn } from "../../../providers/Access.provider";
import useAuth from "../../../hooks/useAuth";

const LoginForm = ({ showSignUpForm, onCloseModal }: any) => {
  const initialState: LogInDataI = {
    identifier: "",
    password: "",
  };
  const [formData, setFormData] = useState<LogInDataI>(initialState);
  const [loading, setLoading] = useState(false)

  const {login, auth} = useAuth();


  const handlerChangeInput = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev: LogInDataI) => ({ ...prev, [name]: value }));
  };

  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true)

    if (!validationFormData(formData)) {
      toast.error("Please verify that all fields are complete and try again");
      setLoading(false)
      return;
    }

    const res: any = await postLogIn(formData);

    if (res.error) {
      toast.error(res.error);
      setLoading(false)
      return;
    }
    login(res.data.jwt)
    toast.success(`Welcome ${res.data.user.firstName}`);

    e.target.reset();
    setLoading(false)
    setFormData((prev: LogInDataI) => ({ ...prev, initialState }));
    onCloseModal()
  };

  const validationFormData = (data: any) => {
    var isValid = true;
    Object.keys(data).forEach((e: string) => {
      //@ts-ignore
      const value = data[`${e}`];
      if (!value || value.lenth <= 0) {
        isValid = false;
        return isValid;
      }
    });
    return isValid;
  };

  return (
    <Form className="login-form" onSubmit={handlerSubmit}>
      <Form.Input
        name="identifier"
        type="email"
        placeholder="Email"
        value={formData.identifier}
        onChange={handlerChangeInput}
        required
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handlerChangeInput}
        required
      />
      <div className="actions">
        <Button className="submit" type="submit" loading={loading}>
          Log In
        </Button>

        <div>
          <Button type="button" basic onClick={showSignUpForm}>
            Sing Up
          </Button>

          <Button type="button">Did you forget your password?</Button>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
