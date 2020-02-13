import React from 'react'

import { IconButton, TouchableRipple } from 'react-native-paper'

import { Metrics, Colors } from '../../themes'
import styles from './style'

export default function NavItemsRightIcon(props) {
  return (
    <TouchableRipple onPress={props.onPress}>
      <IconButton
        icon={props.icon}
        size={Metrics.icons.medium}
        color={Colors.white}
        style={styles.rightButton}
      />
    </TouchableRipple>
  )
}
