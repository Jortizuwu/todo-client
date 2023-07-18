import React from 'react'
// import { StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import { Button } from 'native-base'

import HomeTodo from '../../../../screens/todo'
import { RootStackTodoParamList } from '../model'

const Stack = createNativeStackNavigator<RootStackTodoParamList>()

// function HeaderRight() {
//   return (
//     <View style={{ ...styles.headerRight }}>
//       <Button />
//     </View>
//   )
// }

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        // cardStyle: {
        //   flex: 1,
        //   backgroundColor: backgroundStylePrimary.backgroundColor,
        // },
        // headerMode: 'screen',
        // headerTintColor: textColorPrimary.color,
        // headerStyle: {
        //   backgroundColor: backgroundStylePrimary.backgroundColor,
        //   //   elevation: 0,
        //   //   shadowOpacity: 0,
        // },
        presentation: 'transparentModal',
      }}>
      <Stack.Screen
        name="HomeTodo"
        component={HomeTodo}
        options={{
          headerTitle: 'Todo',
          // headerRight: () => <HeaderRight />,
        }}
      />
      {/* <Stack.Screen
        name="DetailsTodo"
        component={DetailsScreen}
        options={{
          headerTitle: '',
          headerRight: () => <HeaderRight />,
        }}
      /> */}
    </Stack.Navigator>
  )
}

export default StackNavigator

// const styles = StyleSheet.create({
//   headerRight: {
//     width: 150,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
// })
