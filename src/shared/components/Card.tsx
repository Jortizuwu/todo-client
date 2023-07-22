import { Ionicons } from '@expo/vector-icons'
import { HStack, Icon, Text, VStack, Pressable } from 'native-base'
import React from 'react'
import useIsDarkMode from '../hooks/useDarkTheme'
import { Todo } from '../common/interface'

interface Props {
  handlePress: () => void
  todo: Todo
}

function Card({ handlePress, todo }: Props) {
  const { backgroundStyleSecondary } = useIsDarkMode()

  return (
    <Pressable onPress={handlePress}>
      {({ isPressed }) => {
        return (
          <HStack
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
            alignItems="flex-start"
            justifyContent="space-between"
            borderRadius="xl"
            p="4"
            mb="3"
            background={backgroundStyleSecondary.backgroundColor}>
            <HStack>
              <Icon
                size="4"
                color="green.200"
                mt="1"
                as={<Ionicons name="checkmark-circle" />}
              />
              <VStack ml="2">
                <Text fontSize="md" bold>
                  {todo.title}
                </Text>
                <Text fontSize="sm" isTruncated textAlign="justify">
                  {todo.description}
                </Text>
              </VStack>
            </HStack>
            <Text fontSize="xs">{todo.createdAt}</Text>
          </HStack>
        )
      }}
    </Pressable>
  )
}

export default Card
