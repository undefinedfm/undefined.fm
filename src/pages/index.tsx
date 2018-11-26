import * as React from 'react';
import { css } from 'glamor';
import '../reset.css';
import { graphql, Link } from 'gatsby';
import { Logo } from '../components/Logo';
import { Block } from 'glamor/jsxstyle';

import { theme } from '../theme';

import { Footer } from '../components/Footer';
import { Head } from '../components/Head';
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
    console.log(this.props.data.allEpisode.edges);
    return (
      <Block
        css={{
          minHeight: '100%',
          height: '100%',
          background: '#000',
        }}
      >
        <Head
          title="The Undefined Podcast"
          description="A podcast about JavaScript, crossbows, and other stuff. Hosted by Jared Palmer and Ken Wheeler."
        />

        <Block
          css={{
            margin: '0 auto',
            padding: '2rem 0',
            textAlign: 'center',
          }}
        >
          <Logo
            {...css({
              textAlign: 'center',
              width: '100%',
              maxWidth: 500,
              height: 'auto',
            })}
          />
        </Block>
        <Block
          props={{ id: 'maincontent' }}
          maxWidth={550}
          margin="0 auto 4rem"
          padding="0 1rem"
        >
          <Block
            component="p"
            color="#fff"
            opacity=".9"
            textAlign="center"
            marginBottom="6rem"
            lineHeight="1.5"
            fontSize="2rem"
            letterSpacing="-.02em"
          >
            We're starting a motherforkin' podcast.
          </Block>
        </Block>
        <Block
          css={{
            color: theme.color.white,
            maxWidth: 800,
            margin: '0 auto',
            padding: '1rem',
          }}
        >
          {this.props.data.allEpisode.edges.map(({ node }: any, i: number) => (
            <Block css={{ marginBottom: '4rem' }} key={`${node.date}${i}-rss`}>
              <Block
                component="h3"
                marginBottom="2rem"
                fontWeight="800"
                fontSize="2rem"
                fontStyle="italic"
                textTransform="uppercase"
                color="#C86DD7"
              >
                <Link to={node.fields.slug}>Episode #{node.title}</Link>
              </Block>
              <Block
                color={theme.color.grayLighter}
                lineHeight="1.325"
                marginBottom="1rem"
              >
                {node.description}
              </Block>
            </Block>
          ))}
        </Block>
        <Footer />
      </Block>
    );
  }
}

export const query = graphql`
  {
    allEpisode(sort: { fields: [published_at], order: DESC }, limit: 10) {
      edges {
        node {
          id
          title
          description
          published_at
          fields {
            slug
          }
        }
      }
    }
  }
`;
