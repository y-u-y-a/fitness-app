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
    flex: 2,
    color: themes.colors.linkBlue,
    fontSize: 14,
  },
  descText: {
    flex: 10,
    marginLeft: 8,
    color: themes.colors.linkBlue,
  },
})
