import * as React from 'react';
import '../reset.css';
import { graphql, Link } from 'gatsby';
import { Nav } from '@components/Nav';
import { Footer } from '@components/Footer';
import { scale, rhythm } from '../typography';
import { theme } from '@theme';
import { css } from 'glamor';
import { Container } from '@components/Container';
import { format } from 'date-fns';
import { Logo } from '@components/Logo';
import { Block } from 'glamor/jsxstyle';

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

        <Container>
          <div {...css({ margin: '0 auto', textAlign: 'center' })}>
            <Logo
              size={0.75}
              {...css({ margin: '2rem auto', height: '100%', width: '100%' })}
            />
          </div>
          <h1
            {...css({
              color: '#fff',
              fontWeight: 400,
              fontSize: '1.25rem',
              textAlign: 'center',
              marginBottom: rhythm(4),
              lineHeight: rhythm(1.25),
            })}
          >
            Full Stack Developers{' '}
            <a href="http://twitter.com/jaredpalmer">Jared Palmer</a> and{' '}
            <a href="http://twitter.com/ken_wheeler">Ken Wheeler</a> talk about
            software development, JavaScript, React, CSS, developer tooling,
            crossbows, debauchery, and shenanigans.
          </h1>
          {this.props.data.allEpisode.edges.map(({ node }: any, i: number) => (
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
                {format(node.date, 'MMM D, YYYY')}
              </div>
              <p>
                {node.description}
                <Link to={node.fields.slug} aria-label={`View ${node.title}`}>
                  Listen to Episode →
                </Link>
              </p>
            </div>
          ))}
        </Container>
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
