import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useWindowDimensions } from 'react-native';

const GameOverScreen = ({ roundsNumber, userNumber, onGameRestart }) => {
    const { styles } = useStyle();

    return (
        <View style={styles.rootContainer}>
            <Title>Game over</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/success.png')}></Image>
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.</Text>
            <PrimaryButton onPress={onGameRestart}>Start new Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const useStyle = () => {
    const { height, width } = useWindowDimensions();
    const styles = StyleSheet.create({
        rootContainer: {
            flex: 1,
            padding: 24,
            justifyContent: 'center',
            alignItems: 'center'
        },
        imageContainer: {
            width: width < 400 ? 150: 300,
            height: width < 400 ? 150: 300,
            borderRadius: width < 400 ? 75: 150,
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
            textAlign: 'center'
        },
        highlight: {
            fontFamily: 'open-sans-bold',
            color: Colors.primary500
        }
    })
        return { styles }
}
