import { createContext } from "react";

export const UserContext = createContext({
    _id: '',
    email: '',
    username: '',
    accessToken:'',
    userLoginHandeler: () => null,
    userLogoutHandeler: () => null,
    usePersistedState : () => null,

})