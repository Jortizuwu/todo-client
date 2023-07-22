import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import RootStack from './stack'

function Main() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export default Main
