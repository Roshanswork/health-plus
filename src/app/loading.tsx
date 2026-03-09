import React, { useEffect } from "react";
import { APPSTATE, useAppContext } from ".";
import { View, ActivityIndicator, Text } from 'react-native'

export const LoadingScreen = () => {

    const { setAppState }: any = useAppContext();
    useEffect(() => {
        setAppState(APPSTATE.PRIVATE);
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size={'large'} color={'#000'} />
            <Text style={{
                textAlign: 'center',
                fontSize: 17,
                fontWeight: '700',
                marginTop: 15
            }}>Loading...</Text>
            <View
                style={{
                    justifyContent: 'flex-end',
                    alignContent: 'center',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}>
            </View>
        </View>
    );
}