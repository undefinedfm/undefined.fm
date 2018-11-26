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
        <h1>{episode.title}</h1>
        <div>{episode.long_description}</div>
        <iframe
          frameBorder="0"
          height="330px"
          scrolling="no"
          seamless={true}
          src={`https://simplecast.com/e/${episode.id}?style=large`}
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
      audio_url
    }
  }
`;
