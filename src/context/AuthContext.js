import { createContext, useEffect, useState, useContext } from "react";


const AuthContext = createContext({});
const AuthContextProvider = ({ children }) => {
    const [userName, setUserName] = useState(null);
    const [email,setEmail] = useState(null);
    const [userId, setUserId ] = useState(null);

    return(
        <AuthContext.Provider value={{ email, setEmail, userName, setUserName, userId, setUserId }}>
            {children}
        </AuthContext.Provider>
    );


}

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);