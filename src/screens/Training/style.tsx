import { StyleSheet } from 'react-native'
import themes from '../../themes'

export default StyleSheet.create({
  container: {
    backgroundColor: themes.colors.white,
  },
  scene: {
    flex: 1,
  },
  tabBarContainer: {
    backgroundColor: themes.colors.dark,
  },
  labelText: {
    color: themes.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  indicator: { backgroundColor: themes.colors.white },
})
