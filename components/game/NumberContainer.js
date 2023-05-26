import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import { useWindowDimensions } from 'react-native';


const NumberContainer = ({ children }) => {
    const { styles } = useStyle();

    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const useStyle = () => {
    const { deviceHeight, deviceWidth } = useWindowDimensions();
    print(deviceWidth)
    styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
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
    });
    return { styles }
}