import useIsDarkMode from '../../../../shared/hooks/useDarkTheme'

const StylesStack = () => {
  const { backgroundStylePrimary, backgroundStyleSecondary } = useIsDarkMode()

  return {
    cardStyle: {
      flex: 1,
      backgroundColor: backgroundStylePrimary.backgroundColor,
    },
    headerMode: 'screen',
    headerTintColor: backgroundStylePrimary.backgroundColor,
    headerStyle: {
      backgroundColor: backgroundStyleSecondary.backgroundColor,
      elevation: 0,
      shadowOpacity: 0,
    },
    presentation: 'transparentModal',
  }
}

export default StylesStack
