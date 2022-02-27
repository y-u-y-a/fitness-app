import { StyleSheet } from 'react-native'
import themes from '../../themes'

export default StyleSheet.create({
  trainingWrapper: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  trainingContainer: {
    backgroundColor: themes.colors.lightGray,
    paddingTop: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  trainingTitle: {
    marginBottom: 16,
    paddingLeft: 4,
  },
  trainingItem: {
    backgroundColor: themes.colors.green,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  text: {
    color: themes.colors.dark,
  },
  // common
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
