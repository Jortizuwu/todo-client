import React from 'react'
import { AddIcon } from 'native-base'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { TodoStack, HomeStack } from '../stack'
import { RootTabsParamList, TABS } from './model'
import useIsDarkMode from '../../../../shared/hooks/useDarkTheme'

const TABS_ROUTES: TABS[] = [
  {
    id: 'home',
    name: 'Home',
    component: HomeStack,
    Icon: <AddIcon />,
  },
  {
    id: 'todos',
    name: 'Todos',
    component: TodoStack,
    Icon: <AddIcon />,
  },
  {
    id: 'history',
    name: 'History',
    component: TodoStack,
    Icon: <AddIcon />,
  },
]

const Tab = createMaterialBottomTabNavigator<RootTabsParamList>()

function TabNavigation() {
  const { backgroundStyleSecondary, textColorPrimary, textColorSecondary } =
    useIsDarkMode()

  return (
    <Tab.Navigator
      initialRouteName="Todos"
      barStyle={{
        backgroundColor: backgroundStyleSecondary.backgroundColor,
      }}
      activeColor={textColorPrimary.color}
      inactiveColor={textColorSecondary.color}>
      {TABS_ROUTES.map(val => (
        <Tab.Screen
          key={val.id}
          name={val.name}
          component={val.component}
          options={{
            tabBarLabel: val.name,
            tabBarIcon: () => val.Icon,
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

export default TabNavigation
