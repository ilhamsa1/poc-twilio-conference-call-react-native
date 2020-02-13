import React from 'react'
import { View } from 'react-native'

import BackButton from '../nav-items/back'
import AppText from '../text'

import styles from './style'

export default function NavbarBackTitle(props) {
  const title = props.name || props.title
  return (
    <View style={styles.containerShadow}>
      <BackButton
        onClick={props.onBack}
      />
      {!!title && (
        <AppText
          bold
          style={styles.defaultTitle}
        >
          {title}
        </AppText>
      )}
    </View>
  )
}
