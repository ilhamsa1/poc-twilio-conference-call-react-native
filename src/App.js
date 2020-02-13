import React from 'react'

import {Provider as MobxProvider} from 'mobx-react'
import {
  Provider as PaperProvider,
  DefaultTheme,
  configureFonts,
} from 'react-native-paper'
import {Colors, Metrics, Fonts} from './themes'

import RootScreen from './root'

const fontConfig = {
  default: {
    regular: {
      fontFamily: Fonts.base,
      fontWeight: '400',
    },
    medium: {
      fontFamily: Fonts.emphasis,
      fontWeight: '500',
    },
    light: {
      fontFamily: Fonts.base,
      fontWeight: '300',
    },
    thin: {
      fontFamily: Fonts.base,
      fontWeight: '100',
    },
  },
};;

const theme = {
  ...DefaultTheme,
  dark: false,
  roundness: Metrics.smallRadius,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: Colors.accent,
    background: Colors.background,
    surface: Colors.white,
    error: Colors.red,
    text: Colors.darkGrey,
  },
  fonts: configureFonts(fontConfig),
};;

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <RootScreen />
    </PaperProvider>
  );;
};;

export default App;;
