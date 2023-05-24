import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

const generateRandomInteger = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    
    if (rndNum == exclude) {
         (min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100
const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomInteger(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    
    const nextGuessHandler = (direction) => {
        if((direction == 'lower' && currentGuess < userNumber) || (direction == 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie", 'You know that this is wrong...', [
                {text: 'Sorry!', style: 'cancel'}
            ]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newGuess = generateRandomInteger(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newGuess)
    }

    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver()
        }
    }, [currentGuess, userNumber]);

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                </View>
                
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
        paddingVertical: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})