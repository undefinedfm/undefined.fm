import * as React from 'react';
import { InlineBlock } from 'glamor/jsxstyle';
import { theme } from '../theme';

export interface SocialProps {}

export const Social: React.SFC<SocialProps> = props => {
  return (
    <>
      <InlineBlock
        component="a"
        color="#bbb"
        transition="color 200ms ease-out"
        hover={{
          color: theme.color.twitter,
        }}
        marginRight="1rem"
        props={{
          href: 'https://twitter.com/theundefinedio',
          target: '_blank',
          title: 'The Undefined Twitter',
        }}
      >
        <svg fill="currentColor" viewBox="0 0 24 24" height="20" width="20">
          <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z" />
        </svg>
      </InlineBlock>
      <InlineBlock
        component="a"
        color="#bbb"
        transition="color 200ms ease-out"
        hover={{
          color: theme.color.github,
        }}
        marginRight="1rem"
        props={{
          href: 'https://github.com/jaredpalmer',
          target: '_blank',
          title: 'Jared Palmer GitHub',
        }}
      >
        <svg fill="currentColor" viewBox="0 0 24 24" height="20" width="20">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      </InlineBlock>
      <InlineBlock
        component="a"
        color="#bbb"
        transition="color 200ms ease-out"
        hover={{
          color: theme.color.instagram,
        }}
        marginRight="1rem"
        props={{
          href: 'https://instagram.com/jaredpalmer',
          target: '_blank',
          title: 'Jared Palmer Instagram',
        }}
      >
        <svg fill="currentColor" viewBox="0 0 24 24" height="20" width="20">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
        </svg>
      </InlineBlock>
      <InlineBlock
        component="a"
        color="#bbb"
        transition="color 200ms ease-out"
        hover={{
          color: theme.color.facebook,
        }}
        marginRight="1rem"
        props={{
          href: 'https://facebook.com/jaredpalmer',
          target: '_blank',
          title: 'Jared Palmer Facebook',
        }}
      >
        <svg
          fill="currentColor"
          height="20px"
          width="10px"
          version="1.1"
          viewBox="0 0 9 18"
        >
          <path d="M9,0 L9,3.6 L7.2,3.6 C6.579,3.6 6.3,4.329 6.3,4.95 L6.3,7.2 L9,7.2 L9,10.8 L6.3,10.8 L6.3,18 L2.7,18 L2.7,10.8 L0,10.8 L0,7.2 L2.7,7.2 L2.7,3.6 C2.7,1.6117749 4.3117749,3.99680289e-16 6.3,0 L9,0 Z" />
        </svg>
      </InlineBlock>
      <InlineBlock
        component="a"
        color="#bbb"
        transition="color 200ms ease-out"
        hover={{
          color: theme.color.linkedin,
        }}
        marginRight="1rem"
        props={{
          href: 'https://www.linkedin.com/in/jaredlpalmer/',
          target: '_blank',
          title: 'Jared Palmer LinkedIn',
        }}
      >
        <svg fill="currentColor" height="20" width="20" viewBox="0 0 18 18">
          <path d="M18 18h-4v-6.75c0-1.06-1.19-1.94-2.25-1.94S10 10.19 10 11.25V18H6V6h4v2c.66-1.07 2.36-1.76 3.5-1.76 2.5 0 4.5 2.04 4.5 4.51V18zM4 18H0V6h4v12zM2 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
        </svg>
      </InlineBlock>
    </>
  );
};

(Social as any).displayName = 'Social';
