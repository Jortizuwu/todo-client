import { extendTheme } from 'native-base'

const BaseTheme = extendTheme({
  components: {
    Text: {
      defaultProps: {
        fontSize: 'md',
      },
    },
  },

  colors: {
    slateGray: {
      50: '#f3f2f2',
      100: '#d8d8d8',
      200: '#bebebe',
      300: '#a3a3a3',
      400: '#898989',
      500: '#6f6f6f',
      600: '#565656',
      700: '#3e3e3e',
      800: '#252525',
      900: '#0d0c0d',
    },
    dark: {
      100: '#202020',
      primary: '#202020',
      secondary: '#171717',
      textPrimary: '#fff',
      textSecondary: '#FFAFCC',
      textTertiary: '#FFD100',
    },
    light: {
      100: '#F3F4F8',
      primary: '#F3F4F8',
      secondary: '#F9F9F9',
      textPrimary: '#000',
      textSecondary: '#FFAFCC',
      textTertiary: '#FFD100',
    },
  },
  Pressable: {
    cursor: 'pointer',
  },

  config: {
    // Changing initialColorMode to 'dark'
    // initialColorMode: 'dark',
  },
})

export default BaseTheme
