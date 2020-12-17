import React from "react"
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Platform,
} from "react-native"
import { useTheme } from "@react-navigation/native"
import Colors from "../../config/Colors"
import Title from "../../components/Text/Title"
import CardLogin from "../../components/CardLogin/CardLogin"

const Login = () => {
  const { colors, dark } = useTheme()

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.containerViewPrincipal}>
          <View
            style={[
              styles.cardTitle,
              {
                backgroundColor: dark ? colors.card : Colors.secondColor,
              },
            ]}
          >
            <Title titleLogin={true}>GiveMeApp</Title>
          </View>
          <CardLogin />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerViewPrincipal: {
    flex: 1,
    paddingTop: 25,
  },
  cardTitle: {
    height: "24%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: -1,
    paddingBottom: 20,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
})
