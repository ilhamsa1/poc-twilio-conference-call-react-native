import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../themes'

const navButton = {
  backgroundColor: Colors.transparent,
  justifyContent: 'center',
  borderRadius: 100,
}

export default StyleSheet.create({
  leftButton: {
    ...navButton,
    marginLeft: Metrics.smallMargin,
  },
  rightButton: {
    ...navButton,
    marginRight: Metrics.smallMargin,
  },
  iconContainer: {
    width: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
