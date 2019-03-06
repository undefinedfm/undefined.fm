import * as React from 'react';
import { rhythm, scale } from '../lib/typography';
import { theme } from '../lib/theme';
import { css } from 'glamor';
export function Header(props: any) {
  return (
    <div {...props}>
      <h1
        {...css({
          ...scale(1),
          color: theme.color.white,
          [theme.media.medium]: { marginTop: rhythm(2) },
        })}
      >
        The Undefined Podcast
      </h1>
      <p
        {...css({
          marginBottom: rhythm(1),
          ...scale(0.3),
          color: theme.color.grayLightest,
          opacity: 0.9,
        })}
      >
        The only engineering podcast with a 2 drink minimum. Hosted by{' '}
        <a
          {...css({ textDecoration: 'none', fontWeight: 700 })}
          href="http://twitter.com/jaredpalmer"
        >
          Jared Palmer
        </a>{' '}
        and{' '}
        <a
          {...css({ textDecoration: 'none', fontWeight: 700 })}
          href="http://twitter.com/ken_wheeler"
        >
          Ken Wheeler
        </a>
        .
      </p>
    </div>
  );
}
