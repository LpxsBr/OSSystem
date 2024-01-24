import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AuthContext from "../../contexts/auth";
import { useContext, useState } from "react";


export default function SignIn({auth}) {

    const { signIn, authSignIn } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handle = () => authSignIn({
        email,
        password
    })

    console.log({email, password});

    return (
        <View style={loginScreenStyles.container}>
            <Text>
                SignIn screen
            </Text>
            <TextInput onChangeText={text=>setEmail(text)} placeholder="Email" style={loginScreenStyles.login_container_input}/>
            <TextInput onChangeText={text=>setPassword(text)} placeholder="Senha" style={loginScreenStyles.login_container_input}/>
            <Button title="Entrar" style={loginScreenStyles.login_button} onPress={handle}/>
        </View>
    )
}

const loginScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        gap: 10
    },

    containerView: {
        flex: 1,
        paddingVertical: 20,
        height: 200
    },

    container_title: {
        fontSize: 15
    },

    login_container_input:{
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 6,
        width: 200,
        height: 40,
        paddingHorizontal: 10
    },

    login_button:{
        width: 200
    }

});