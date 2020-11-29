import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import Login from '../screens/login/Login'
import MyTheme from '../themes/MyTheme'
import Index from '../screens/Home'

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()

const StackPrincipal = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }} />
        </Stack.Navigator>
    )
}

const TabPrincipal = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Chats"
                component={Index} />
        </Tab.Navigator>
    )
}

const ThemeNavigationContainer = () => {
    // Use default and dark theme by scheme
    // const scheme = useColorScheme()
    // scheme === 'dark' ? MyTheme : DefaultTheme
    return (
        <AppearanceProvider>
            <NavigationContainer theme={MyTheme}>
                <StackPrincipal />
                {/* <TabPincipal /> */}
            </NavigationContainer>
        </AppearanceProvider>
    )
}

export default ThemeNavigationContainer