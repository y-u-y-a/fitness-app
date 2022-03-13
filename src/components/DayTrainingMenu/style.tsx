import { StyleSheet } from 'react-native'
import themes from '../../themes'

export default StyleSheet.create({
  container: {
    backgroundColor: themes.colors.lightGray,
    marginHorizontal: 16,
    paddingTop: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  title: {
    marginBottom: 16,
    paddingLeft: 4,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  item: {
    backgroundColor: themes.colors.white,
    marginBottom: 8,
    padding: 12,
    borderRadius: 8,
  },
  itemHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  itemHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemBody: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // Text
  textSmall: {
    fontSize: 12,
    color: themes.colors.gray,
  },
  text: {
    fontSize: 16,
    color: themes.colors.dark,
  },
  fontBold: {
    fontWeight: 'bold',
  },
})
