import * as React from 'react';
import podcast from './apple-podcasts.png';
import google from './google-podcasts.png';
import googlePlay from './google-play.png';
import overcast from './overcast.png';
import pocket from './pocket-casts.png';
import anchor from './anchor.jpg';
import castro from './castro.svg';
import spotify from './spotify.png';
import rss from './rss.png';
import { css } from 'glamor';
import { theme } from '../lib/theme';
import { rhythm } from '../lib/typography';
export interface ListenProps {}

export const PODCAST_LINKS: ActionLinkProps[] = [
  {
    src: podcast,
    href: 'https://geo.itunes.apple.com/ca/podcast/feed/id1451541555',
    text: 'Apple Podcasts',
  },
  {
    src: spotify,
    href: 'https://open.spotify.com/show/6Zwfp98CtaR6Wt1qklemEM',
    text: 'Spotify',
  },
  {
    src: google,
    href:
      'https://www.google.com/podcasts?feed=aHR0cHM6Ly9yc3Muc2ltcGxlY2FzdC5jb20vcG9kY2FzdHMvODc4MS9yc3M%3D',
    text: 'Google Podcast',
  },
  {
    src: pocket,
    href: 'http://pca.st/itunes/1451541555',
    text: 'PocketCasts',
  },
  {
    src: googlePlay,
    href:
      'https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&apn=com.google.android.music&link=https://play.google.com/music/m/Iuluvwqlkrf5tqh75f5b4x7xxym?t%3DThe_Undefined_Podcast%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16',
    text: 'Google Play',
  },
  {
    src: anchor,
    href: 'https://anchor.fm/the-undefined-podcast',
    text: 'Anchor',
  },
  {
    src: overcast,
    href: 'https://overcast.fm/itunes1451541555',
    text: 'Overcast',
  },
  {
    src: castro,
    href: 'https://castro.fm/itunes/1451541555',
    text: 'Castro',
  },
  {
    src: rss,
    href: 'https://rss.simplecast.com/podcasts/8781/rss',
    text: 'RSS Feed',
  },
];

export function Listen(props: ListenProps) {
  return (
    <div
      {...css({
        display: 'flex',
        color: '#fff',
        alignItems: 'center',
        [theme.media.medium]: {
          justifyContent: 'space-between',
        },
        flexWrap: 'wrap',
        margin: '0 auto',
      })}
    >
      {PODCAST_LINKS.map(i => (
        <ActionLink key={i.href} {...i} />
      ))}
    </div>
  );
}
interface ActionLinkProps {
  src: string;
  href: string;
  text: string;
}

export function ActionLink({ src, href, text }: ActionLinkProps) {
  return (
    <a
      href={href}
      {...css({
        display: 'flex',
        color: 'hsla(0,100%,100%,0.8)',
        margin: rhythm(0.25),
        width: 'auto',
        [theme.media.medium]: {
          width: '100%',
          margin: 0,
          marginBottom: rhythm(0.25),
        },
        alignItems: 'center',
        textDecoration: 'none',
        transition: `background 100ms ease-out`,
        borderRadius: 12,
        padding: `${rhythm(0.25)} ${rhythm(0.3)}`,
        '&:hover': {
          background: '#000',
        },
      })}
    >
      <img
        src={src}
        alt={text}
        {...css({
          borderRadius: 12,
          height: 24,
          display: 'block',
          width: 24,
          [theme.media.medium]: {
            height: 40,
            width: 40,
          },
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
