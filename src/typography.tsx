import Typography from 'typography';
import bootstrapTheme from 'typography-theme-bootstrap';
import { theme } from '@theme';

// tslint:disable-next-line:no-shadowed-variable
bootstrapTheme.overrideThemeStyles = ({ rhythm }: any, options: any) => ({
  'h1,h2,h3,h4,h5,h6': {
    lineHeight: 1,
  },
  'h1,h2,h3,h4': {
    lineHeight: 1.25,
    marginTop: rhythm(1),
    marginBottom: rhythm(1 / 2),
  },
  'p,ol,ul,li': {
    color: 'hsla(0,100%,100%,0.8)',
  },
  a: {
    color: '#ff50d4',
    textDecoration: 'underline',
  },
});
bootstrapTheme.headerColor = 'hsla(0,100%,100%,0.9)';
bootstrapTheme.bodyColor = 'hsla(0,100%,100%,0.8)';
bootstrapTheme.headerWeight = 800;
bootstrapTheme.baseFontSize = '18px';
bootstrapTheme.baseLineHeight = 1.55;
bootstrapTheme.headerLineHeight = 1.4;

const typography = new Typography(bootstrapTheme);
// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
