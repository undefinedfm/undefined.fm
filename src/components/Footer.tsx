import * as React from 'react';
import { theme } from '../theme';
import { Row, Block, Column } from 'glamor/jsxstyle';
import { NavLink } from './Nav/NavLink';
import { LINKS } from '../constants';
import { Container } from './Container';

export interface FooterProps {}

export const Footer: React.SFC<FooterProps> = props => {
  return (
    <Block
      component="footer"
      props={{ role: 'contentinfo', 'aria-label': 'Footer', id: 'footer' }}
      padding="4rem 0"
      textAlign="center"
    >
      <Container>
        <Column
          margin="0 auto 2rem"
          css={{
            [theme.media.medium]: {
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
          Copyright © 2019 The Palmer Group.
        </Block>
      </Container>
    </Block>
  );
};

(Footer as any).displayName = 'Footer';
