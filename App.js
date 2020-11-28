import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import Colors from './app/config/Colors'
import ThemeNavigationContainer from './app/navigation/NavigationPrincipal'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={Colors.darkPrimaryColor} />
      <ThemeNavigationContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
