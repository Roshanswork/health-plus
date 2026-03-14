import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export const Header = ({ showBack = false }) => {

    const navigation = useNavigation()

    const handlePressMenu = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.container}>
            {showBack &&
                <MaterialIcon name='chevron-left' size={47} color={'#583DB0'} />}
            <MaterialIcon name='menu' size={47} color={'#583DB0'}
                onPress={handlePressMenu}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        // iOS Shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        // Android Shadow
        elevation: 5,
        height: 60
    }
})