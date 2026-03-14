import { View, Text, StyleSheet, FlatList } from "react-native"
import AppointmentHistoryItem from "./AppointmentHistoryItem"
import { appointmentData } from "../../../lib/constants"


export default () => {
    return <View style={styles.container}>
        <Text style={styles.appointmentHistoryText}>Appointment History</Text>
        <View style={styles.appointmentHistoryCont}>
            <FlatList
                data={appointmentData}
                renderItem={(item) =>
                    <AppointmentHistoryItem item={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 10
    },
    appointmentHistoryText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#000',
        marginVertical: 10
    },
    appointmentHistoryCont: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    }
})