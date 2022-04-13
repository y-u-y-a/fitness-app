export type AppNavigator = {
  Tab: TabNavigator
  WebView: {
    uri: string
  }
}

export type TabNavigator = {
  HomeStack: undefined
  SettingsStack: undefined
  TrainingScreen: undefined
  CalenderScreen: undefined
  Add: undefined
}

export type HomeNavigator = {
  HomeScreen: undefined
  ProfileScreen: undefined
}

export type SettingsNavigator = {
  SettingsScreen: undefined
  ProfileScreen: undefined
}
