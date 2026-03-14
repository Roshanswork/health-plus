import { StyleSheet, ImageBackground } from "react-native"

export const ImageBackgoundWrapper = ({ children }: any) => {
    return (
        <ImageBackground
            source={require('../src/assets/home-bg.jpg')}
            style={styles.imgbg}
        >
            {children}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imgbg: {
        flex: 1,
        padding: 15,
    }
})