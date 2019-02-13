import * as React from 'react';
import { Link } from 'gatsby';
import { Block } from 'glamor/jsxstyle';
import { theme } from '../../theme';

export const NavLink: React.SFC<any> = ({ text, hostRef, ...props }) => {
  return (
    <Block
      component="a"
      props={{ ref: hostRef }}
      textDecoration="none"
      fontWeight="500"
      margin=".5rem"
      color="#ff50d4"
      textTransform="uppercase"
      fontSize=".9rem"
      transition="color 200ms ease-in"
      css={{
        '&:hover': {
          color: theme.color.purple,
        },
      }}
      {...props}
    >
      {text}
    </Block>
  );
};

NavLink.displayName = 'NavLink';
