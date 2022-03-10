import { StyleSheet } from 'react-native'
import themes from '../../themes'

export default StyleSheet.create({
  wrapper: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  container: {
    backgroundColor: themes.colors.lightGray,
    paddingTop: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  title: {
    marginBottom: 16,
    paddingLeft: 4,
  },
  item: {
    backgroundColor: themes.colors.green,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  // Text
  text: {
    color: themes.colors.dark,
  },
  // Common
  widthFull: {
    width: '100%',
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
})
