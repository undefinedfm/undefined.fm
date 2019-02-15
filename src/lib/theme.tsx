const VerticalRhythm = require('compass-vertical-rhythm');

const { rhythm } = VerticalRhythm({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
});

const bold = 800;

const shadow = {
  medium: '0 5px 15px rgba(0,0,0,.07)',
  large: '0 15px 35px rgba(50,50,93,.1)',
};
const color = {
  dark: '#1B2125',
  white: '#fff',
  // purple: '#C86DD7',
  purple: '#f759ff',
  pink: '#ff50d4',
  black: '#000',
  blue: '#80B9FE',
  red: '#CC0000',
  yellow: '#F8DC57',
  green: '#1CF5BA',
  grayDarker: '#222',
  gray: '#555',
  grayLighter: '#8888',
  grayLightest: '#ddd',
  offWhiteLightest: '#F7FBFB',
  offWhiteLighter: '#EFF7F8',
  offWhite: '#EFEFEF',
  twitter: '#1da1f2',
  github: '#000',
  instagram: '#ed4956',
  facebook: '#4267b2',
  linkedin: '#0073b1',
  dribbble: '#c142a0',
};

const media = {
  small: '@media (min-width: 500px)',
  medium: '@media (min-width: 800px)',
  large: '@media (min-width: 1200px)',
};

export const theme = {
  rhythm,
  media,
  color,
  shadow,
  bold,
};
