import React from 'react'
import {
  Scene,
  Router,
  Overlay,
  Modal,
  Stack,
} from 'react-native-router-flux'


// Screens
import HomeScreen from '../screens/home'
import TeleconferenceScreen from '../screens/teleconference'

const NavigationRouter = () => {
  const stateHandler = (prevState, newState, action) => {
    // eslint-disable-next-line no-console
  }
  const onBackPress = () => {
    // eslint-disable-next-line no-console
    console.log('Exit App..')
  }
  return (
    <Router
      panHandlers={null}
      onStateChange={stateHandler}
      hideNavBar
      backAndroidHandler={onBackPress}
    >
      <Overlay key="overlay" hideNavBar>
        <Modal key="modal" hideNavBar>
          <Stack
            key="loggedin"
          >
            <Scene
              key="home"
              component={HomeScreen}
              initial
              hideNavBar
            />
            <Scene
              key="teleconference"
              component={TeleconferenceScreen}
              hideNavBar
            />
          </Stack>
        </Modal>
      </Overlay>
    </Router>
  )
}
export default NavigationRouter
