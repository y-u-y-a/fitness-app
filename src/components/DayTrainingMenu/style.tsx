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
  itemBody: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // Text
  text10: {
    fontSize: 10,
  },
  text12: {
    fontSize: 12,
  },
  text: {
    color: themes.colors.dark,
    fontSize: 14,
  },
  text16: {
    fontSize: 16,
  },
  text18: {
    fontSize: 18,
  },
  text20: {
    fontSize: 20,
  },
  textGray: {
    color: themes.colors.gray,
  },
  fontBold: {
    fontWeight: 'bold',
  },
})
