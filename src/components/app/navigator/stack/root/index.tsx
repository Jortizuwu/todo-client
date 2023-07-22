import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TabNavigation from '../../tabs'
import Todo from '../../../../screens/todo'
import { RootStackRootParamList } from '../model'
import useIsDarkMode from '../../../../../shared/hooks/useDarkTheme'
import HeaderRight from './Components/Header'
import Login from '../../../../screens/auth'
import usePersistedStore from '../../../../../store'

const Stack = createStackNavigator<RootStackRootParamList>()

function StackNavigator() {
  const { backgroundStylePrimary, backgroundStyleSecondary, textColorPrimary } =
    useIsDarkMode()

  const user = usePersistedStore(state => state.user)

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
        name="Root"
        component={TabNavigation}
        options={{
          headerTitle: 'Root',
          headerShown: false,
          // headerRight: () => <HeaderRight />,
        }}
      />
      <Stack.Screen
        name="TodoDetails"
        component={Todo}
        options={{
          headerTitle: 'Todo',
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: ({ tintColor }) => <HeaderRight color={tintColor} />,
        }}
      />
      {!user && (
        <Stack.Screen
          name="Auth"
          component={Login}
          options={{
            headerTitle: 'auth',
          }}
        />
      )}
    </Stack.Navigator>
  )
}

export default StackNavigator
