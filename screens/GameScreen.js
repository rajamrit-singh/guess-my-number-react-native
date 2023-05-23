import { useState } from "react";
import { View, Text } from "react-native";

const GameScreen = () => {
    const [guessedNumber, setGuessedNumber] = useState();

    return (
        <View>
            <Text>Opponent's Guess</Text>
        </View>
    )
}

export default GameScreen;