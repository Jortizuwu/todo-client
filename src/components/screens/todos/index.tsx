import React from 'react'
import { Box, VStack } from 'native-base'
import TodosList from './components/List'

// { navigation }: Props

function Todos() {
  return (
    <Box
      safeArea
      h="full"
      px="2"
      _dark={{
        background: 'dark.100',
      }}
      _light={{
        background: 'light.100',
      }}>
      <VStack space={5} w="100%" alignSelf="center">
        <TodosList />
      </VStack>
    </Box>
  )
}

export default Todos
