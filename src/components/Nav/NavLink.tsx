import * as React from 'react';
import { theme } from '../../lib/theme';
import { css } from 'glamor';

export const NavLink: React.SFC<any> = ({ text, hostRef, ...props }) => {
  return (
    <a
      ref={hostRef}
      {...css({
        textDecoration: 'none',
        fontWeight: '500',
        margin: '.5rem',
        color: theme.color.purple,
        textTransform: 'uppercase',
        fontSize: '.9rem',
        transition: 'color 200ms ease-in',
        '&:hover': {
          color: theme.color.white,
        },
      })}
      {...props}
    >
      {text}
    </a>
  );
};

NavLink.displayName = 'NavLink';
