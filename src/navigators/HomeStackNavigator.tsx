import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { APP_TITLE } from '@env'
import { HomeStackList } from '../types'
import { MainTabStackNavigator } from './MainTabStackNavigator'
import { HomeScreen } from '../screens/Home'
import { ProfileScreen } from '../screens/Profile'

const Stack = createStackNavigator<HomeStackList>()

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={MainTabStackNavigator} options={{ title: APP_TITLE || '' }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'ホーム' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'プロフィール' }} />
    </Stack.Navigator>
  )
}
