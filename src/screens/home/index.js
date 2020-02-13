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
          await TwilioVoice.initWithToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2NkYTE2ODcxNDY1NTBlNDc1NTZjMTk0ZDBjNGE4MTJkLTE1ODE0ODc0NDYiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJ1c2VyIiwidm9pY2UiOnsiaW5jb21pbmciOnsiYWxsb3ciOnRydWV9LCJvdXRnb2luZyI6eyJhcHBsaWNhdGlvbl9zaWQiOiJBUDI4Y2QzNTBhMmRmZDdlNGYwOTMzN2FkMTFjMTcwOTBjIn19fSwiaWF0IjoxNTgxNDg3NDQ2LCJleHAiOjE1ODE0OTEwNDYsImlzcyI6IlNLY2RhMTY4NzE0NjU1MGU0NzU1NmMxOTRkMGM0YTgxMmQiLCJzdWIiOiJBQzJjYzJhYzhmY2FjMmMyY2MzNzNlYzY3ZTFiZGM1MzA5In0.yPb-u7wlPP60nbN4uOeMNntDoc9jjYDzFDMxhuB9vjI')
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
