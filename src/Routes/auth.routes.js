import { createNativeStackNavigator }       from "@react-navigation/native-stack";
import Demands                              from "../Screens/Demands";
import OSRegistration                       from "../Screens/OSRegistration";


const Stack = createNativeStackNavigator()

export default function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Demands"
                component={Demands}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="OSRegistration"
                component={OSRegistration}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}