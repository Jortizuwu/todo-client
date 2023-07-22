import { Box, FormControl, Input, TextArea, VStack } from 'native-base'
import React from 'react'
// import { Props } from './model'
// { navigation, route }: Props

function Todo() {
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: `todo ${route.params.id}`,
  //   })
  // }, [navigation, route])

  return (
    <Box p="2">
      <VStack space={3} mt="5">
        <FormControl mb="2">
          <Input variant="unstyled" placeholder="Title" size="2xl" />
        </FormControl>
        <FormControl>
          <TextArea
            size="xl"
            aria-label="t1Disabled"
            variant="unstyled"
            placeholder="Description"
            h={400}
            autoCompleteType={undefined}
          />
        </FormControl>
      </VStack>
    </Box>
  )
}

export default Todo
