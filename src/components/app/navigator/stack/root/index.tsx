import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HStack, Icon, IconButton } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons'

import TabNavigation from '../../tabs'
import Todo from '../../../../screens/todo'
import { RootStackRootParamList } from '../model'
import useIsDarkMode from '../../../../../shared/hooks/useDarkTheme'

const Stack = createStackNavigator<RootStackRootParamList>()

function HeaderRight({ color = 'red.400' }: { color: string | undefined }) {
  return (
    <HStack>
      <IconButton
        variant="unstyled"
        icon={
          <Icon as={<Ionicons name="search-sharp" />} size="lg" color={color} />
        }
      />
      <IconButton
        variant="unstyled"
        icon={
          <Icon
            as={<Ionicons name="ellipsis-vertical" />}
            size="lg"
            color={color}
          />
        }
      />
    </HStack>
  )
}

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
    </Stack.Navigator>
  )
}

export default StackNavigator
