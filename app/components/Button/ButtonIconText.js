import React from "react"
import { View, StyleSheet } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { useTheme } from "@react-navigation/native"
import Colors from "../../config/Colors"
import ButtonRippleV2 from "../RippleButton/ButtonRippleV2"
import NormalText from "../Text/NormalText"

const ButtonIconText = ({ children, nameIcon, styleButton }) => {
  const { colors, dark } = useTheme()
  return (
    <ButtonRippleV2
      styleButton={[
        styles.container,
        { color: dark ? colors.card : Colors.white },
        styleButton,
      ]}
      rippleColor={dark ? colors.card : Colors.white}
    >
      {nameIcon !== undefined && (
        <AntDesign
          name={nameIcon}
          color={dark ? colors.text : Colors.primaryColor}
          size={24}
          style={{ marginRight: 5 }}
        />
      )}
      <NormalText textLogin={true}>{children}</NormalText>
    </ButtonRippleV2>
  )
}

export default ButtonIconText

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.whiteTextColor,
    borderWidth: 0.5,
    borderRadius: 10,
    marginBottom: 13,
    overflow: "hidden",
  },
})
