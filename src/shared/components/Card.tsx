import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { HStack, Icon, Text, VStack, Pressable, Box } from 'native-base'
import { Swipeable } from 'react-native-gesture-handler'
import { Animated } from 'react-native'

import useIsDarkMode from '../hooks/useDarkTheme'
import { Todo } from '../common/interface'

interface Props {
  handlePress: () => void
  todo: Todo
}

interface RightPops {
  progress: Animated.AnimatedInterpolation<string | number>
  dragX: Animated.AnimatedInterpolation<string | number>
}

function RightActions({ progress, dragX }: RightPops) {
  const scale = dragX.interpolate({
    inputRange: [0, 50, 100, 101],
    outputRange: [-20, 0, 0, 1],
    // inputRange: [-100, 0],
    // outputRange: [1, 0],
    // extrapolate: 'clamp',
  })

  console.log(progress)

  return (
    <Box
      background="red.300"
      borderRadius="md"
      flex={1}
      alignItems="flex-end"
      justifyContent="center">
      <Animated.View style={[{ transform: [{ scale }] }]}>
        <Icon
          alignContent="center"
          alignItems="center"
          size="10"
          color="#fff"
          mr={10}
          as={<Ionicons color="#fff" name="trash-bin" />}
        />
      </Animated.View>
    </Box>
  )
}

function Card({ handlePress, todo }: Props) {
  const { backgroundStyleSecondary } = useIsDarkMode()

  return (
    <Swipeable
      renderRightActions={(progress, dragX) => (
        <RightActions progress={progress} dragX={dragX} />
      )}
      onEnded={() => console.log('hola')}>
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
    </Swipeable>
  )
}

export default Card
