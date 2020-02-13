import React from 'react'
import {View} from 'react-native'
import {Actions as NavigationActions} from 'react-native-router-flux'
import TwilioVoice from 'react-native-twilio-programmable-voice'

import Button from '../../components/button'

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={async () => {
          await TwilioVoice.connect({To: 'user'})
          NavigationActions.push('teleconference')
        }}>
        Teleconference
      </Button>
      <Button
        onPress={() => {
          NavigationActions.push('contractBuilder')
        }}>
        Contract Builder
      </Button>
      <Button
        onPress={() => {
          NavigationActions.push('scheduleAppointment')
        }}>
        Schedule Appointment
      </Button>
    </View>
  )
}

export default HomeScreen
