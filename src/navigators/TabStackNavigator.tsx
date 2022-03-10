import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import themes from '../themes'
import { TabStackList } from '../types/navigator'
import { screenOptions } from './_screenOptions'
import { HomeScreen } from '../screens/Home'
import { TrainingScreen } from '../screens/Training'
import { SettingsScreen } from '../screens/Settings'

export const TabStackNavigator = () => {
  const Tab = createBottomTabNavigator<TabStackList>()
  //
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => {
        return { ...screenOptions(navigation), headerLeft: () => null }
      }}
    >
      <Tab.Screen
        name="Home" // NOTE: TabStackListの定義を指定
        component={HomeScreen}
        options={{
          headerTitle: 'ホーム',
          tabBarLabel: 'ホーム',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Training"
        component={TrainingScreen}
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
