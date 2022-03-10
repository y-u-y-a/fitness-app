import React from 'react'
import { TouchableOpacity, Alert } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { MaterialIcons } from '@expo/vector-icons'

import themes from '../themes'
import { AppStackList } from '../types/navigator'

interface Props {
  navigation: StackNavigationProp<AppStackList>
}

export const screenOptions = ({ navigation }: Props) => {
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
      <TouchableOpacity onPress={() => Alert.alert('Coming soon ...')} style={{ paddingRight: 20 }}>
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
