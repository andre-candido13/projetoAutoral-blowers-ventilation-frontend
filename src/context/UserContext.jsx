import React from "react";
import { createContext } from "react";
import useLocalStorage from "../hooks/UseLocalStorage";


export const UserContext = createContext()

export const UserProvider = ({children})=>{
    const [userData, setUserData] = useLocalStorage({}, "userData")
    return <UserContext.Provider value={{ userData, setUserData}}>{children}</UserContext.Provider>  
}
