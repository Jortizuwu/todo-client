import React from 'react'

import { Center, FlatList, Heading, Spinner } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackRootParamList } from '../../../app/navigator/stack/model'
import Card from '../../../../shared/components/Card'
import { useListAllTodos } from '../../../../shared/hooks/react-query/todo'

type NavigationProps = StackNavigationProp<RootStackRootParamList>

function Todos() {
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
    <>
      <Heading mb="2" mt="4">
        Users todos
      </Heading>
      <FlatList
        scrollEnabled
        data={todos?.todos}
        renderItem={({ item }) => (
          <Card handlePress={() => handlePress(item.id)} todo={item} />
        )}
        keyExtractor={item => item.id}
      />
    </>
  )
}

export default Todos
