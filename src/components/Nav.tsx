import * as React from 'react';
import { LogoMiami } from './LogoMiami';
import { css } from 'glamor';
import { Link } from 'gatsby';

export interface NavProps {}

export function Nav(props: NavProps) {
  return (
    <div
      style={{
        height: 80,
        width: '100%',
      }}
    >
      <div
        {...css({
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          height: 4,
          backgroundImage: `linear-gradient(left, #0ef 0%, #F249CF 100%)`,
        })}
      />
      <div
        {...css({
          padding: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <Link to="/">
          <LogoMiami size={0.75} />
        </Link>
      </div>
    </div>
  );
}

(Nav as any).displayName = 'Nav';
