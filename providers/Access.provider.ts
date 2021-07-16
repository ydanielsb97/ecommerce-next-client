import axios from 'axios';
import { API_BASE_URL } from '../config/env.const';
import { SignUpDataI } from '../interfaces/SignUpData.interface';

export const postSignUp = async(formData: SignUpDataI) => {

    const res = await axios.post(`${API_BASE_URL}/auth/local/register`, formData);

    console.log(res)

}