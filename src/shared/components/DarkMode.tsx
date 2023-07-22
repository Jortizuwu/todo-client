import React from 'react'
import { StatusBar, Switch } from 'native-base'
import { useRoute } from '@react-navigation/native'

import useIsDarkMode from '../hooks/useDarkTheme'

const INCLUDES_ROUTES = ['Settings', 'Home', 'Todos']

export default function DarkMode() {
  const {
    backgroundStyleSecondary,
    backgroundStylePrimary,
    colorMode,
    toggleColorMode,
  } = useIsDarkMode()

  const { name } = useRoute()

  return (
    <>
      <StatusBar
        // style={colorMode === 'dark' ? 'light' : 'dark'}
        backgroundColor={
          INCLUDES_ROUTES.includes(name)
            ? backgroundStylePrimary.backgroundColor
            : backgroundStyleSecondary.backgroundColor
        }
        translucent
      />
      <Switch
        defaultIsChecked={colorMode === 'dark'}
        colorScheme="primary"
        onChange={toggleColorMode}
      />
    </>
  )
}
