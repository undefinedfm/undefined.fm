import Typography from 'typography';
import bootstrapTheme from 'typography-theme-bootstrap';
import { theme } from '../lib/theme';

// tslint:disable-next-line:no-shadowed-variable
bootstrapTheme.overrideThemeStyles = ({ rhythm }: any, options: any) => ({
  'h1,h2,h3,h4,h5,h6': {
    lineHeight: 1,
    letterSpacing: '-.03em',
  },
  'h1,h2,h3,h4': {
    lineHeight: 1.25,
    marginTop: rhythm(1),
    marginBottom: rhythm(1 / 2),
  },
  'p,ol,ul,li': {
    color: 'hsla(0,100%,100%,0.9)',
  },
  a: {
    color: theme.color.purple,
  },
});
bootstrapTheme.headerColor = theme.color.white;
bootstrapTheme.bodyColor = 'hsla(0,100%,100%,0.9)';
bootstrapTheme.headerWeight = 700;
bootstrapTheme.baseFontSize = '20px';
bootstrapTheme.bodyFontFamily = [
  'DIN',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  'sans-serif',
];
bootstrapTheme.headerFontFamily = [
  'DIN',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  'sans-serif',
];
bootstrapTheme.baseLineHeight = 1.55;
bootstrapTheme.headerLineHeight = 1.1;

const typography = new Typography(bootstrapTheme);
// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
