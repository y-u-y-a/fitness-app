import { StyleSheet } from 'react-native'
import themes from '../../themes'

export default StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: themes.colors.lightBlue,
  },
  itemTextDate: {
    flex: 1,
    color: themes.colors.linkBlue,
  },
  itemTextDesc: {
    flex: 11,
    marginLeft: 8,
    color: themes.colors.linkBlue,
  },
})
