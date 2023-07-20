import { Switch } from 'native-base'
import React from 'react'

import useIsDarkMode from '../hooks/useDarkTheme'

export default function DarkMode() {
  const { toggleColorMode, colorMode } = useIsDarkMode()

  return (
    <Switch
      defaultIsChecked={colorMode === 'dark'}
      colorScheme="primary"
      onChange={toggleColorMode}
    />
  )
}
