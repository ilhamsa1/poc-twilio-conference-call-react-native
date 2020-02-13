import React, {useEffect} from 'react'
import {View, Text} from 'react-native'
import TwilioVoice from 'react-native-twilio-programmable-voice'

import IconButton from '../../components/button/icon'
import {Colors, Metrics} from '../../themes'

import styles from './style'

const Teleconference = () => {
  const renderFooter = () => {
    return (
      <View style={styles.footerContainer}>
        <View style={{marginVertical: Metrics.mediumMargin}}>
          <Text style={{textAlign: 'center'}}>00:02:43</Text>
        </View>
        <View style={styles.iconGroup}>
          <IconButton
            icon="volume-off"
            color={Colors.primary}
            backgroundColor={Colors.white}
            onPress={() => {
              console.log('close')
            }}
          />
          <IconButton
            icon="message"
            color={Colors.primary}
            backgroundColor={Colors.white}
            onPress={() => {
              console.log('close')
            }}
          />
          <IconButton
            icon="close"
            color={Colors.white}
            backgroundColor={Colors.error}
            onPress={async () => {
              try {
                console.log('jj')
                await TwilioVoice.disconnect()
              } catch (e) {
                console.log(e)
              }
            }}
          />
        </View>
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>Prof. Jhone Doe s.h. ll.m.</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* {renderImage()} */}
      {renderFooter()}
    </View>
  )
}

export default Teleconference
