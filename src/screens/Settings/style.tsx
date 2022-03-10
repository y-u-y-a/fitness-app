import { StyleSheet } from 'react-native'
import themes from '../../themes'

export default StyleSheet.create({
  container: {
    backgroundColor: themes.colors.white,
    height: '100%',
  },
  item: {
    padding: 16,
    borderBottomWidth: 0.6,
    borderBottomColor: themes.colors.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
})
