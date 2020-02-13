import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Colors } from '../../themes'

class TabIcon extends Component {
  render() {
    return (
      <Icon
        name={this.props.iconName}
        size={24}
        color={this.props.focused ? Colors.primary : Colors.darkSilver}
      />
    )
  }
}

export default TabIcon
