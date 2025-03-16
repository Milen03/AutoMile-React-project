import { request } from "../utils/request.js"

const baseUrl = `http://localhost:3030/users`

export const register = async (email, password) => request('POST', `${baseUrl}/register`, { email, password })


export const login = async (email, password) => request('POST', `${baseUrl}/login`, { email, password })


export const logout=()=>request('GET',`${baseUrl}/logout`)