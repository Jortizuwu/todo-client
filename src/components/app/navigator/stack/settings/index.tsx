import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { RootStackSettingsParamList } from '../model'
import SettingScreen from '../../../../screens/settings'
import useIsDarkMode from '../../../../../shared/hooks/useDarkTheme'

const Stack = createStackNavigator<RootStackSettingsParamList>()
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
        name="SettingScreen"
        component={SettingScreen}
        options={{
          headerTitle: 'Settings',
          // headerRight: () => <HeaderRight />,
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
