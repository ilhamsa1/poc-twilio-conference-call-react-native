const colors = {
  darkGrey: '#324452',
  grey: '#4E6877',
  greyHover: '#5E7887',
  silver: '#F5F6F8',
  blue: '#7EA6EA',
  green: '#178E23',
  red: '#E30C07',
  white: '#FFFFFF',
  purple: '#443765',
  softPurple: '#8472B2',
  darkSilver: 'silver',
  black: '#3B3B3B',
  gold: '#E9BF3C',

  transparent: 'rgba(0, 0, 0, 0)',
  redTransparent: 'rgba(207, 0, 15, 0.3)',
  yellowTransparent: 'rgba(252, 204, 2, 0.3)',
}

const appColors = {
  primary: colors.purple,
  primaryTransparent: 'rgba(100, 88, 122, 0.2)',
  accent: colors.gold,
  link: colors.purple,
  secondary: colors.gold,
  border: colors.silver,
  background: colors.white,
  lightbox: 'rgba(255, 255, 255, 0.5)',
  success: colors.green,
  error: colors.red,
  pending: colors.softPurple,
  completed: colors.gold,
  cancel: colors.red,
  text: colors.black,
}

export default {
  ...colors,
  ...appColors,
}
