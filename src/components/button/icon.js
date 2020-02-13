import React from 'react'
import { View } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Metrics } from '../../themes'

const IconButton = (props) => {
  return (
    <TouchableRipple
      borderless
      onPress={() => {
        console.log('clc')
        props.onPress()
      }}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 70,
          height: 70,
          elevation: 4,
          backgroundColor: props.backgroundColor,
          borderRadius: 40,
        }}
      >
        <Icon
          name={props.icon}
          size={Metrics.icons.medium}
          color={props.color}
        />
      </View>
    </TouchableRipple>
  )
}

export default IconButton
