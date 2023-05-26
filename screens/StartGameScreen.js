import { TextInput, View, StyleSheet, Alert, Text, useWindowDimensions } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
    const { styles } = useStyle();

    const [enteredNumber, setEnteredNumber] = useState('')

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    }

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if (chosenNumber <= 0 || isNaN(chosenNumber) || chosenNumber > 99) {
            Alert.alert('Invalid Number',
                'Please provide a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }, { text: ' Not Okay', style: 'destructive', onPress: resetInputHandler }]);
        }

        onPickNumber(chosenNumber);
    }
    return (
        <View style={styles.rootContainer}>
            <Title>Guess my number</Title>
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    value={enteredNumber}
                    onChangeText={numberInputHandler} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const useStyle = () => {
    const { height, width } = useWindowDimensions();
    const styles = StyleSheet.create({
        rootContainer: {
            flex: 1,
            marginTop: 100,
            marginTop: height < 380 ? 25 : 100,
            alignItems: 'center'
        },
        numberInput: {
            height: 50,
            width: 50,
            fontSize: 32,
            borderBottomColor: Colors.accent500,
            borderBottomWidth: 2,
            color: Colors.accent500,
            marginVertical: 8,
            fontWeight: 'bold',
            textAlign: "center"
        },
        buttonsContainer: {
            flexDirection: 'row'
        },
        buttonContainer: {
            flex: 1
        },
    })
    return { styles }
}
export default StartGameScreen;