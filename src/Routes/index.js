import { createNativeStackNavigator }       from "@react-navigation/native-stack";
import { useContext, useState }                         from "react";
import AuthRoutes                           from "./auth.routes";
import GenerealRoutes                           from "./general.routes";
import { Button } from "react-native";
import AuthContext from "../contexts/auth";


const Stack = createNativeStackNavigator()

export default function Routes(){

    const { signIn } = useContext(AuthContext)

    return(
        <>
            {signIn && <AuthRoutes/>}
            {!signIn && <GenerealRoutes/>}
        </>
    )
}