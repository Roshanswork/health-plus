import { View, Text, Pressable, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import AppointmentHistory from "./AppointmentHistory"
import { ImageBackgoundWrapper } from "../../../../component/ImageBackgroundWrapper"


export default ({ navigation }: { navigation: any }) => {
    return <View style={styles.container}>
        <ImageBackgoundWrapper >
            <Pressable onPress={() => navigation.goBack()}>
                <Icon name={'arrow-back'} size={30} color={'#6848B0'} />
            </Pressable>
            <View style={styles.appointmentCont}>
                <Icon name={'calendar-month'} size={30} color={'#6848B0'} />
                <View style={styles.appointmentStatusCont}>
                    <Text style={styles.appointmentStatusText}>Pending</Text>
                </View>
                <View style={styles.appointmentBookedCont}>
                    <Text style={styles.appointmentStatusText}>Booked Appointment</Text>
                </View>
                <View style={styles.appointmentTextCont}>
                    <Text style={styles.appointmentText}>John Doe</Text>
                    <Text style={styles.appointmentText}>Cardiologist</Text>
                </View>
                <View style={styles.appointmentTextCont}>
                    <Text style={styles.appointmentText}>5 Feb 2025</Text>
                    <Text style={styles.appointmentText}>6:00 PM</Text>
                </View>
            </View>

            <AppointmentHistory />
        </ImageBackgoundWrapper>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    appointmentCont: {
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: '#fff',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 45
    },
    appointmentTextCont: {
        marginLeft: 20
    },
    appointmentText: {
        fontSize: 16,
        fontFamily: 'Poppins-Light',
        color: '#000'
    },
    appointmentStatusCont: {
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: '#FFECB3',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    appointmentStatusText: {
        fontSize: 16,
        fontFamily: 'Poppins-BoldItalic',
        color: '#000'
    },
    appointmentBookedCont: {
        position: 'absolute',
        left: 0,
        top: 0,
        padding: 10

    }
})