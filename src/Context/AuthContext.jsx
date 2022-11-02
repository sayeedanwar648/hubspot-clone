import React, { createContext, useState } from "react";


export  const  AuthContext = createContext()

const AuthContextProvider = ({children}) => {

  const [authState,setState] = useState({isAuth:false,token:null})

    const logIn = (token) => {
        setState({isAuth:true,token:token})
    }

    const logOut = ()=> {
        setState({isAuth:false,token:null})
    }
  return <AuthContext.Provider value={{authState,logIn,logOut}}>
 {children}   
  </AuthContext.Provider>
};
export default AuthContextProvider