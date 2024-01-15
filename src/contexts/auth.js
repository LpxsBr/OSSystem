import { createContext, useState }  from "react";
import SignIn                       from "../Services/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({
    signIn: false,
    token: '',
    user: {},
    authSignIn: () => { },
    authSignOut: () => { }
});

export function AuthProvider({ children }) {

    const [user, setUser] = useState(Object ?? null)

    function authSignIn({email, password}){
        const response = SignIn({email, password});

        if(response){
            console.log(response)
        }else{
            console.log('deu rum');
        }
        
    }

    function authSignOut(){
        console.log('logged out');
        return('logged out')
    }

    return (
        <AuthContext.Provider value={{
            authSignIn,
            authSignOut,
            user,
            signIn: !!user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;