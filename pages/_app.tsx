import "../scss/global.scss";
import "semantic-ui-css/semantic.min.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwtDecode from "jwt-decode";
import { setToken } from "../providers/Token.provider";

// Context
import AuthContext from "../context/AuthContext";
import { useMemo, useState } from "react";
import { AuthContextI } from "../interfaces/AuthContext.interface";
import { AuthI } from "../interfaces/Auth.interface";
import { TokenDecodedI } from "../interfaces/TokenDecoded.interface";

export default function MyApp({ Component, pageProps }: AppProps) {

  const initialState = { token: "", userId: "" }
  const [authState, setAuthState] = useState<AuthI>(initialState)

  const login = (token: string) => {
    const tokenDecoded: TokenDecodedI = jwtDecode(token)
    
    setToken(token);
    setAuthState((prev: AuthI) => ({...prev, token, userId: tokenDecoded.id}))
  }

  const authData: AuthContextI = useMemo(() => ({
    auth: authState,
    login,
    logout: () => null,
    setReloadUser:  () => null
  }), [])

  return (
    <AuthContext.Provider value={authData}>
      <Component {...pageProps} />
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </AuthContext.Provider>
  );
}
