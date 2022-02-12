import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/Home'
import { ProfileScreen } from '../screens/Profile'
import { RootStackParamList } from '../types'

// StackNavigationを作成(引数のnavigationなど)
const Stack = createStackNavigator<RootStackParamList>()

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'ホーム' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'プロフィール' }} />
    </Stack.Navigator>
  )
}
