import axios from 'axios';
import { API_BASE_URL } from '../config/env.const';
import { LogInDataI } from '../interfaces/LogInData.interface';
import { SignUpDataI } from '../interfaces/SignUpData.interface';

export const postSignUp = async (formData: SignUpDataI) => {
    try {
        return await axios.post(`${API_BASE_URL}/auth/local/register`, formData)
        .then(x => {
            if (!x) return {error: "An error has ocurred"}
            return {data: x.data}
        })
        .catch(err => {
            return({error: err.response.data.message[0].messages[0].message})
        })
    } catch (error) {
        return {error}
    }

}

export const postLogIn = async (data: LogInDataI) => {

    try {
        return await axios.post(`${API_BASE_URL}/auth/local`, data)
        .then(x => {
            return({data: x.data})
        })
        .catch(err => {
            console.log(err.response)
            return({error: "Invalid email or password"})
        })

    } catch (error) {
        return {error}
    }

}


