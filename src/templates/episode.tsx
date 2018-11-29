import * as React from 'react';
import { graphql } from 'gatsby';
import { Block } from 'glamor/jsxstyle';
import { Subscribe } from '../forms/Subscribe';
import { Footer } from '../components/Footer';

export default class Episode extends React.Component<any, any> {
  render() {
    const { episode } = this.props.data;
    return (
      <Block
        css={{
          color: '#fff',
          maxWidth: 800,
          margin: '0 auto',
          padding: '1rem',
        }}
      >
        <Block
          css={{
            color: '#fff',
            fontWeight: 800,
            fontSize: '2rem',
            lineHeight: '1.1',
          }}
        >
          {episode.title}
        </Block>
        <div>{episode.long_description}</div>
        <iframe
          frameBorder="0"
          height="200px"
          scrolling="no"
          seamless={true}
          src={`${episode.sharing_url.replace(
            'https://simplecast.com/s/',
            'https://embed.simplecast.com/'
          )}?color=f5f5f5`}
          width="100%"
        />
        <Subscribe />
        <Footer />
      </Block>
    );
  }
}
export const pageQuery = graphql`
  query($slug: String!) {
    episode(fields: { slug: { eq: $slug } }) {
      id
      title
      description
      long_description
      number
      sharing_url
    }
  }
`;
