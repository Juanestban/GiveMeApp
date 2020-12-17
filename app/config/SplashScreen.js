import React from "react"
import { View, ImageBackground, Image, Text } from "react-native"

const splash = require("../assets/images/splashImage/splashScreen2.jpg")

const SplashScreen = () => {
  return (
    <ImageBackground source={splash} style={{ height: "100%", width: "100%" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* Esto se cambiara por componentes */}
        <Text>Welcome to GiveMeApp</Text>
      </View>
    </ImageBackground>
  )
}

export default SplashScreen
