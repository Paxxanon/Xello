/* eslint-disable no-console */
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// const url = "http://localhost:8080";
interface RegisterUserData {
  email: string;
  username: string;
  login: string;
  password: string;

} 
export const registerUser = async (user: RegisterUserData) => {
  try {
    await axios.post(
      `http://localhost:8080/register`, 
      user);
    
  } catch (error) {
    console.log(error);
  }
  
  
}

export const loginUser = async () => {

}