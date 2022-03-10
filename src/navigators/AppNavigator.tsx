import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { AppStackList } from '../types/navigator'
import { screenOptions } from './_screenOptions'
import { TabStackNavigator } from './TabStackNavigator'
import { WebViewScreen } from '../screens/WebView'

export const AppNavigator = () => {
  const Stack = createStackNavigator<AppStackList>()
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Tab" component={TabStackNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="WebView" component={WebViewScreen} options={{ title: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
