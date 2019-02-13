import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { Footer } from '@components/Footer';
import { scale, rhythm } from '../lib/typography';
import { theme } from '../lib/theme';
import { css } from 'glamor';
import { Container } from '@components/Container';
import { format } from 'date-fns';
import { Logo } from '@components/Logo';
import { Block } from 'glamor/jsxstyle';
import { Listen } from '@components/Listen';

/**
 * Slugify a string
 * @param s Any string
 */
function toSlug(s: string) {
  if (!s) {
    return '';
  }
  s = s.toLowerCase().trim();
  s = s.replace(/ & /g, ' and ');
  s = s.replace(/[ ]+/g, '-');
  s = s.replace(/[-]+/g, '-');
  s = s.replace(/[^a-z0-9-]+/g, '');
  return s;
}

function Header(props: any) {
  return (
    <div {...props}>
      <h1
        {...css({
          color: '#fff',
          [theme.media.medium]: { marginTop: rhythm(2) },
        })}
      >
        The Undefined Podcast
      </h1>
      <p {...css({ marginBottom: rhythm(2) })}>
        Full Stack Developers{' '}
        <a href="http://twitter.com/jaredpalmer">Jared Palmer</a> and{' '}
        <a href="http://twitter.com/ken_wheeler">Ken Wheeler</a> talk about
        software development, JavaScript, React, CSS, developer tooling,
        crossbows, debauchery, and shenanigans.
      </p>
    </div>
  );
}
export default class Home extends React.Component<any, any> {
  render() {
    return (
      <div>
        <div
          {...css({
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            height: 4,
            backgroundImage: `linear-gradient(left, #0ef 0%, #F249CF 100%)`,
          })}
        />
        <div
          {...css({
            maxWidth: 675,
            [theme.media.medium]: { maxWidth: 968 },
            margin: '0 auto',
            padding: '0 1rem',
          })}
        >
          <div {...css({ [theme.media.medium]: { display: 'flex' } })}>
            <div {...css({ margin: '0 auto' })}>
              <div
                {...css({
                  textAlign: 'center',
                  background: '#000',
                  margin: '2rem auto',
                  maxWidth: 300,
                  borderRadius: 16,
                })}
              >
                <Logo size={0.4} />
              </div>
              <Header {...css({ [theme.media.medium]: { display: 'none' } })} />
              <div {...css({ marginBottom: rhythm(2) })}>
                <Listen />
              </div>
            </div>
            <div {...css({ [theme.media.medium]: { marginLeft: rhythm(2) } })}>
              <Header
                {...css({
                  display: 'none',
                  [theme.media.medium]: { display: 'block' },
                })}
              />

              {this.props.data.allEpisode.edges.map(
                ({ node }: any, i: number) => (
                  <div key={`${node.date}${i}-rss`}>
                    <Link
                      to={node.fields.slug}
                      aria-label={`View ${node.title}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <h2
                        {...css({
                          color: theme.color.purple,
                          marginBottom: rhythm(0.3),
                          ':hover': {
                            color: theme.color.purple,
                            textDecoration: 'underline',
                          },
                        })}
                      >
                        {node.title}
                      </h2>
                    </Link>
                    <div {...css({ color: '#555', marginBottom: rhythm(0.3) })}>
                      {format(node.date, 'MMM D, YYYY')} • Episode{' '}
                      {this.props.data.allEpisode.edges.length}
                    </div>
                    <p>
                      {node.description}
                      <Link
                        to={node.fields.slug}
                        aria-label={`View ${node.title}`}
                      >
                        Listen to Episode →
                      </Link>
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export const query = graphql`
  {
    allEpisode(sort: { fields: [date], order: DESC }, limit: 10) {
      edges {
        node {
          id
          title
          description
          date
          fields {
            slug
          }
        }
      }
    }
  }
`;
