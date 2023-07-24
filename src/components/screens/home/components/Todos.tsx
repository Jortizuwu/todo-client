import React from 'react'

import { Box, FlatList, Heading } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import Card from '../../../../shared/components/Card'
import { RootStackRootParamList } from '../../../app/navigator/stack/model'
import { useListAllTodos } from '../../../../shared/hooks/react-query/todo'

type NavigationProps = StackNavigationProp<RootStackRootParamList>

const todo = [
  {
    id: '123',
    title: '12312',
    description: '12312',
  },
  {
    id: '123',
    title: '12312',
    description: '12312',
  },
]
// export const Separator = () => <View style={styles.separator} />

function Todos() {
  // const { isLoading, todos } = useListAllTodos()

  const { navigate } = useNavigation<NavigationProps>()
  const handlePress = (id: string) => {
    navigate('TodoDetails', {
      id,
    })
  }

  // if (isLoading)
  //   return (
  //     <Center>
  //       <Spinner mt="5" size="lg" />
  //     </Center>
  //   )

  return (
    <>
      <Heading mb="2" mt="4">
        Users todos
      </Heading>
      <FlatList
        scrollEnabled
        data={todo}
        renderItem={({ item }) => (
          <Card handlePress={() => handlePress(item.id)} todo={item} />
        )}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => <Box h="5" />}
        keyExtractor={item => item.id}
      />
    </>
  )
}

export default Todos
