import { TOKEN } from "../config/env.const"

export const setToken = (token: string) => {
    localStorage.setItem(TOKEN, token)
}