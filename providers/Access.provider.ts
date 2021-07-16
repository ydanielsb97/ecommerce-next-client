import axios from 'axios';
import { API_BASE_URL } from '../config/env.const';
import { SignUpDataI } from '../interfaces/SignUpData.interface';

export const postSignUp = async (formData: SignUpDataI) => {

    return await axios.post(`${API_BASE_URL}/auth/local/register`, formData)
    .then(x => {
        return {data: x.data}
    })
    .catch(err => {
        return({error: err.response.data.message[0].messages[0].message})
    })

    

}