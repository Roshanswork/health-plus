import { StyleSheet, Text } from "react-native"

export const HeadingLable = ({ text = 'Heading' }) => {
    return (
        <Text style={styles.heading}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    heading: {
        color: '#6848B0',
        letterSpacing: 1,
        textAlign: 'center',
        fontSize: 27,
        fontFamily: 'Poppins-Bold',
        marginTop: 10
    }
})