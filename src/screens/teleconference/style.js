
import {Colors, Metrics} from '../../themes'

import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  footerTextContainer: {
    flex: 1,
    height: 60,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Metrics.mediumMargin,
    elevation: 4,
  },
  footerText: {
    color: Colors.white,
    fontSize: Metrics.fontInput,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
})
