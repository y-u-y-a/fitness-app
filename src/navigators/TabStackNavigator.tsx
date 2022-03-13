import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import themes from '../themes'
import { TabNavigator } from '../types/navigator'
import { screenOptions } from './_screenOptions'
import { HomeStackNavigator } from './HomeStackNavigator'
import { SettingsStackNavigator } from './SettingsStackNavigator'
import { TrainingScreen } from '../screens/Training'

const Tab = createBottomTabNavigator<TabNavigator>()

export const TabStackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        ...screenOptions(navigation),
        headerLeft: () => null,
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'ホーム',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="TrainingScreen"
        component={TrainingScreen}
        options={{
          headerTitle: 'トレーニング',
          tabBarLabel: 'トレーニング',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="fitness-center" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Add"
        component={TrainingScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <MaterialIcons name="add-circle" size={48} color={themes.colors.white} style={{ position: 'absolute', top: 2 }} />,
        }}
      />
      <Tab.Screen
        name="CalenderScreen"
        component={TrainingScreen}
        options={{
          headerTitle: 'カレンダー',
          tabBarLabel: 'カレンダー',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="event-note" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: '設定',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="settings" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}
