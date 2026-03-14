import { Image, Pressable, Text, View, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Header } from "../../../../component/Header"
import { ImageBackgoundWrapper } from "../../../../component/ImageBackgroundWrapper"


export default ({ navigation }: { navigation: any }) => {
    return <View style={styles.container}>
        <ImageBackgoundWrapper>
            <Header />
            <View style={styles.profileCont}>
                <Image source={require('../../../assets/person.jpg')}
                    style={styles.profileImage} />
            </View>
            <Text style={styles.textHead}>Personal Information</Text>
            <View style={styles.infoCont}>
                <Text style={styles.text}>Name</Text>
                <Text style={styles.text}>Email</Text>
                <Text style={styles.text}>Phone</Text>
                <Text style={styles.text}>Gender</Text>
            </View>
            <Text style={styles.textHead}>Appointment Information</Text>
            <View style={styles.infoCont}>
                <Text style={styles.text}>Appointment Date</Text>
                <Text style={styles.text}>Appointment Time</Text>
                <Text style={styles.text}>Appointment Doctor</Text>
            </View>
        </ImageBackgoundWrapper>

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileCont: {
        marginTop: 20,
        width: 150,
        height: 150,
        alignSelf: 'center',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#d3d3d3',
        overflow: 'hidden',
    },
    profileImage: {
        width: 150,
        height: 150,
        objectFit: 'cover'
    },
    textHead: {
        fontSize: 16,
        marginTop: 20,
        fontFamily: 'Poppins-regular',
        marginLeft: 25
    },
    infoCont: {
        marginHorizontal: 20
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
        fontFamily: 'Poppins-Light',
        paddingHorizontal: 20,
        padding: 10,
        marginVertical: 10,
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
})