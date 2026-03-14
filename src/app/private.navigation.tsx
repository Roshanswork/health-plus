import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { Home } from "../routes/private/services/Services";
import { MainTabsNavigator } from "./bottom.tabs.navigation";



const Stack = createNativeStackNavigator()

export const PrivateStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>

            <Stack.Screen name={'bottomtabs'} component={MainTabsNavigator} />
        </Stack.Navigator>
    )
}

