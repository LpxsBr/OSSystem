import { createNativeStackNavigator }       from "@react-navigation/native-stack";
import SignIn                               from "../Screens/Login";


const Stack = createNativeStackNavigator()

export default function GenerealRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}