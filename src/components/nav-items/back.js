import React from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { IconButton, TouchableRipple } from 'react-native-paper'

import { Metrics, Colors } from '../../themes'
import styles from './style'

export default function NavItemsBack(props) {
  const onBack = () => {
    if (props.onClick) {
      props.onClick()
      return
    }
    Actions.pop()
  }
  return (
    <View style={styles.iconContainer}>
      <TouchableRipple onPress={onBack}>
        <IconButton
          icon="chevron-left-circle"
          size={Metrics.icons.small}
          color={props.color || Colors.white}
          style={styles.leftButton}
        />
      </TouchableRipple>
    </View>
  )
}
