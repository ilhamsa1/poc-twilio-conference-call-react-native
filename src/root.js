import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View, Text } from 'react-native'
import {Actions as NavigationActions} from 'react-native-router-flux'

import TwilioVoice from 'react-native-twilio-programmable-voice'

import NavigationRouter from './router'

const s = StyleSheet.create({
  applicationView: {
    flex: 1,
  },
})

const App = () => {
  const [persisted, setPersisted] = useState(false)
  async function initTelephony() {
    try {
      console.log('init')
      // const accountSid = 'AC2cc2ac8fcac2c2cc373ec67e1bdc5309'
      // const authToken = '0e582a364b30d67cbbbb25d0f71d0252'

      // const clients = client(accountSid, authToken).newKeys.create()
      // console.log(clients)

      // const token = new AccessToken(accountSid, clients.sid, clients.secret);
      // console.log(token)
      const success = await TwilioVoice.initWithToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzU1NDAwMjhjOGVmMjkyNTU0NGZkNmNiMmFhYTZiOWMwLTE1ODE1NjI4MjQiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJ1c2VyIiwidm9pY2UiOnsiaW5jb21pbmciOnsiYWxsb3ciOnRydWV9LCJvdXRnb2luZyI6eyJhcHBsaWNhdGlvbl9zaWQiOiJBUDI4Y2QzNTBhMmRmZDdlNGYwOTMzN2FkMTFjMTcwOTBjIn19fSwiaWF0IjoxNTgxNTYyODI0LCJleHAiOjE1ODE1NjY0MjQsImlzcyI6IlNLNTU0MDAyOGM4ZWYyOTI1NTQ0ZmQ2Y2IyYWFhNmI5YzAiLCJzdWIiOiJBQzJjYzJhYzhmY2FjMmMyY2MzNzNlYzY3ZTFiZGM1MzA5In0.5_2HukmjGUgNKvkZ8eMYYWcdlwzqTeeodfqrX-nug5s')
      // add listeners (flowtype notation)
      TwilioVoice.addEventListener('deviceReady', () => {
        console.log('device ready')
      })
      TwilioVoice.addEventListener('deviceNotReady', (data) => {
        console.log('device not ready')
        console.log(data)
      })
      TwilioVoice.addEventListener('callStateRinging', (data) => {
        console.log(data)
      })
      TwilioVoice.addEventListener('connectionIsReconnecting', (data) => {
        console.log(data)
        // empty data
      })
      TwilioVoice.addEventListener('connectionDidReconnect', (data) => {
        console.log(data)
        // empty data
      })
      TwilioVoice.addEventListener('connectionDidDisconnect', (data) => {
        NavigationActions.pop()
      })
      TwilioVoice.addEventListener('callInviteCancelled', (data) => {
        console.log(data)
      })
      console.log(success)
    } catch (err) {
      console.log(err)
    }
  }
  const postHydrate = async () => {
    try {
      initTelephony()
      // no access token = not yet logged in
      // set the access token to all request from client to server
      // fetch the user info using the access token
    } catch (e) {
      console.log(e)
      // eslint-disable-next-line no-console
      // if (ENV !== 'PROD') console.log(e)
      // notificationStore.setError('Session Expired, please login again')
    } finally {
      // persisted completed
      setTimeout(() => {
        setPersisted(true)
      }, 1000)
    }
  }

  const load = () => {
    if (persisted) return
    postHydrate()
  }

  useEffect(() => {
    load()
    return () => {
      setPersisted(false)
    }
  }, [])

  return (
    <SafeAreaView style={s.applicationView}>
      <StatusBar
        barStyle="dark-content"
      />
      <NavigationRouter />
    </SafeAreaView>
  )
}

export default App
