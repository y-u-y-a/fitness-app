import { StyleSheet } from 'react-native'
import themes from '../../themes'

export default StyleSheet.create({
  container: {
    backgroundColor: themes.colors.lightGray,
    marginHorizontal: 16,
    marginBottom: 16,
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
  row: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
})
