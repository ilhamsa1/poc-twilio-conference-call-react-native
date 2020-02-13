import { StyleSheet } from 'react-native'
import { Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  button: {
    width: Metrics.maxWidth,
    borderRadius: Metrics.mediumRadius,
    marginVertical: Metrics.smallMargin,
  },
  label: {
    padding: Metrics.smallMargin,
    fontWeight: 'bold',
    letterSpacing: 0,
    fontFamily: Fonts.base,
    fontSize: Metrics.fontNormal,
  },
})
