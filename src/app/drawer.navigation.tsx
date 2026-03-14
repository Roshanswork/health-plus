import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerScreen } from "../routes/drawer";
import { Text, View } from "react-native";
import { Button } from "@rneui/themed";
import { Home } from "../routes/private/services/Services";
import { PrivateStack } from "./private.navigation";



const Drawer = createDrawerNavigator();

export const AppDrawerNavigator = () => {

    const DrawerComponent = () => {
        return <DrawerScreen />
    }

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}
            drawerContent={DrawerComponent}
        >
            <Drawer.Screen name={"privatestack"} component={PrivateStack} />
        </Drawer.Navigator>
    )
}

