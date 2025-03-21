import { useContext } from "react";
import { UserContext } from "../context/userContext.js";
import request from "../utils/request.js";

export default function useAuth() {
    const authData = useContext(UserContext)

    const requestWrapper = (method,url,data,option = {}) => {
        const optionWrapper = {
            ...option,
            headers:{
                 'X-Authorization':authData.accessToken,
                 ...option.headers
            }
           

        }
        return request.baseRequest(method,url, data, optionWrapper)
    }

   return{
    ...authData,
    request: {
        get: requestWrapper.bind(null, 'GET'),
    post: requestWrapper.bind(null, 'POST'),
    put: requestWrapper.bind(null, 'PUT'),
    delete: requestWrapper.bind(null, 'DELETE'),
    }
   }
}