import React from 'react'
import { TextInput } from 'react-native-paper'

import { Colors } from '../../themes'

import styles from './style'

function InputText(props) {
  const { mode, style, ...others } = props

  return (
    <TextInput
      ref={props.forwardedRef}
      mode="flat"
      underlineColor="#fff"
      selectionColor={Colors.silver}
      style={[styles.input, style]}
      theme={{
        colors: {
          placeholder: Colors.silver,
          label: Colors.silver,
        },
      }}
      {...others}
    />
  )
}

// eslint-disable-next-line react/display-name
export default React.forwardRef((props, ref) => <InputText {...props} forwardedRef={ref} />)
