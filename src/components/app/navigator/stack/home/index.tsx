import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// import { HStack, Icon, IconButton } from 'native-base'
// import { MaterialIcons } from '@expo/vector-icons'

import Home from '../../../../screens/home'
import { RootStackHomeParamList } from '../model'
import useIsDarkMode from '../../../../../shared/hooks/useDarkTheme'

const Stack = createStackNavigator<RootStackHomeParamList>()

// const HeaderRight = () => {
//   return (
//     <HStack>
//       <IconButton
//         icon={
//           <Icon as={MaterialIcons} name="favorite" size="sm" color="white" />
//         }
//       />
//       <IconButton
//         icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />}
//       />
//       <IconButton
//         icon={
//           <Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />
//         }
//       />
//     </HStack>
//   )
// }

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
        name="HomeScreen"
        component={Home}
        options={{
          headerTitle: 'Home',
          headerShown: false,
          // headerRight: () => <HeaderRight />,
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
