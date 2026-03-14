import React from "react";
import { StyleSheet, View } from "react-native"
import { Input } from "@rneui/themed"

export const InputWithIcon = ({ placeholder = 'Email', icon, value, handleChange, name }: any) => {
    return (
        <View style={styles.container}>
            <Input
                placeholder={placeholder}
                leftIcon={icon}
                placeholderTextColor={'#9980ed'}
                underlineColorAndroid={'#16D7D4'}
                inputContainerStyle={{
                    borderBottomWidth: 0,
                }}
                value={value}
                onChangeText={(text: string) => handleChange(name, text)}
                name={name}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 15,
        height: 70,
        paddingTop: 10,
        // iOS Shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 4,

        // Android Shadow
        elevation: 5,
        marginTop: 10
    }
})