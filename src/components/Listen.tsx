import * as React from 'react';
import podcast from './apple-podcasts.png';
import google from './google-podcasts.png';
import overcast from './overcast.png';
import pocket from './pocket-casts.png';
import rss from './rss.png';
import { css } from 'glamor';
import { theme } from '../lib/theme';
import { rhythm } from '../lib/typography';
export interface ListenProps {}

export function Listen(props: ListenProps) {
  return (
    <div
      {...css({
        display: 'flex',
        color: '#fff',
        alignItems: 'center',
        flexWrap: 'wrap',
      })}
    >
      <ActionLink src={podcast} href="" text="Apple Podcasts" />
      <ActionLink src={google} href="" text="Google Podcasts" />
      <ActionLink src={overcast} href="" text="Overcast" />
      <ActionLink src={pocket} href="" text="Pocket Casts" />
      <ActionLink src={rss} href="" text="RSS Feed" />
    </div>
  );
}

function ActionLink({
  src,
  href,
  text,
}: {
  src: string;
  href: string;
  text: string;
}) {
  return (
    <a
      href=""
      {...css({
        display: 'flex',
        color: '#fff',
        width: '100%',
        [theme.media.small]: {
          width: 250,
        },
        [theme.media.medium]: {
          width: 200,
        },
        alignItems: 'center',
        textDecoration: 'none',
        transition: `background 100ms ease-out`,
        borderRadius: 12,
        padding: `${rhythm(0.25)} ${rhythm(0.3)}`,
        ':hover': {
          background: '#111',
        },
      })}
    >
      <img
        src={src}
        alt={text}
        {...css({
          borderRadius: 12,
          height: 40,
          display: 'block',
          width: 40,
          boxShadow: `1px 1px 1px #000 inset`,
          background: '#fff',
          marginBottom: 0,
          verticalAlign: 'middle',
        })}
      />
      <span
        {...css({
          display: 'block',
          fontSize: rhythm(0.65),
          marginLeft: rhythm(0.5),
        })}
      >
        {text}
      </span>
    </a>
  );
}
