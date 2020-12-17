import React from "react"
import { TextInput, StyleSheet } from "react-native"
import { useTheme } from "@react-navigation/native"
import Colors from "../../config/Colors"
import { nameFonts } from "../../config/Fonts"

const InputTextNormal = ({
  placeholder,
  onChangeText,
  keyboardType = "default" || "visible-password",
  textContentType = "username" || "password",
  secureTextEntry = false,
  styleInputText,
  otherProps,
}) => {
  const { colors, dark } = useTheme()
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      textContentType={textContentType}
      textAlignVertical="center"
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      contextMenuHidden={true}
      placeholderTextColor={dark ? Colors.secondColor : null}
      style={[
        styles.textInput,
        { color: dark ? colors.text : Colors.primaryColor },
        styleInputText,
      ]}
      {...otherProps}
    />
  )
}

export default InputTextNormal

const styles = StyleSheet.create({
  textInput: {
    fontSize: 17,
    fontWeight: "500",
    fontFamily: nameFonts.RamblaRegular,
  },
})
