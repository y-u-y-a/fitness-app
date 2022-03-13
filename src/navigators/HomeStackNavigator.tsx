import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialIcons } from '@expo/vector-icons'

import themes from '../themes'
import { HomeNavigator } from '../types/navigator'
import { screenOptions } from './_screenOptions'
import { HomeScreen } from '../screens/Home'
import { ProfileScreen } from '../screens/Profile'

export const HomeStackNavigator = () => {
  const Stack = createStackNavigator<HomeNavigator>()
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      // TODO: まとめたい
      screenOptions={({ navigation }) => {
        return {
          ...screenOptions(navigation),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons name="chevron-left" color={themes.colors.white} size={24} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} style={{ paddingRight: 20 }}>
              <MaterialIcons name="account-circle" color={themes.colors.white} size={24} />
            </TouchableOpacity>
          ),
        }
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerTitle: process.env.APP_TITLE, headerLeft: () => null }} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerTitle: 'プロフィール' }} />
    </Stack.Navigator>
  )
}
