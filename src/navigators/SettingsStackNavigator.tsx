import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialIcons } from '@expo/vector-icons'

import themes from '../themes'
import { SettingsNavigator } from '../types/navigator'
import { screenOptions } from './_screenOptions'
import { SettingsScreen } from '../screens/Settings'
import { ProfileScreen } from '../screens/Profile'

export const SettingsStackNavigator = () => {
  const Stack = createStackNavigator<SettingsNavigator>()
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
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
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerTitle: '設定', headerLeft: () => null }} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerTitle: 'プロフィール' }} />
    </Stack.Navigator>
  )
}
