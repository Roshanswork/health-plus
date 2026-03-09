import { useQueryClient } from '@tanstack/react-query';
import React, { useContext, useMemo, useState } from 'react';
import { createMMKV } from 'react-native-mmkv'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoadingScreen } from './loading';
import { PublicStack } from './public.navigation';


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
    const queryClient = useQueryClient();

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
        <SafeAreaView style={{ flex: 1 }}>
            <AppContext.Provider value={contextValue}>
                {APPSTATE.PUBLIC ? <PublicStack /> : <LoadingScreen />}
            </AppContext.Provider>
        </SafeAreaView>
    )
}