import React, { Component } from 'react'
import { TouchableHighlight, TouchableNativeFeedback, Platform, View } from 'react-native'

class Touchable extends Component {
  render() {
    if (Platform.OS === 'android') {
      const { style, children, ...touchableProps } = this.props
      return (
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('transparent', true)}
          useForeground
          {...touchableProps}
        >
          <View style={style}>{children}</View>
        </TouchableNativeFeedback>
      )
    }
    return (
      <TouchableHighlight underlayColor="transparent" {...this.props} />
    )
  }
}

export default Touchable
