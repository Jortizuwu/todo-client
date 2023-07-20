import React from 'react'
import { Fab, Icon } from 'native-base'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'

import Logo from './Logo'
import useIsDarkMode from '../hooks/useDarkTheme'

function Floaters() {
  const { backgroundStyleSecondary, colorMode, toggleColorMode } =
    useIsDarkMode()

  return (
    <>
      <Logo
        size={{ base: 64, md: 450 }}
        zIndex={-1}
        opacity={0.4}
        _ios={{
          opacity: 0.6,
        }}
        position="absolute"
        top={{ base: -80, md: -180 }}
        right={{ base: -60, md: -100 }}
      />
      <StatusBar
        style={colorMode === 'dark' ? 'light' : 'dark'}
        backgroundColor={backgroundStyleSecondary.backgroundColor}
        translucent
      />
      <Fab
        shadow={7}
        right={2}
        bottom={20}
        renderInPortal={false}
        variant="unstyled"
        _dark={{
          bg: 'orange.50',
          _hover: {
            bg: 'orange.100',
          },
          _pressed: {
            bg: 'orange.100',
          },
        }}
        _light={{
          bg: 'blueGray.900',
          _hover: {
            bg: 'blueGray.800',
          },
          _pressed: {
            bg: 'blueGray.800',
          },
        }}
        p={3}
        icon={
          <Icon
            as={Ionicons}
            _dark={{ name: 'sunny', color: 'orange.400' }}
            _light={{ name: 'moon', color: 'blueGray.100' }}
            size="md"
          />
        }
        onPress={toggleColorMode}
      />
    </>
  )
}

export default Floaters
