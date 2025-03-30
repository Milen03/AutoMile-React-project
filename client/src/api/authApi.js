import { useContext, useEffect } from "react"
import request from "../utils/request.js"
import { UserContext } from "../context/userContext.js"


const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/users`

export const useLogin = () => {
    const login = async (email, password) => {
      try {
        const result = await request.post(`${baseUrl}/login`, { email, password });
        return result;
      } catch (error) {
        alert("Login failed: " + error.message);
      }
    };
  
    return {
      login,
    };
  };
export const useRegister = () =>{

    const register = async(email,password)=>{
        try{
            const result = await request.post(`${baseUrl}/register`,{email,password})
            return result
        }catch(error){
            alert("Registration failed: " + error.message);
        }
        
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


