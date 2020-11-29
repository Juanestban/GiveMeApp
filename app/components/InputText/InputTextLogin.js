import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import InputTextNormal from './InputTextNormal'
import Colors from '../../config/Colors'
import { nameFonts } from '../../config/Fonts'

const InputTextLogin = ({
    placeholder,
    onChangeText,
    keyboardType = 'default' || 'visible-password',
    textContentType = 'username' || 'password',
    secureTextEntry = false,
    styleViewInputText,
}) => {
    const { colors, dark } = useTheme()
    return (
        <View style={[
            styles.viewInput,
            { backgroundColor: dark ? colors.card : Colors.secondColor },
            styleViewInputText
        ]}>
            <InputTextNormal
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                textContentType={textContentType}
                textAlignVertical="center"
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                styleInputText={styles.styleInputText}
                contextMenuHidden={true} />
        </View>
    )
}

export default InputTextLogin

const styles = StyleSheet.create({
    viewInput: {
        height: 40,
        borderRadius: 10,
        marginVertical: 10
    },
    styleInputText: {
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 17,
        fontSize: 17,
        fontFamily: nameFonts.RamblaRegular
    }
})