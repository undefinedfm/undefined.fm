import * as React from 'react';
import Helmet from 'react-helmet';

export interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  children?: any;
  slug?: string;
}
// @see https://github.com/nfl/react-helmet/issues/373
// Use arrays. lol.
export const Head: React.SFC<HeadProps> = ({
  title,
  image,
  description,
  children,
  slug,
  ...rest
}) => {
  return (
    <>
      <div className="skipnav">
        <a href="#maincontent">Skip to main content</a>{' '}
        <a href="#footer">Skip to footer</a>
      </div>

      <Helmet
        meta={
          [
            { name: 'copyright', content: 'The Palmer Group' },
            { name: 'og:type', content: 'website' },
            title && {
              name: 'twitter:title',
              content: title,
            },
            title && { name: 'og:title', content: title },
            { name: 'twitter:site', content: '@theundefinedio' },
            description && {
              name: 'description',
              content: description,
            },
            description && {
              name: 'twitter:description',
              content: description,
            },
            description && {
              name: 'og:description',
              content: description,
            },
            {
              property: 'og:url',
              content: `https://undefined.fm${slug}`,
            },
            {
              property: 'og:site_name',
              content: `The Undefined Podcast`,
            },
            {
              property: 'og:locale',
              content: `en_US`,
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:image',
              content:
                image ||
                'https://media.simplecast.com/podcast/image/8781/1549548387-artwork.jpg',
            },
            {
              name: 'og:image',
              content:
                image ||
                'https://media.simplecast.com/podcast/image/8781/1549548387-artwork.jpg',
            },
          ].filter(Boolean) as any[]
        }
        {...rest}
      >
        {title ? <title>{title}</title> : null}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Undefined Podcast RSS"
          href="https://rss.simplecast.com/podcasts/8781/rss.xml"
        />
        {children}
      </Helmet>
    </>
  );
};

Head.displayName = 'Head';
