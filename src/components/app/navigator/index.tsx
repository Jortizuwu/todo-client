import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import RootStack from './stack'
import Floaters from '../../../shared/components/Floaters'

function Main() {
  return (
    <NavigationContainer>
      {/* <Box
        flex={1}
        w="100%"
        _light={{
          bg: 'light.100',
        }}
        _dark={{
          bg: 'dark.100',
        }}
        // bg={useColorModeValue('', 'blueGray.900')}
        _web={{
          overflowX: 'hidden',
        }}> */}
      <RootStack />
      <Floaters />
      {/* </Box> */}
    </NavigationContainer>
  )
}

export default Main
