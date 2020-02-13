import { StyleSheet, Platform } from 'react-native'
import { Colors, Metrics } from '../../themes'

export default StyleSheet.create({
  containerShadow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: Metrics.navBarHeight,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  defaultTitle: {
    flex: 1,
    color: Colors.white,
    fontSize: Metrics.fontHeader,
    marginLeft: Metrics.smallMargin,
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.white,
    height: 40,
    paddingHorizontal: 4,
    marginVertical: 4,
    marginRight: 4,
    justifyContent: 'center',
    borderRadius: Metrics.smallRadius,
    borderBottomWidth: 0,
  },
})
