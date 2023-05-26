import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useWindowDimensions } from 'react-native';

const GameOverScreen = ({ roundsNumber, userNumber, onGameRestart }) => {
    const { styles } = useStyle();
    const { width, height } = useWindowDimensions();
    console.log(height);
    let imageSize = 300;
    if (width < 380) {
        imageSize = 150;
    }

    if(height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }
     
    return (
        <ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
            <Title>Game over</Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image source={require('../assets/images/success.png')} ></Image>
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.</Text>
            <PrimaryButton onPress={onGameRestart}>Start new Game</PrimaryButton>
        </View>
        </ScrollView>
    )
}

export default GameOverScreen;

const useStyle = () => {
    const { height, width } = useWindowDimensions();
    const styles = StyleSheet.create({
        screen: {
            flex: 1
        },
        rootContainer: {
            flex: 1,
            padding: 24,
            justifyContent: 'center',
            alignItems: 'center'
        },
        imageContainer: {
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
