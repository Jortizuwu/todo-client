import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'native-base'

import { Props } from './model'

const styles = StyleSheet.create({
  color: { color: 'red' },
  separator: {
    height: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
})

function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Hola </Text>
      <Button onPress={() => navigation.navigate('Home')}>got to</Button>
    </View>
  )
}

export default Home
