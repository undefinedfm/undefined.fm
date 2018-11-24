import * as React from 'react';
import { theme } from '../theme';
import { Row, Block, Column } from 'glamor/jsxstyle';
import { NavLink } from './Nav/NavLink';
import { LINKS } from '../constants';

export interface FooterProps {}

export const Footer: React.SFC<FooterProps> = props => {
  return (
    <Block
      component="footer"
      props={{ role: 'contentinfo', 'aria-label': 'Footer', id: 'footer' }}
      // background={theme.color.offWhiteLightest}
      padding="4rem 2rem"
      textAlign="center"
    >
      <Column
        margin="0 auto 2rem"
        maxWidth={400}
        css={{
          [theme.media.medium]: {
            maxWidth: 540,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        }}
      >
        {LINKS.map(item => (
          <NavLink key={`footer-${item.text}`} {...item} />
        ))}
      </Column>
      <Block fontSize=".8rem" color={theme.color.gray}>
        Copyright © 2018 The Palmer Group.
      </Block>
    </Block>
  );
};

(Footer as any).displayName = 'Footer';
