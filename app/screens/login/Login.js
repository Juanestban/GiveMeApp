import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { useTheme } from '@react-navigation/native'

const Login = () => {
    const {colors} = useTheme()
    return (
        <View style={styles.container}>
            <Text style={{color: colors.text}}>Login other</Text>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25
    }
})