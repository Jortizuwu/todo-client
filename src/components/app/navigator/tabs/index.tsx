import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { AddIcon } from 'native-base'
import { TodoStack } from '../stack'
import { RootTabsParamList, TABS } from './model'

const TABS_ROUTES: TABS[] = [
  {
    id: 'todos',
    name: 'Todos',
    component: TodoStack,
    Icon: <AddIcon />,
  },
  {
    id: 'updates',
    name: 'Updates',
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
  return (
    <Tab.Navigator
      initialRouteName="Todos"
      // barStyle={{
      //   backgroundColor: backgroundStyleSecondary.backgroundColor,
      // }}
      // inactiveColor={textColorPrimary.color}
      // activeColor={textColorSecondary.color}
    >
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
