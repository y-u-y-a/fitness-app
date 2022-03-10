import { StyleSheet } from 'react-native'
import themes from '../../themes'

const { white, dark } = themes.colors

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: dark,
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: white },
  headerIcon: { color: white, fontSize: 24 },
  //
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomColor: dark,
    borderBottomWidth: 0.4,
  },
  nameText: { fontSize: 16 },
  infoText: { marginRight: 12, fontSize: 16 },
  itemIcon: { fontSize: 20 },
  //
  row: {
    flexDirection: 'row',
  },
  itemsCenter: {
    alignItems: 'center',
  },
})
