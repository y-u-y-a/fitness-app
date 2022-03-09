import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { APP_TITLE } from '@env'
import { HomeStackList } from '../types/navigator'
import { MainTabStackNavigator } from './MainTabStackNavigator'
import { WebViewScreen } from '../screens/WebView'
import { HomeScreen } from '../screens/Home'

const Stack = createStackNavigator<HomeStackList>()

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={MainTabStackNavigator} options={{ title: APP_TITLE || '' }} />
      <Stack.Screen name="WebView" component={WebViewScreen} options={{ title: '' }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'ホーム' }} />
    </Stack.Navigator>
  )
}
