import React from 'react'
import {} from 'react-native'
import { NativeBaseProvider } from 'native-base'

import MainNavigator from './navigator'
import { BaseTheme } from '../../shared/theme'
import Floaters from '../../shared/components/Floaters'

function App() {
  return (
    <NativeBaseProvider theme={BaseTheme}>
      <MainNavigator />
      <Floaters />
    </NativeBaseProvider>
  )
}

export default App
