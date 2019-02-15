import * as React from 'react';
import { css } from 'glamor';
import { Link } from 'gatsby';
import { rhythm } from '../lib/typography';
import { theme } from '../lib/theme';

const stripe = {
  top: 0,
  left: 0,
  right: 0,
  zIndex: 9999,
  height: 4,
  backgroundImage: `linear-gradient(left, #00FFF4 0%, #DB00FF 100%)`,
};

export function Nav() {
  return (
    <div
      style={{
        height: 80,
        width: '100%',
      }}
    >
      <div {...css(stripe)} />
      <div
        {...css({
          padding: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <Link
          to="/"
          {...css({
            fontFamily: `'Lazer', sans-serif`,
            fontSize: rhythm(1.5),
            textDecoration: 'none',
            color: theme.color.white,
          })}
        >
          Undefined
          {/* <span
            {...css({
              display: 'inline-block',
              marginLeft: '-.25rem',
              marginRight: '.25rem',
            })}
          >
            .
          </span>
          <span {...css({ fontSize: rhythm(1) })}>fm</span> */}
        </Link>
        {/* <div
          {...css({
            display: 'none',
            [theme.media.medium]: { display: 'flex' },
          })}
        >
          {PODCAST_LINKS.map(i => (
            <img
              key={i.href}
              src={i.src}
              alt={i.text}
              {...css({
                borderRadius: 12,
                height: 36,
                display: 'block',
                width: 36,

                marginRight: '.5rem',
                boxShadow: `1px 1px 1px #000 inset`,
                background: '#fff',
                marginBottom: 0,
                verticalAlign: 'middle',
              })}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}
