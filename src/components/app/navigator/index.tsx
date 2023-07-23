import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import RootStack from './stack'
import Floaters from '../../../shared/components/Floaters'

function Main() {
  return (
    <NavigationContainer>
      <RootStack />
      <Floaters />
    </NavigationContainer>
  )
}

export default Main
