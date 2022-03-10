import { StyleSheet } from 'react-native'
import themes from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: themes.colors.lightBlue,
  },
  dateText: {
    flex: 1,
    color: themes.colors.linkBlue,
  },
  descText: {
    flex: 11,
    marginLeft: 8,
    color: themes.colors.linkBlue,
  },
})
