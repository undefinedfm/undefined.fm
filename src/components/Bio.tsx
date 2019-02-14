import * as React from 'react';

import { css } from 'glamor';
import { theme } from '../lib/theme';
import { rhythm } from '../lib/typography';

interface BioProps {
  name: string;
  avatarUrl: string;
  twitterHandle: string;
  byline?: React.ReactNode;
}

export function Bio({ name, avatarUrl, byline, twitterHandle }: BioProps) {
  return (
    <a
      href={`https://twitter.com/${twitterHandle}`}
      target="_blank"
      rel="noopener"
      {...css({
        display: 'flex',
        alignItems: 'center',
        padding: rhythm(0.5),
        borderRadius: 12,
        marginBottom: rhythm(0.5),
        transition: `background 100ms ease-out`,
        ':hover': {
          textDecoration: 'none',
          background: '#000',
        },
      })}
    >
      <div>
        <img
          src={avatarUrl}
          alt={name}
          {...css({
            display: 'block',
            borderRadius: 40,
            height: 64,
            width: 64,
            marginBottom: 0,
            verticalAlign: 'middle',
            filter: 'grayscale(100%)',
          })}
        />
      </div>
      <div {...css({ marginLeft: '1rem', marginBottom: 0, padding: 0 })}>
        <div
          {...css({
            color: theme.color.white,
            fontWeight: 700,
            marginBottom: rhythm(0.1),
          })}
        >
          {name}
        </div>
        <div>@{twitterHandle}</div>
      </div>
    </a>
  );
}
