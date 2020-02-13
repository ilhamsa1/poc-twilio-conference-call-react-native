import React, { Component } from 'react'
import { HelperText } from 'react-native-paper'

import styles from './style'

class AppHelperText extends Component {
  render() {
    const { style, children, ...others } = this.props
    return (
      <HelperText
        style={[styles.text, style]}
        {...others}
      >
        {children}
      </HelperText>
    )
  }
}

export default AppHelperText
