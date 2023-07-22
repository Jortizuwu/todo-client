import React from 'react'
import {} from 'react-native'
import { NativeBaseProvider } from 'native-base'

import MainNavigator from './navigator'
import { BaseTheme } from '../../shared/theme'

function App() {
  return (
    <NativeBaseProvider theme={BaseTheme}>
      {/* <Layout /> */}
      <MainNavigator />
    </NativeBaseProvider>
  )
}

export default App
