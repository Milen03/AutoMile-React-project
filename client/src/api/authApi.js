import { useContext, useEffect } from "react"
import request from "../utils/request.js"
import { UserContext } from "../context/userContext.js"

const baseUrl = 'http://localhost:3030/users'

export const useLogin = () =>{

    const login = async (email,password) =>{
    const result =  await request.post(`${baseUrl}/login`,{email,password})

    return result
    }

    return{
        login,
    }   
}
export const useRegister = () =>{

    const register = async(email,password)=>{
        const result = await request.post(`${baseUrl}/register`,{email,password})

        return result
    }

    return{
        register
    }
}

export const useLogout = () =>{
    const {accessToken , userLogoutHandeler} = useContext(UserContext)


    useEffect(() =>{
        if(!accessToken){
            return
        }
        const option = {
            headers: {
                'X-Authorization': accessToken
            }
        };

     request.get(`${baseUrl}/logout`,null,option)
     .then(userLogoutHandeler({}));
    
    },[accessToken,userLogoutHandeler])
     
return {
    isLoggedOut: !!accessToken,
}
}

