import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { ScreenList } from '../types'
import { HomeScreen } from '../screens/Home'
import { SettingsScreen } from '../screens/Settings'

const Tab = createBottomTabNavigator<ScreenList>()

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Training" component={SettingsScreen} />
      <Tab.Screen name="Calender" component={SettingsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}
