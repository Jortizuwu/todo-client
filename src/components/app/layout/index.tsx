import { Box } from 'native-base'
import React from 'react'

interface Props {
  children: JSX.Element
}

function Layout({ children }: Props) {
  return (
    <Box safeArea flex="1">
      {children}
    </Box>
  )
}

export default Layout
