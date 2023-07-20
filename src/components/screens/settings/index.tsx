import React from 'react'
import {
  Box,
  Center,
  Divider,
  FlatList,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import DarkMode from '../../../shared/components/DarkMode'

const data = [
  {
    title: 'Appearence',
    to: 'appearence',
    description: 'hola mundo',
    icon: (
      <Icon
        alignContent="center"
        alignItems="center"
        size="6"
        as={<Ionicons name="settings-outline" />}
      />
    ),
  },
  {
    title: 'Dark mode',
    to: 'Enable or disbale dark mode',
    description: 'hola mundo',
    icon: (
      <Icon
        alignContent="center"
        alignItems="center"
        size="6"
        as={<Ionicons name="settings-outline" />}
      />
    ),
    switch: <DarkMode />,
  },
]

function Settings() {
  return (
    <Box>
      <Center py="10">
        <Icon
          alignContent="center"
          alignItems="center"
          size="100"
          as={<Ionicons name="settings-outline" />}
        />
      </Center>
      <Divider />
      <FlatList
        w="full"
        mt="2"
        data={data}
        // keyExtractor={(item, index) => item + index}r
        renderItem={({ item }) => (
          <HStack w="100%" justifyContent="space-between" p="2">
            <HStack alignContent="center" alignItems="center">
              {item.icon}
              <VStack ml="4">
                <Heading fontSize="sm">{item.title}</Heading>
                <Text fontSize="xs">{item?.description}</Text>
              </VStack>
            </HStack>
            {item?.switch}
          </HStack>
        )}
      />
      <Divider />
    </Box>
  )
}

export default Settings
