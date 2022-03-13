import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SettingsNavigator } from '../types/navigator'
import { screenOptions } from './_screenOptions'
import { SettingsScreen } from '../screens/Settings'
import { ProfileScreen } from '../screens/Profile'

const Stack = createStackNavigator<SettingsNavigator>()

export const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SettingsScreen" screenOptions={screenOptions}>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerTitle: '設定', headerLeft: () => null }} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerTitle: 'プロフィール' }} />
    </Stack.Navigator>
  )
}
