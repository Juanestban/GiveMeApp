import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../config/Colors'
import RippleButton from './RippleButton'

const randomHexColor = () => {
    return Colors.back.replace(/0/g, () => (~~(Math.random() * 16)).toString(16))
}

const Ripple = () => {
    const [rippleColor, setRippleColor] = useState(randomHexColor())
    return (
        <View style={styles.container}>
            <RippleButton
                onPress={() => setRippleColor(randomHexColor())}
                backgroundColor={rippleColor}
            >
                <View style={styles.touchable}>
                    <Text style={styles.text}>TouchableNativeFeedback</Text>
                </View>
            </RippleButton>
        </View>
    )
}

export default Ripple

const styles = StyleSheet.create({
    container: {
        height: 250,
        justifyContent: 'center',
        padding: 8,
        backgroundColor: Colors.white
    },

    touchable: {
        flex: .5,
        borderColor: Colors.back,
        justifyContent: 'center',
        borderWidth: 1
    },

    text: { alignSelf: 'center' }
})