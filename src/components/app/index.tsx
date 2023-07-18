import React from 'react'
import { NativeBaseProvider } from 'native-base'

import BaseTheme from '../../shared/theme'
import Floaters from '../../shared/components/Floaters'
import MainNavigator from './navigator'

function App() {
  return (
    <NativeBaseProvider theme={BaseTheme}>
      <MainNavigator />
      <Floaters />
    </NativeBaseProvider>
  )
}

export default App
