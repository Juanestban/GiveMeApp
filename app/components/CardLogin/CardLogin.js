import React from 'react'
import { View, StyleSheet } from 'react-native'
import ButtonIconText from '../Button/ButtonIconText'
import InputTextLogin from '../InputText/InputTextLogin'

const CardLogin = () => {
    return (
        <View style={styles.card}>
            <InputTextLogin
                placeholder="username"
                styleViewInputText={{marginTop: 29}}
            />
            <InputTextLogin
                placeholder="password"
                secureTextEntry={true}
                styleViewInputText={{marginBottom: 33}}
            />
            <ButtonIconText>
                Iniciar sesión
            </ButtonIconText>
            <ButtonIconText nameIcon="github">
                Registrarse con GitHub
            </ButtonIconText>
            <ButtonIconText nameIcon="google">
                Registrarse con google
            </ButtonIconText>
        </View>
    )
}

export default CardLogin

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 14
    }
})