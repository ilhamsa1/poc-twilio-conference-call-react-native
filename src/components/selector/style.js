import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../themes'

export default StyleSheet.create({
  optionList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: Colors.white,
    padding: Metrics.smallMargin,
  },
  option: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: Metrics.smallMargin,
    height: 50,
  },
  optionView: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.blue,
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  label: {
    flex: 1,
    fontSize: 18,
    color: Colors.darkGrey,
    paddingLeft: 40,
  },
})
