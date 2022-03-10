import { StackNavigationProp } from '@react-navigation/stack'

import themes from '../themes'
import { AppNavigator } from '../types/navigator'

interface Props {
  navigation: StackNavigationProp<AppNavigator>
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
    // Bottom Bar
    tabBarActiveTintColor: themes.colors.blue,
    tabBarInactiveTintColor: themes.colors.white,
    tabBarStyle: {
      backgroundColor: themes.colors.dark,
    },
  }
}
