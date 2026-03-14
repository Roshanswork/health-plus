import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Services } from "../routes/private/services/Services"
import { useTheme } from "@rneui/themed"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Appointments from "../routes/private/appointments/Appointments";
import { StyleSheet, View } from "react-native";
import Profile from "../routes/private/profile/Profile";
import ChatWebSocketExample from "../routes/private/chat/Chat";


const Tab = createBottomTabNavigator()

export const MainTabsNavigator = () => {

    const { theme } = useTheme();

    return (

        <Tab.Navigator
            screenOptions={{
                headerTintColor: theme.colors.background,
                tabBarActiveBackgroundColor: '#583DB0',
                tabBarInactiveBackgroundColor: '#ab96f0',
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#d3d3d3',
                headerShown: false,
                tabBarBadgeStyle: {
                    backgroundColor: 'red',
                },
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 10,
                    marginHorizontal: 80,
                    marginVertical: 10,
                    borderRadius: 25,
                    // iOS Shadow
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    // Android Shadow
                    elevation: 5,
                },

            }}
        >
            <Tab.Screen
                name="services"
                component={Services}
                options={{
                    tabBarLabel: 'Services',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcon name='apartment' size={27} color={'#fff'} />
                    ),
                }}
            />

            <Tab.Screen
                name="appointments"
                component={Appointments}
                options={{
                    tabBarLabel: 'Appointments',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcon name='calendar-today' size={27} color={'#fff'} />
                    ),
                }}
            />

            <Tab.Screen
                name="chat"
                component={ChatWebSocketExample}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcon name='chat' size={27} color={'#fff'} />
                    ),
                }}
            />

            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcon name='person-outline' size={27} color={'#fff'} />
                    ),
                }}
            />
        </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'red',
        height: 40
    }
})