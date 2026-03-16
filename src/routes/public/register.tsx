

import React, { useEffect, useState } from 'react';
import { Button, Text, useTheme } from '@rneui/themed';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { defaultTheme } from '../../theme';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { InputWithIcon } from '../../../component/InputWithIcon';
import { useRegister } from '../../hooks/useRegister'
import { APPSTATE, useAppContext } from '../../app';
import { showErrorToast, showSuccessToast, toastConfig } from '../../lib/toast';
import { validateEmail, validatePassword } from '../../helper';


export const RegisterScreen = () => {

    const navigation = useNavigation()
    const { mutate: register, isPending } = useRegister()
    const { setAppState } = useAppContext()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        dob: '',
        password: ''
    })

    const handleChange = (name: string, value: string) => {
        setFormData(priv => ({ ...priv, [name]: value }))
    }

    console.log({ formData })

    const handleRegister = () => {
        try {
            register(formData)
            setAppState(APPSTATE.PRIVATE)
            showSuccessToast('Looged in successfull!', toastConfig)
        } catch (error) {
            console.log('Error:', error)
        }
    }

    const handleValidation = () => {
        if (!formData.name) {
            showErrorToast('Please provide a name.')
            return
        }
        else if (!formData.email) {
            showErrorToast('Please provide an email.')
            return
        }
        else if (!formData.dob) {
            showErrorToast('Please provide a DOB')
            return
        }
        else if (!formData.mobile) {
            showErrorToast('Please provide a mobile number.')
            return
        }
        else if (!formData.password) {
            showErrorToast('Please enter a password!')
            return
        }
        else {
            if (validateEmail(formData.email) && validatePassword(formData.password)) {
                handleRegister()
            }
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/bg.jpg')}
                style={styles.imgbg}
            >
                <View style={styles.card}>
                    <Text style={styles.heading}>Register</Text>
                    <Text style={styles.sub_heading}>Create an account to find the
                        {' '} <Text style={styles.sub_heading_bold}>medical services!</Text>
                    </Text>

                    <InputWithIcon
                        placeholder='Full Name'
                        icon={<MaterialIcon name='person-outline' size={37} color={'#795cd8'} />}
                        value={formData.name}
                        name='name'
                        handleChange={handleChange}
                    />

                    <InputWithIcon
                        placeholder='Email'
                        icon={<MaterialIcon name='mail-outline' size={37} color={'#795cd8'} />}
                        value={formData.email}
                        name='email'
                        handleChange={handleChange}
                    />

                    <InputWithIcon
                        placeholder='Phone Number'
                        icon={<MaterialIcon name='smartphone' size={37} color={'#795cd8'} />}
                        value={formData.mobile}
                        name='mobile'
                        handleChange={handleChange}
                    />

                    <InputWithIcon
                        placeholder='Date of Birth   DD/MM/YYYY'
                        icon={<MaterialIcon name='calendar-today' size={37} color={'#795cd8'} />}
                        value={formData.dob}
                        name='dob'
                        handleChange={handleChange}
                    />

                    <InputWithIcon
                        placeholder='Password'
                        icon={<MaterialIcon name='lock-outline' size={37} color={'#795cd8'} />}
                        value={formData.password}
                        name='password'
                        handleChange={handleChange}
                    />

                    <Button
                        title="Register"
                        size="sm"
                        containerStyle={{
                            backgroundColor: '#1BD7D6',
                            marginVertical: 20
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
                        onPress={handleValidation}
                    />

                    <Text style={styles.outerDontHv}>
                        Already have an account?
                        <Text
                            style={styles.dontHvAcc}
                            onPress={() => navigation.navigate('login')}
                        >
                            {' '}Login
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
    sub_heading_bold: {
        fontFamily: 'Poppins-Medium',
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
