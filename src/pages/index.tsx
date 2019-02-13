import * as React from 'react';
import '../reset.css';
import { graphql, Link } from 'gatsby';
import { Nav } from '@components/Nav';

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
        {this.props.data.allEpisode.edges.map(({ node }: any, i: number) => (
          <div key={`${node.date}${i}-rss`}>
            <Link to={node.fields.slug}>{node.title}</Link>
          </div>
        ))}
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
