import { useColorMode } from 'native-base'
import { BaseTheme } from '../theme'

const useIsDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const backgroundStylePrimary = {
    backgroundColor:
      colorMode === 'dark'
        ? BaseTheme.colors.dark.primary
        : BaseTheme.colors.light.primary,
  }
  const backgroundStyleSecondary = {
    backgroundColor:
      colorMode === 'dark'
        ? BaseTheme.colors.dark.secondary
        : BaseTheme.colors.light.secondary,
  }

  const textColorPrimary = {
    color:
      colorMode === 'dark'
        ? BaseTheme.colors.dark.textPrimary
        : BaseTheme.colors.light.textPrimary,
  }
  const textColorSecondary = {
    color:
      colorMode === 'dark'
        ? BaseTheme.colors.dark.textSecondary
        : BaseTheme.colors.light.textSecondary,
  }
  return {
    backgroundStylePrimary,
    backgroundStyleSecondary,
    textColorPrimary,
    textColorSecondary,
    colorMode,
    toggleColorMode,
  }
}

export default useIsDarkMode
