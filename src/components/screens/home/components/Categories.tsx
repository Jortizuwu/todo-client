import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import { ColorType } from 'native-base/lib/typescript/components/types'

function Card({ color }: { color: ColorType }) {
  return (
    <Box borderRadius="2xl" p={4} minWidth={150} bg={color}>
      <VStack space="4">
        <Icon size="10" color="#fff" as={<Ionicons name="finger-print" />} />
        <Text color="#Fff" bold>
          NativeBase
        </Text>
        <VStack
          direction="row"
          space={2}
          // alignContent="center"
          alignItems="center">
          <Icon size="2" color="#fff" as={<Ionicons name="ellipse" />} />
          <Text color="#fff" fontWeight="light" fontSize={10}>
            NativeBase
          </Text>
        </VStack>
        <Button variant="ghost" w="7" h="7">
          <Icon size="7" color="#fff" as={<Ionicons name="add" />} />
        </Button>
      </VStack>
    </Box>
  )
}

function Categories() {
  return (
    <VStack space={4}>
      <Heading>Material</Heading>
      <ScrollView horizontal>
        <HStack space={3} justifyContent="center">
          <Card color="red.300" />
          <Card color="blue.300" />
          <Card color="yellow.300" />
        </HStack>
      </ScrollView>
    </VStack>
  )
}

export default Categories
