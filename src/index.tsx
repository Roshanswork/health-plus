import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider, useThemeMode } from '@rneui/themed'
import { defaultTheme } from './theme'
import { toastConfig } from './lib/toast'
import Toast from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './app';


export const AppIndex = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider theme={defaultTheme}>
                <ThemeConsumer />
            </ThemeProvider>
            <Toast
                position="top"
                visibilityTime={2000}
                autoHide
                topOffset={40}
                config={toastConfig}
            />
        </GestureHandlerRootView>
    )
}

const ThemeConsumer = () => {

    const { mode, setMode } = useThemeMode();
    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: 2 } },
    });

    const colorKey = mode === 'dark' ? 'darkColors' : 'lightColors';

    const navigationColors = {
        primary: defaultTheme[colorKey]?.secondary || '#fafafa',
        background: defaultTheme[colorKey]?.background || '#fafafa',
        card: defaultTheme[colorKey]?.background || '#fafafa',
        text: defaultTheme[colorKey]?.black || '#fafafa',
        border: defaultTheme[colorKey]?.grey1 || '#fafafa',
        notification: defaultTheme[colorKey]?.warning || '#fafafa',
    };


    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <AppProvider />
            </NavigationContainer>
        </QueryClientProvider>
    )
}