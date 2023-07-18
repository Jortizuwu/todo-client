import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
  console.log(navigation)

  return (
    <View style={styles.container}>
      <Text>MORE UWU</Text>
    </View>
  )
}

export default Home
