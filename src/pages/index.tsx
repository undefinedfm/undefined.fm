import * as React from 'react';
import '../reset.css';
import { graphql, Link } from 'gatsby';
import { Nav } from '@components/Nav';
import { Footer } from '@components/Footer';
import { rhythm } from '../typography';
import { theme } from '@theme';
import { css } from 'glamor';
import { Container } from '@components/Container';
import { format } from 'date-fns';

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
        <Nav />
        <Container>
          {this.props.data.allEpisode.edges.map(({ node }: any, i: number) => (
            <div key={`${node.date}${i}-rss`}>
              <Link
                to={node.fields.slug}
                aria-label={`View ${node.title}`}
                style={{ textDecoration: 'none' }}
              >
                <h2
                  {...css({
                    marginBottom: rhythm(0.3),
                    ':hover': {
                      color: '#ff50d4',
                    },
                  })}
                >
                  {node.title}
                </h2>
              </Link>
              <div {...css({ color: '#555' })}>
                {format(node.date, 'MMM D, YYYY')}
              </div>
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
