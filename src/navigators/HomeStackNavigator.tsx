import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeNavigator } from '../types/navigator'
import { screenOptions } from './_screenOptions'
import { HomeScreen } from '../screens/Home'
import { ProfileScreen } from '../screens/Profile'

const Stack = createStackNavigator<HomeNavigator>()

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={screenOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerTitle: process.env.APP_TITLE, headerLeft: () => null }} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerTitle: 'プロフィール' }} />
    </Stack.Navigator>
  )
}
