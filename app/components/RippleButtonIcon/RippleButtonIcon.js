import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import RippleButton from '../RippleButton/RippleButton'
import Colors from '../../config/Colors'

const RippleButtonIcon = ({
    name,
    title,
    styleButtonIcon,
    styleText,
    handleClick = () => console.log('press Me')
}) => {
    return (
        <RippleButton
            onPress={handleClick}
            backgroundColor={Colors.darkPrimaryColor}
        >
            <View style={[styles.button, styleButtonIcon]}>
                {name !== '' && (
                    <AntDesign name={name} color={Colors.whiteTextColor} size={24} />
                )}
                {/* Colocar Componente title Button */}
                {title !== '' && (
                    <Text style={styleText}>{title}</Text>
                )}
            </View>
        </RippleButton>
    )
}

export default RippleButtonIcon

const styles = StyleSheet.create({
    button: {
        padding: 10
    }
})