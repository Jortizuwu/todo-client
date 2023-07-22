import React from 'react'
import { Icon } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { RootTabsParamList, TABS } from './model'
import useIsDarkMode from '../../../../shared/hooks/useDarkTheme'
import Settings from '../../../screens/settings'
import Home from '../../../screens/home'
import Todos from '../../../screens/todos'

const TABS_ROUTES: TABS[] = [
  {
    id: 'home',
    name: 'Home',
    component: Home,
    Icon: (
      <Icon
        alignContent="center"
        alignItems="center"
        size="6"
        as={<Ionicons name="home-outline" />}
      />
    ),
  },
  {
    id: 'todos',
    name: 'Todos',
    component: Todos,
    Icon: (
      <Icon
        alignContent="center"
        alignItems="center"
        size="6"
        as={<Ionicons name="layers-outline" />}
      />
    ),
  },
  {
    id: 'settings',
    name: 'Settings',
    component: Settings,
    Icon: (
      <Icon
        alignContent="center"
        alignItems="center"
        size="6"
        as={<Ionicons name="settings-outline" />}
      />
    ),
  },
]

const Tab = createMaterialBottomTabNavigator<RootTabsParamList>()

function TabNavigation() {
  const { backgroundStyleSecondary, textColorPrimary, textColorSecondary } =
    useIsDarkMode()

  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{
        backgroundColor: backgroundStyleSecondary.backgroundColor,
        height: 70,
      }}
      sceneAnimationType="shifting"
      sceneAnimationEnabled
      activeColor={textColorSecondary.color}
      inactiveColor={textColorPrimary.color}>
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
