import { useNavigation } from "@react-navigation/native"
import { Button } from "@rneui/themed"
import { ImageBackground, StyleSheet, Text, View } from "react-native"
import { Header } from "../../../../component/Header"
import { HeadingLable } from "../../../../component/HeadingLable"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { ImageBackgoundWrapper } from "../../../../component/ImageBackgroundWrapper"
import Welcome from "../../../../component/Welcome"


const cards = [
    {
        name: 'Emergency',
        icon: 'local-hospital'
    },
    {
        name: 'Find a Doctor',
        icon: 'conditions'
    },
    {
        name: 'Health Care',
        icon: 'health-metrics'
    },
    {
        name: 'Checkup',
        icon: 'stethoscope'
    },
    {
        name: 'Immunization',
        icon: 'vaccines'
    },
    {
        name: 'Find a Doctor',
        icon: 'search'
    }
]

export const Services = () => {


    return (
        <View style={styles.container}>
            <ImageBackgoundWrapper >
                <Header />
                <Welcome />
                {/* <HeadingLable text="Services" /> */}

                <View style={styles.cardContainer}>
                    {
                        cards.map((item, index) => {
                            return (
                                <View style={styles.card} key={index}>
                                    <MaterialIcon name={item.icon} size={87} color={'#583DB0'} />
                                    <Text style={styles.cardLable}>{item.name}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </ImageBackgoundWrapper>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        // iOS Shadow
        shadowColor: '#583DB0', //'#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        // Android Shadow
        elevation: 5,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 15
    },
    cardLable: {
        color: '#583DB0',
        fontFamily: 'Poppins-Bold',
        letterSpacing: 1,
        fontSize: 18
    }
})