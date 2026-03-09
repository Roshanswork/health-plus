import React, { useEffect, useState } from 'react';
import { Button, Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';



export const LoginScreen = () => {

    return (
        <View style={{ flex: 1, paddingHorizontal: 15, justifyContent: 'center' }}>

            <Text
                style={{
                    color: '#2A629A',
                    fontSize: 20,
                    fontWeight: '800',
                    textAlign: 'center',
                    marginTop: 10,
                }}>
                Login
            </Text>

        </View>
    );
};
