import React from 'react'
import { Button } from 'react-native-paper'

import styles from './style'

const ButtonComponent = props => {
  const { style, children, labelStyle, uppercase, ...others } = props

  return (
    <Button
      style={[styles.button, style]}
      labelStyle={[styles.label, labelStyle]}
      uppercase={uppercase}
      {...others}
    >
      {children}
    </Button>
  )
}

ButtonComponent.defaultProps = {
  uppercase: false,
}

export default ButtonComponent
