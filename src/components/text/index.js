import React from 'react'
import { Text } from 'react-native-paper'


import styles from './styles'

const AppText = (props) => {

  return (
    <Text
      allowFontScaling={false}
      style={styles.text}
      {...props}
    />
  )
}

export default AppText
