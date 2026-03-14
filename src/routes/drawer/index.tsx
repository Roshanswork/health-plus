import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, View, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Avatar, Icon, ListItem, Text, useTheme } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { Divider, ScreenHeight, ScreenWidth } from '@rneui/base';


export const DrawerScreen = () => {
    const { theme } = useTheme();
    const navigation = useNavigation();

    return (
        <View
            style={{ flex: 1, borderTopRightRadius: 100, backgroundColor: 'white' }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ paddingVertical: 10, flex: 1 }}>
                    {/* <SessionView />
          <Divider /> */}
                    <RowItem
                        name="home"
                        origin={'antdesign'}
                        value="HOME"
                    // onPress={() => DrawerNavigation(ROUTES.HOME, {}, navigation)}
                    // color={theme.colors.primary}
                    />
                    <Divider />

                    <RowItem
                        name="logout"
                        origin={'antdesign'}
                        value="logout"
                        // onPress={() => logoutAction()}
                        color={theme.colors.error}
                    />
                    <Divider />
                    <VersionBox />
                </View>
            </ScrollView>
        </View>
    );
};

const VersionBox = () => {
    const { theme } = useTheme();
    return (
        <View style={{ flex: 1, justifyContent: 'flex-end', padding: 30 }}>
            <Text>Version - 1.0</Text>
        </View>
    );
};

const RowItem = ({ name, onPress, origin, color, value }: any) => {
    const { theme } = useTheme();

    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style={{
                    flexDirection: 'row',
                    padding: 16,
                }}>
                <Text
                    style={{
                        paddingLeft: 24,
                        letterSpacing: 1,
                        color: color || 'black',
                    }}>
                </Text>
            </View>
        </TouchableOpacity>
    );
};



function DrawerNavigation(path: any, props: any, navigation: any) {
    navigation.navigate(path, props);
}

const styles = StyleSheet.create({
    topView: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: ScreenHeight / 3,
    },
    image: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 99,
    },
    imageWrap: {
        width: ScreenWidth / 2,
        aspectRatio: 1,
        padding: 2,
        backgroundColor: 'white',
    },
});
