import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeTodo from '../../../../screens/todos'
import TodoDetails from '../../../../screens/todo'
import { RootStackTodoParamList } from '../model'
import useIsDarkMode from '../../../../../shared/hooks/useDarkTheme'

const Stack = createStackNavigator<RootStackTodoParamList>()

function StackNavigator() {
  const { backgroundStylePrimary, backgroundStyleSecondary, textColorPrimary } =
    useIsDarkMode()

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          flex: 1,
          backgroundColor: backgroundStylePrimary.backgroundColor,
        },
        headerMode: 'screen',
        headerTintColor: textColorPrimary.color,
        headerStyle: {
          backgroundColor: backgroundStyleSecondary.backgroundColor,
          elevation: 0,
          shadowOpacity: 0,
        },
        presentation: 'transparentModal',
      }}>
      <Stack.Screen
        name="TodoScreen"
        component={HomeTodo}
        options={{
          headerTitle: 'Todos',
          // headerRight: () => <HeaderRight />,
        }}
      />
      <Stack.Screen
        name="TodoDetails"
        component={TodoDetails}
        options={{
          headerTitle: 'Todo',
          // headerRight: () => <HeaderRight />,
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
