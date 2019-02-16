import * as React from 'react';
import Helmet from 'react-helmet';

export interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  children?: any;
  isEpisode?: boolean;
  slug?: string;
  meta?: any[];
}

// @see https://github.com/nfl/react-helmet/issues/373
// Use arrays. lol.
export const Head: React.SFC<HeadProps> = ({
  title,
  image,
  description,
  children,
  slug,
  meta,
  isEpisode = false,
  ...rest
}) => {
  return (
    <>
      <div className="skipnav">
        <a href="#maincontent">Skip to main content</a>{' '}
        <a href="#footer">Skip to footer</a>
      </div>

      <Helmet
        title={title}
        meta={
          [
            { name: 'copyright', content: 'The Palmer Group' },
            { property: 'og:type', content: 'website' },
            !!title && {
              name: 'twitter:title',
              content: title,
            },
            !!title && { property: 'og:title', content: title },
            { name: 'twitter:site', content: '@theundefinedio' },
            !!description && {
              name: 'description',
              content: description,
            },
            !!description && {
              name: 'twitter:description',
              content: description,
            },
            !!description && {
              property: 'og:description',
              content: description,
            },
            {
              property: 'og:url',
              content: `https://undefined.fm${slug}`,
            },
            {
              property: 'og:locale',
              content: `en_US`,
            },
            {
              name: 'twitter:card',
              content: isEpisode ? 'player' : 'summary',
            },
            {
              name: 'twitter:image',
              content:
                image ||
                'https://media.simplecast.com/podcast/image/8781/1549548387-artwork.jpg',
            },
            {
              property: 'og:image',
              content:
                image ||
                'https://media.simplecast.com/podcast/image/8781/1549548387-artwork.jpg',
            },
            {
              name: 'apple-itunes-app',
              content: 'app-id=1451541555',
            },
          ]
            .concat(meta as any)
            .filter(Boolean) as any[]
        }
        {...rest}
      >
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
