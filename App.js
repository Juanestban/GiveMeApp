import { StatusBar } from 'expo-status-bar'
import React, {useState, useEffect} from 'react'
import { StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'
import Fonts from './app/config/Fonts'
import Colors from './app/config/Colors'
import ThemeNavigationContainer from './app/navigation/NavigationPrincipal'

export default function App() {
  const [loadingFonts, setLoadingFonts] = useState(false)

  useEffect(() => {
    if (!loadingFonts) loaderFont()
  }, [])

  const loaderFont = async() => {
    await Font.loadAsync(Fonts)
    setLoadingFonts(true)
  }

  if (loadingFonts) {
    return (
      <View style={styles.container}>
        <StatusBar style="light" backgroundColor={Colors.darkPrimaryColor} />
        <ThemeNavigationContainer />
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
