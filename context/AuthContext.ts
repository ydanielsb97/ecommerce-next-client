import { createContext } from 'react'
import { AuthContextI } from '../interfaces/AuthContext.interface';

const AuthContext = createContext<AuthContextI>({
    auth: {token: "", userId: ""},
    login: () => null,
    logout: () => null,
    setReloadUser: () => null
});

export default AuthContext;