import { View, Text, StyleSheet } from "react-native"

export default () => {

    const getGreeting = () => {
        const hours = new Date().getHours();

        if (hours >= 5 && hours < 12) {
            return "Good Morning";
        } else if (hours >= 12 && hours < 17) {
            return "Good Afternoon";
        } else if (hours >= 17 && hours < 21) {
            return "Good Evening";
        } else {
            return "Good Night";
        }
    };


    return <View style={styles.container}>
        <Text style={styles.text}>Welcome Roshan,</Text>
        <Text style={styles.text}>{getGreeting() + '!'}  </Text>
        <Text style={styles.subText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dig</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 20
    },
    text: {
        fontSize: 26,
        color: '#583DB0',
        fontFamily: 'Poppins-Black'
    },
    subText: {
        fontSize: 16,
        color: '#583DB0',
        fontFamily: 'Poppins-Bold',
        marginTop: 10
    }
})