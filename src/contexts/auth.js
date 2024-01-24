import { createContext, useState }  from "react";
import SignIn                       from "../Services/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({
    signIn: true,
    token: '',
    user: {},
    authSignIn: () => { },
    authSignOut: () => { }
});

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

    async function authSignIn({email, password}){
        try {
            var response = await SignIn({email, password})
            setUser(response.data)

            await AsyncStorage.setItem('data_app_OS', JSON.stringify({
                token:  user.token,
                user:   user.user
            }))

            console.log(await AsyncStorage.getItem('data_app_OS')); 
        } catch (error) {
            console.log(error)
        }
        console.log(user);
    }

    async   function authSignOut(){
        await AsyncStorage.removeItem('data_app_OS')
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{
            authSignIn,
            authSignOut,
            user,
            signIn: !user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;