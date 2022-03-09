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
  newsContainer: {
    marginBottom: 40,
  },
  newsItem: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: themes.colors.lightBlue,
  },
  newsItemTextDate: {
    flex: 1,
    color: themes.colors.linkBlue,
  },
  newsItemTextDesc: {
    flex: 11,
    marginLeft: 8,
    color: themes.colors.linkBlue,
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
