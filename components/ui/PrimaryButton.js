import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const PrimaryButton = ({ children, onPress}) => {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) => {
                    return pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer
                }}
                onPress={onPress}
                android_ripple={{ color: Colors.primary600 }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        overflow: 'hidden',
        borderRadius: 28,
    },
    buttonInnerContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: Colors.primary500,
        elevation: 4,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75
    }
})
export default PrimaryButton;