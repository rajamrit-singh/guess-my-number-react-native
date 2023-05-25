import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(1);
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoaded) {
    return(
      <AppLoading />
    );
  }

  const pickedNumberHandler = (pickedNumber) => {
    setGameIsOver(false);
    setUserNumber(pickedNumber);
  }

  const gameOverHandler = () => {
    setGameIsOver(true);
  }

  const gameRestartHandler = () => {
    setRoundsNumber(0);
    setUserNumber(null);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} setRoundsNumber={setRoundsNumber}/>;
  }

  if(gameIsOver && userNumber) {
    screen = <GameOverScreen roundsNumber={roundsNumber} userNumber={userNumber} onGameRestart={gameRestartHandler}/>
  }

  return (
    <SafeAreaProvider>
    <LinearGradient style={styles.rootScreen} colors={[Colors.primary800, Colors.accent500]}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
