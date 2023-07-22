import React from 'react'

import { Box, VStack } from 'native-base'

import HeaderComponent from './components/Header'
import Search from './components/Search'
import Categories from './components/Categories'
import Todos from './components/Todos'

function Home() {
  return (
    <Box
      safeArea
      px="2"
      _dark={{
        background: 'dark.100',
      }}
      _light={{
        background: 'light.100',
      }}
      mt="1">
      <VStack space={5} w="100%" alignSelf="center">
        <HeaderComponent />
        <Search />
        <Categories />
        <Todos />
      </VStack>
    </Box>
  )
}

export default Home
