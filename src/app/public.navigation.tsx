import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from '../routes/public/login'
import { RegisterScreen } from '../routes/public/register'



const Stack = createNativeStackNavigator()

export const PublicStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}
