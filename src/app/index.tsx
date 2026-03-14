import { useQueryClient } from '@tanstack/react-query';
import React, { useContext, useMemo, useState } from 'react';
import { createMMKV } from 'react-native-mmkv'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoadingScreen } from './loading';
import { PublicStack } from './public.navigation';
import { AppDrawerNavigator } from './drawer.navigation';
import { defaultTheme } from '../theme';


export const storage = createMMKV()
const AppContext = React.createContext({});

export const APPSTATE = {
    LOADING: 'LOADING',
    PUBLIC: 'PUBLIC',
    PRIVATE: 'PRIVATE',
};

export const useAppContext = () => {
    return useContext<any>(AppContext);
};

export const AppProvider = () => {
    const [appState, setAppState] = useState<any>(APPSTATE.PUBLIC);

    const contextValue = useMemo(() => {
        return {
            appState,
            setAppState
        }
    }, [
        appState,
        setAppState
    ])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: defaultTheme.lightColors?.background }}>
            <AppContext.Provider value={contextValue}>
                {appState === APPSTATE.PUBLIC ? <PublicStack /> :
                    appState === APPSTATE.PRIVATE ? <AppDrawerNavigator /> :
                        <LoadingScreen />
                }
            </AppContext.Provider>
        </SafeAreaView>
    )
}