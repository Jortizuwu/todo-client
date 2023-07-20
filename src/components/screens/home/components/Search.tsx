import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Icon, Input, VStack } from 'native-base'

function Search() {
  return (
    <VStack w="100%" alignSelf="center">
      <Input
        placeholder="Search"
        width="100%"
        borderRadius="2xl"
        py="3"
        px="1"
        fontSize="14"
        InputLeftElement={
          <Icon
            m="2"
            ml="3"
            size="6"
            color="gray.400"
            as={<Ionicons name="search" />}
          />
        }
      />
    </VStack>
  )
}

export default Search
