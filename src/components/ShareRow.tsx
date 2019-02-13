import * as React from 'react';
import { css } from 'glamor';
import { theme } from '../lib/theme';
import { copyToClipboard } from './copyToClipboard';
import { rhythm } from '../lib/typography';
import { IconFacebook } from './IconFacebook';
import { IconTwitter } from './IconTwitter';
import * as qs from 'qs';
import { windowPopup } from './windowPopup';

export interface ShareRowProps {
  title?: string;
  media?: string;
  url?: string;
  author?: string;
}

const buttonStyles = {
  padding: `${rhythm(0.4)} ${rhythm(1)}`,
  marginRight: '1rem',
  textDecoration: 'none',
  border: 0,
  borderColor: 'transparent',
  borderRadius: 4,
  color: theme.color.white,
  background: theme.color.grayDarker,
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  WebkitAppearance: 'none',
  transition: 'all 100ms ease-out',
  '&:hover': {
    opacity: 0.95,
  },
  '&:active,&:hover:active': {
    transform: 'scale(.98)',
  },
};
export function ShareRow(props: ShareRowProps) {
  const { title, author, media } = props;
  const url = props.url
    ? props.url
    : typeof window !== 'undefined'
    ? window.location.href
    : '';
  // expensive computed props
  const fbUrl =
    'https://www.facebook.com/sharer/sharer.php?' +
    qs.stringify({
      u: url,
    });
  const twUrl =
    'https://twitter.com/intent/tweet?' +
    qs.stringify({
      text: title,
      url,
      via: author,
    });
  // const pinUrl =
  //   'https://www.pinterest.com/pin/create/button/?' +
  //   qs.stringify({
  //     description: title,
  //     url,
  //     via: author,
  //     media,
  //   });
  // const mailUrl =
  //   'mailto:?' +
  //   qs.stringify({
  //     subject: title,
  //     body: url,
  //   });

  const handleShare = (href: string) => () => {
    windowPopup(href, 500, 300);
  };

  return (
    <div
      {...css({
        margin: `${rhythm(1)} 0`,
        '& > a, & > button': {
          display: 'block',
          width: '100%',
          marginBottom: rhythm(0.5),
        },
        [theme.media.small]: {
          '& a, & > button': {
            display: 'inline-block',
            flex: 1,
          },
        },
        [theme.media.medium]: {
          display: 'flex',
          alignItems: 'center',
        },
      })}
    >
      <button
        onClick={handleShare(twUrl)}
        {...css({ ...buttonStyles, background: theme.color.twitter })}
      >
        <IconTwitter
          {...css({
            preserveAspectRatio: 'xMidYMid meet',
            verticalAlign: 'middle',
            marginRight: rhythm(0.5),
          })}
        />
        Tweet
      </button>
      <button
        onClick={handleShare(fbUrl)}
        {...css({ ...buttonStyles, background: theme.color.facebook })}
      >
        <IconFacebook
          {...css({
            height: 20,
            width: 20,
            preserveAspectRatio: 'xMidYMid meet',
            verticalAlign: 'middle',
            marginRight: rhythm(0.5),
          })}
        />
        Share
      </button>
      <button
        onClick={() => copyToClipboard(window.location.href)}
        {...css({ ...buttonStyles, background: theme.color.grayDarker })}
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          {...css({
            height: 20,
            preserveAspectRatio: 'xMidYMid meet',
            verticalAlign: 'middle',
            marginRight: rhythm(0.5),
          })}
        >
          <title>link</title>
          <g
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth="2"
            fill="#fff"
            stroke="#fff"
          >
            <path
              fill="none"
              strokeMiterlimit="10"
              d="M13.4,10.6 L13.4,10.6c2,2,2,5.1,0,7.1l-2.8,2.8c-2,2-5.1,2-7.1,0l0,0c-2-2-2-5.1,0-7.1L6,11"
            />{' '}
            <path
              fill="none"
              stroke="#fff"
              strokeMiterlimit="10"
              d="M10.6,13.4L10.6,13.4 c-2-2-2-5.1,0-7.1l2.8-2.8c2-2,5.1-2,7.1,0l0,0c2,2,2,5.1,0,7.1L18,13"
            />
          </g>
        </svg>
        Copy URL
      </button>
    </div>
  );
}
