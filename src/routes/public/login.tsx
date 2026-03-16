import React, { useEffect, useState } from 'react';
import { Button, Text, useTheme } from '@rneui/themed';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { InputWithIcon } from '../../../component/InputWithIcon';
import { APPSTATE, useAppContext } from '../../app';
import { showErrorToast, showSuccessToast, toastConfig } from '../../lib/toast';
import { useLogin } from '../../hooks/useLogin';
import { validateEmail, validatePassword } from '../../helper';
import { useMutation } from '@tanstack/react-query';
import { loginApi } from '../../services/authApi';



export const LoginScreen = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const navigation = useNavigation()
    const { setAppState } = useAppContext()

    const handleChange = (name: string, value: string) => {
        setFormData(priv => ({ ...priv, [name]: value }))
    }

    const mutation = useMutation({
        mutationFn: loginApi,
        onSuccess: async (data) => {
            setAppState(APPSTATE.PRIVATE);
        },
        onError: (error) => {
            console.log(
                error || 'Login failed'
            );
        },
    });


    const handleLoginPress = async () => {
        if (validateEmail(formData.email) &&
            validatePassword(formData.password)) {
            const response = mutation.mutate({
                email: formData.email,
                password: formData.password
            });
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/bg.jpg')}
                style={styles.imgbg}
            >
                <View style={styles.card}>
                    <Text style={styles.heading}>Login</Text>
                    <Text style={styles.sub_heading}>Welcome back! Please login to your account.</Text>

                    <InputWithIcon
                        placeholder='Email'
                        icon={<MaterialIcon name='mail-outline' size={37} color={'#583DB0'} />}
                        value={formData.email}
                        handleChange={handleChange}
                        name={'email'}
                    />

                    <InputWithIcon
                        placeholder='Password'
                        icon={<MaterialIcon name='lock-outline' size={37} color={'#583DB0'} />}
                        value={formData.password}
                        handleChange={handleChange}
                        name={'password'}
                    />

                    <Text style={styles.forgotPassLable}>Forgot Password?</Text>

                    <Button
                        title="Log In"
                        size="sm"
                        containerStyle={{
                            backgroundColor: '#1BD7D6',
                            marginVertical: 10
                        }}
                        buttonStyle={{
                            backgroundColor: '#1BD7D6',
                            paddingVertical: 7,
                            borderRadius: 10,
                        }}
                        titleStyle={{
                            fontSize: 20,
                            fontWeight: '700',
                            letterSpacing: 1.2
                        }}
                        onPress={handleLoginPress}
                    />

                    <Text style={styles.outerDontHv}>
                        Don't have an account?
                        <Text
                            style={styles.dontHvAcc}
                            onPress={() => navigation.navigate('register')}
                        >
                            {' '}Register
                        </Text>
                    </Text>


                </View>
            </ImageBackground>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgbg: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 20,
        paddingHorizontal: 30,
        paddingVertical: 30,
        marginHorizontal: 15,
        // iOS Shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 4,

        // Android Shadow
        elevation: 5,
    },
    heading: {
        color: '#6848B0',
        // fontWeight: '700',
        letterSpacing: 1.1,
        textAlign: 'center',
        fontSize: 36,
        fontFamily: 'Poppins-Bold'
    },
    sub_heading: {
        fontFamily: 'Poppins-Regular',
        color: '#583DB0',
        letterSpacing: 1.1,
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        marginVertical: 10
    },
    forgotPassLable: {
        textAlign: 'right',
        fontFamily: 'Poppins-Regular',
        color: '#583DB0',
        marginVertical: 10
    },
    outerDontHv: {
        textAlign: 'center',
        marginVertical: 10,
        letterSpacing: 1.1,
        color: '#583DB0',
    },
    dontHvAcc: {
        color: '#1BD7D6',
        fontWeight: '700',
        letterSpacing: 1.1,
    }
})
