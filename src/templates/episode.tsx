import * as React from 'react';
import { graphql } from 'gatsby';
import format from 'date-fns/format';

import { Nav } from '@components/Nav';
import { theme } from '@theme';
import { css } from 'glamor';
import { scale, rhythm } from '../typography';

export default class Episode extends React.Component<any, any> {
  render() {
    const { episode } = this.props.data;
    return (
      <>
        <Nav />
        <div {...css({ maxWidth: 700, margin: '0 auto', padding: '0 1rem' })}>
          <main>
            <article>
              <header>
                <h1>{episode.title}</h1>
                <p
                  style={{
                    ...scale(-1 / 5),
                    display: 'block',
                    marginBottom: rhythm(1),
                    color: '#fff',
                  }}
                >
                  {format(episode.date, 'MMM D, YYYY')}
                </p>
              </header>

              <iframe
                frameBorder="0"
                height="200px"
                scrolling="no"
                seamless={true}
                src={`${episode.embed}?color=f5f5f5`}
                width="100%"
              />
              <div dangerouslySetInnerHTML={{ __html: episode.html }} />
            </article>
          </main>
        </div>
      </>
    );
  }
}

export const pageQuery = graphql`
  query($slug: String!) {
    episode(fields: { slug: { eq: $slug } }) {
      id
      title
      description
      date
      html
      embed
      number
    }
  }
`;
