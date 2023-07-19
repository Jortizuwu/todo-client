const COLORS = {
  // DARK
  darkPrimary: '#202020',
  darkSecondary: '#171717',
  textDarkPrimary: '#fff',
  textDarkSecondary: '#FFAFCC',
  textDarkTertiary: '#FFD100',

  // light
  lightPrimary: '#F3F4F8',
  lightSecondary: '#F9F9F9',
  textLightPrimary: '#000',
  textLightSecondary: '#FFAFCC',
  textLightTertiary: '#FFD100',

  gray: '#838292',
  gray2: '#C1C0C8',
}

const FONT = {
  regular: 'DMRegular',
  medium: 'DMMedium',
  bold: 'DMBold',
}

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
}

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#737373',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
}

export { COLORS, FONT, SIZES, SHADOWS }
