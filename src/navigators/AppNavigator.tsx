import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { HomeStackNavigator } from './HomeStackNavigator'

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <HomeStackNavigator />
    </NavigationContainer>
  )
}
