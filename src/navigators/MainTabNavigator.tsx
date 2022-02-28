import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import themes from '../themes'
import { TabNavigatorList } from '../types'
import { HomeScreen } from '../screens/Home'
import { SettingsScreen } from '../screens/Settings'

export const MainTabNavigator = () => {
  const Tab = createBottomTabNavigator<TabNavigatorList>()
  const screenOptions = {
    // Bottom Bar
    tabBarActiveTintColor: themes.colors.blue,
    tabBarInactiveTintColor: themes.colors.white,
    tabBarStyle: {
      backgroundColor: themes.colors.dark,
    },
    // Header
    headerStyle: {
      backgroundColor: themes.colors.dark,
    },
    headerTitleStyle: {
      color: themes.colors.white,
    },
  }
  //
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'ホーム',
          tabBarLabel: 'ホーム',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Training"
        component={SettingsScreen}
        options={{
          headerTitle: 'トレーニング',
          tabBarLabel: 'トレーニング',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="fitness-center" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Add"
        component={SettingsScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <MaterialIcons name="add-circle" size={48} color={themes.colors.white} style={{ position: 'absolute', top: 2 }} />,
        }}
      />
      <Tab.Screen
        name="Calender"
        component={SettingsScreen}
        options={{
          headerTitle: 'カレンダー',
          tabBarLabel: 'カレンダー',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="event-note" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitle: '設定',
          tabBarLabel: '設定',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="settings" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}
