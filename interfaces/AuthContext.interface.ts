import { AuthI } from "./Auth.interface";

export interface AuthContextI {
    auth: AuthI,
    login: Function,
    logout: Function,
    setReloadUser: Function
}