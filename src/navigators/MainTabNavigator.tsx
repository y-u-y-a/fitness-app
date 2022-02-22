import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons, Feather, SimpleLineIcons, Fontisto } from '@expo/vector-icons'

import { ScreenList } from '../types'
import { HomeScreen } from '../screens/Home'
import { SettingsScreen } from '../screens/Settings'

const Tab = createBottomTabNavigator<ScreenList>()

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'ホーム',
          tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Training"
        component={SettingsScreen}
        options={{ tabBarLabel: 'トレーニング', tabBarIcon: ({ color, size }) => <MaterialIcons name="fitness-center" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Calender"
        component={SettingsScreen}
        options={{ tabBarLabel: 'カレンダー', tabBarIcon: ({ color, size }) => <Fontisto name="date" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarLabel: '設定', tabBarIcon: ({ color, size }) => <SimpleLineIcons name="settings" size={size} color={color} /> }}
      />
    </Tab.Navigator>
  )
}
