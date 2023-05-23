import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
    const [guessedNumber, setGuessedNumber] = useState();

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <View>
                <Text>Higher or lower?</Text>
            </View>
            <View>
                <Text>Log Rounds</Text>
            </View>
        </View>

    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 20
    },
})