import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const GameOverScreen = () => {
 return (
    <View style={styles.rootContainer}>
        <Title>Game over</Title>
        <View style={styles.imageContainer}>
        <Image source={require('../assets/images/success.png')}></Image>
        </View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>X</Text> rounds to guess the number <Text style={styles.highlight}>Y</Text>.</Text>
    </View>
 )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary500,
        overflow: 'hidden',
        margin: 36,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 24,
        fontFamily: 'open-sans',
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})