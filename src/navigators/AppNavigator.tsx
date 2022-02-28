import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { MainTabNavigator } from './MainTabNavigator'

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <MainTabNavigator />
    </NavigationContainer>
  )
}
