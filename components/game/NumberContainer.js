import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        borderRadius: 24,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        textAlign: 'center',
        fontSize: 36,
        color: Colors.accent500,
        fontFamily: 'open-sans-bold',
    }
})