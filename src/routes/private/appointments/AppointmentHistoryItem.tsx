import { View, Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"


export default ({ item }: { item: any }) => {

    return <View style={styles.container}>
        <View>
            <Text style={styles.text}>{item.item.doctor}</Text>
            <Text style={[styles.text, {
                color: '#6848B0',
                fontSize: 17,
                fontFamily: 'Poppins-Medium'
            }]}>Done</Text>
        </View>
        <View>
            <View style={styles.timeCont}>
                <Icon name={'schedule'} size={20} color={'#6848B0'} />
                <Text style={styles.text}>{item.item.time} PM</Text>
            </View>
            <View style={styles.timeCont}>
                <Icon name={'calendar-month'} size={20} color={'#6848B0'} />
                <Text style={styles.text}>{item.item.date}</Text>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Poppins-Light',
        fontSize: 16,
        color: '#000',
    },
    timeCont: {
        flexDirection: 'row',
        gap: 10
    }
})