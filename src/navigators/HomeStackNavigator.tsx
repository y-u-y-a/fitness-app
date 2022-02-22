import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { RootStackList } from '../types'
// import { MainTabNavigator } from './MainTabNavigator'
import { HomeScreen } from '../screens/Home'
import { ProfileScreen } from '../screens/Profile'

const Stack = createStackNavigator<RootStackList>()

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Tab" component={MainTabNavigator} /> */}
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'ホーム' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'プロフィール' }} />
    </Stack.Navigator>
  )
}
