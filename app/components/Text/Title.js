import React from 'react'
import {
    Text,
    StyleSheet
} from 'react-native'
import { useTheme } from '@react-navigation/native'
import Colors from '../../config/Colors'
import { nameFonts } from '../../config/Fonts'

const Title = ({ children, styleText, otherProps, titleLogin = false }) => {
    const { dark, colors } = useTheme()
    return <Text
        style={[
            styles.text, {
                color: dark ? colors.text : Colors.primaryColor,
                fontSize: titleLogin ? 26 : 17
            },
            styleText
        ]}
        {...otherProps}
    >
        {children}
    </Text>
}

export default Title

// InputText fontSize 18 fontFamily Medium
const styles = StyleSheet.create({
    text: {
        fontFamily: nameFonts.RamblaBold
    }
})