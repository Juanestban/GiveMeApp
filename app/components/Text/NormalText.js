import React from 'react'
import {
    Text,
    StyleSheet
} from 'react-native'
import { useTheme } from '@react-navigation/native'
import Colors from '../../config/Colors'
import { nameFonts } from '../../config/Fonts'

const NormalText = ({ children, styleText, otherProps, textLogin = false }) => {
    const { dark, colors } = useTheme()
    return <Text
        style={[
            styles.text, {
                color: dark ? colors.text : Colors.primaryColor,
                fontSize: textLogin ? 18 : 14
            },
            styleText
        ]}
        {...otherProps}
    >
        {children}
    </Text>
}

export default NormalText

// InputText fontSize 18 fontFamily Medium
const styles = StyleSheet.create({
    text: {
        fontFamily: nameFonts.RamblaRegular
    }
})