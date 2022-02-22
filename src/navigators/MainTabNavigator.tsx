import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import themes from '../themes'
import { TabNavigatorList } from '../types'
import { HomeScreen } from '../screens/Home'
import { SettingsScreen } from '../screens/Settings'

const Tab = createBottomTabNavigator<TabNavigatorList>()

export const MainTabNavigator = () => {
  const screenOptions = {
    tabBarActiveTintColor: themes.colors.blue,
    tabBarInactiveTintColor: themes.colors.white,
    tabBarStyle: {
      backgroundColor: themes.colors.dark,
    },
  }
  //
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'ホーム',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Training"
        component={SettingsScreen}
        options={{ tabBarLabel: 'トレーニング', tabBarIcon: ({ color, size }) => <MaterialIcons name="fitness-center" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Add"
        component={SettingsScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <MaterialIcons name="add-circle" size={56} color={themes.colors.white} style={{ position: 'absolute', top: 0 }} />,
        }}
      />
      <Tab.Screen
        name="Calender"
        component={SettingsScreen}
        options={{ tabBarLabel: 'カレンダー', tabBarIcon: ({ color, size }) => <MaterialIcons name="event-note" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarLabel: '設定', tabBarIcon: ({ color, size }) => <MaterialIcons name="settings" size={size} color={color} /> }}
      />
    </Tab.Navigator>
  )
}
