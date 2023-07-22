import React from 'react'
import { Avatar, HStack, Text, VStack } from 'native-base'
import usePersistedStore from '../../../../store'

function HeaderComponent() {
  const { user } = usePersistedStore(state => state)
  return (
    <HStack space={[2, 3]} justifyContent="space-between">
      <VStack>
        <Text
          _dark={{
            color: 'warmGray.50',
          }}
          color="coolGray.800"
          fontWeight="light">
          Hello
        </Text>
        <Text bold fontSize="xl" textTransform="capitalize">
          {user?.firstName}
        </Text>
      </VStack>
      <Avatar
        size="48px"
        source={{
          uri: 'https://th.bing.com/th/id/R.de69e6c6cafc3869cf35036827ae4f52?rik=sRdDaCfm0fQkkQ&pid=ImgRaw&r=0',
        }}
      />
    </HStack>
  )
}

export default HeaderComponent
