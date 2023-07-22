import React from 'react'
import { Box, Fab, Icon, IconButton, Stagger, useDisclose } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons'

import useIsDarkMode from '../hooks/useDarkTheme'

function Floaters() {
  const { isOpen, onToggle } = useDisclose()
  const { colorMode, toggleColorMode } = useIsDarkMode()

  return (
    <>
      <Fab
        bottom={20}
        right={5}
        shadow={7}
        variant="unstyled"
        _dark={{
          bg: 'orange.50',
          _hover: {
            bg: 'orange.100',
          },
          _pressed: {
            bg: 'orange.100',
          },
        }}
        _light={{
          bg: 'blueGray.900',
          _hover: {
            bg: 'blueGray.800',
          },
          _pressed: {
            bg: 'blueGray.800',
          },
        }}
        p={3}
        icon={
          <Icon
            as={<Ionicons name="ellipsis-vertical" />}
            _dark={{ color: 'dark.100' }}
            _light={{ color: 'light.100' }}
            size="md"
          />
        }
        onPress={onToggle}
      />
      <Box
        alignItems="flex-end"
        zIndex={0}
        position="absolute"
        bottom="32"
        right="5">
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34,
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: 'spring',
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}>
          <IconButton
            mb="4"
            variant="solid"
            bg="blue.400"
            colorScheme="blue"
            borderRadius="full"
            icon={
              <Icon as={<Ionicons name="add" />} size="6" color="warmGray.50" />
            }
          />
          <IconButton
            onPress={toggleColorMode}
            mb="4"
            variant="solid"
            _dark={{
              background: 'light.100',
            }}
            _light={{
              background: 'dark.100',
            }}
            borderRadius="full"
            icon={
              <Icon
                as={<Ionicons name={colorMode === 'dark' ? 'sunny' : 'moon'} />}
                _dark={{ color: 'warning.400' }}
                _light={{ color: 'white' }}
                size="6"
              />
            }
          />
        </Stagger>
      </Box>
    </>
  )
}

export default Floaters
