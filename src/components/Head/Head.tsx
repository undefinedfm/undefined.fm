import * as React from 'react';
import Helmet from 'react-helmet';

export interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  children?: any;
}
// @see https://github.com/nfl/react-helmet/issues/373
// Use arrays. lol.
export const Head: React.SFC<HeadProps> = ({
  title,
  image,
  description,
  children,
  ...rest
}) => {
  return (
    <>
      <div className="skipnav">
        <a href="#maincontent">Skip to main content</a>{' '}
        <a href="#footer">Skip to footer</a>
      </div>

      <Helmet
        meta={[
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
          image && {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
          {
            name: 'twitter:image',
            content: '/og_image.png',
          },
          {
            name: 'og:image',
            content: '/og_image.png',
          },
        ].filter(Boolean)}
        {...rest}
      >
        {title ? <title>{title}</title> : null}
        {children}
      </Helmet>
    </>
  );
};

Head.displayName = 'Head';
