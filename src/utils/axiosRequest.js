import axios from 'axios'
import Cookie from 'universal-cookie'

const cookies = new Cookie()
const baseURL = process.env.REACT_APP_BASE_URL

export const axiosRequest = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: cookies.get("loginID"),
  },
});