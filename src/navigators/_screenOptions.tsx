import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import themes from '../themes'
import { AppNavigator } from '../types/navigator'

type Props = {
  navigation: StackNavigationProp<AppNavigator>
}

export const screenOptions = ({ navigation }: any) => {
  //
  return {
    // Header
    headerStyle: {
      backgroundColor: themes.colors.dark,
    },
    headerTitleStyle: {
      color: themes.colors.white,
    },
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
    // Bottom Bar
    tabBarActiveTintColor: themes.colors.blue,
    tabBarInactiveTintColor: themes.colors.white,
    tabBarStyle: {
      backgroundColor: themes.colors.dark,
    },
  }
}
