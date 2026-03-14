import { Text, View, ImageBackground, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button } from "@rneui/themed";

type LandingPageProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Landing">;
};

type RootStackParamList = {
    Landing: undefined;
    login: undefined;
    register: undefined
};

export default function LandingPage({ navigation }: LandingPageProps): React.JSX.Element {

    const handleLoginPress = () => {
        navigation.navigate('login')
        console.log('clicked')
    }
    const handleCreatPress = () => {
        navigation.navigate('register')
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/bg.jpg')}
                resizeMode='cover'
                style={styles.bg}
            >
                <Text style={styles.textHeading}>Find a Medical Service</Text>
                <View style={styles.buttonsContainer}>
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

                    <Button
                        title="Creat Account"
                        size="sm"
                        containerStyle={{
                            backgroundColor: '#1BD7D6',
                            marginVertical: 10,
                            paddingHorizontal: 40
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
                        onPress={handleCreatPress}
                    />
                </View>
            </ImageBackground>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 20
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 70
    },
    textHeading: {
        color: '#ffffff',
        fontFamily: 'Poppins-Bold',
        fontSize: 55,
        textAlign: 'center',
        letterSpacing: 2
    }

})

