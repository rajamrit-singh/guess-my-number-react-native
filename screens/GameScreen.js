import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { AntDesign } from '@expo/vector-icons';
import Colors from "../constants/colors";

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
const GameScreen = ({ userNumber, onGameOver, setRoundsNumber }) => {
    const initialGuess = generateRandomInteger(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    const nextGuessHandler = (direction) => {
        if ((direction == 'lower' && currentGuess < userNumber) || (direction == 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie", 'You know that this is wrong...', [
                { text: 'Sorry!', style: 'cancel' }
            ]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newGuess = generateRandomInteger(minBoundary, maxBoundary, currentGuess);
        setRoundsNumber(rounds => rounds + 1);
        setCurrentGuess(newGuess);
        setGuessRounds(guessRounds => [...guessRounds, newGuess]);
    }

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
            minBoundary = 1;
            maxBoundary = 100;
        }
    }, [currentGuess, userNumber]);

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}><AntDesign name="plus" size={24} color="white" /></PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}><AntDesign name="minus" size={24} color="white" /></PrimaryButton>
                    </View>
                </View>

            </Card>
            <View style={styles.logRoundsContainer}>
                    <FlatList
                        data={guessRounds}
                        renderItem={( itemData ) => {
                            return (
                                <View style={styles.logContainer}>
                                    <Text>#{itemData.index + 1}</Text>
                                    <Text>Opponent's guess: {itemData.item}</Text>
                                </View>
                            )
                          }}
                        keyExtractor={item => item}
                    />
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
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12
    },
    logRoundsContainer: {
        flex: 1,
    },
    logs: {
        margin: 2,
        fontSize: 24,
        color: Colors.accent500
    },
    logContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: Colors.accent500,
        borderWidth: 1,
        borderRadius: 16,
        padding: 12,
        marginVertical: 8,
    }
})