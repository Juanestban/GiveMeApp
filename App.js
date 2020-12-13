import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'
import Fonts from './app/config/Fonts'
import Colors from './app/config/Colors'
import ThemeNavigationContainer from './app/navigation/NavigationPrincipal'
import AuthProvide from './app/context/AuthProvider'

export default function App() {
  const [loadingFonts, setLoadingFonts] = useState(false)

  const loaderFont = async () => {
    await Font.loadAsync(Fonts)
    setLoadingFonts(true)
  }

  useEffect(() => {
    if (!loadingFonts) loaderFont()
  }, [])

  if (loadingFonts) {
    return (
      <View style={styles.container}>
        <StatusBar style="light" backgroundColor={Colors.darkPrimaryColor} />
        <AuthProvide>
          <ThemeNavigationContainer />
        </AuthProvide>
      </View>
    )
  }

  return <View></View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
