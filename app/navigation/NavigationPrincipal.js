import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import InitialScreenTest from '../screens/initialSreenTest/InitialScreenTest'
import SplashScreen from '../config/SplashScreen'

const StackPrimary = createStackNavigator()

// IMPORTANTE:
// para el primary stack seran 2 vistas el tabTopNavigation y otra vista para los demas screens
// como las configuraciones, crear otro chat, etc

export const StackPrincipal = () => {
    return (
        <NavigationContainer>
            <StackPrimary.Navigator>
                <StackPrimary.Screen
                    name="SplashScreen"
                    component={SplashScreen} />
                <StackPrimary.Screen
                    name="InitialScreenTest"
                    component={InitialScreenTest} />
            </StackPrimary.Navigator>
        </NavigationContainer>
    )
}