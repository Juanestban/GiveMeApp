import React, { useMemo, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Login from '../screens/login/Login'
import MyTheme from '../themes/MyTheme'
import HomeChat from '../screens/Home/Chats'
import HomeStatus from '../screens/Home/Status'
import AuthConsumerProvider from '../context/AuthConsumer'
import { useDispatch, useUserAuth } from '../context/AuthProvider'
import { TypesAuthUser } from '../reducers/Types'

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
                component={HomeChat} />
            <Tab.Screen
                name="Status"
                component={HomeStatus} />
        </Tab.Navigator>
    )
}

// Use default and dark theme by scheme
// const scheme = useColorScheme()
// scheme === 'dark' ? MyTheme : DefaultTheme
const ThemeNavigationContainer = () => {
    const { isLoading, isSignOut, token } = useUserAuth()
    const dispatch = useDispatch()

    const authContext = useMemo(() => ({
        signIn: async () => {
            dispatch({ type: TypesAuthUser.signIn, token: 'algo' })
        },
        signOut: () => { },
        signUp: async () => { }
    }), [])

    useEffect(() => {
        // 
    }, [])

    return (
        <AuthConsumerProvider value={authContext}>
            <AppearanceProvider>
                <NavigationContainer theme={MyTheme}>
                    {token === null
                        ? (<StackPrincipal />)
                        : (<TabPrincipal />)
                    }
                </NavigationContainer>
            </AppearanceProvider>
        </AuthConsumerProvider>
    )
}

export default ThemeNavigationContainer