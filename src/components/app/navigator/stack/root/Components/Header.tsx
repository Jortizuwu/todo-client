import Ionicons from '@expo/vector-icons/Ionicons'
import { HStack, Icon, IconButton } from 'native-base'
import React from 'react'

function HeaderRight({ color = 'red.400' }: { color: string | undefined }) {
  return (
    <HStack>
      <IconButton
        variant="unstyled"
        icon={
          <Icon as={<Ionicons name="search-sharp" />} size="lg" color={color} />
        }
      />
      <IconButton
        variant="unstyled"
        icon={
          <Icon
            as={<Ionicons name="ellipsis-vertical" />}
            size="lg"
            color={color}
          />
        }
      />
    </HStack>
  )
}

export default HeaderRight
