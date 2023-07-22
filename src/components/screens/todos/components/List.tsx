import React from 'react'

import { Center, FlatList, Heading, Spinner, View } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import Card from '../../../../shared/components/Card'
import { RootStackRootParamList } from '../../../app/navigator/stack/model'
import { useListAllTodos } from '../../../../shared/hooks/react-query/todo'

type NavigationProps = StackNavigationProp<RootStackRootParamList>

function TotoList() {
  const { isLoading, todos } = useListAllTodos()

  const { navigate } = useNavigation<NavigationProps>()
  const handlePress = (id: string) => {
    navigate('TodoDetails', {
      id,
    })
  }

  if (isLoading)
    return (
      <Center>
        <Spinner mt="5" size="lg" />
      </Center>
    )

  return (
    <View>
      <Heading mb="2">Users todos</Heading>
      <FlatList
        data={todos?.todos}
        renderItem={({ item }) => (
          <Card todo={item} handlePress={() => handlePress(item.id)} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default TotoList
