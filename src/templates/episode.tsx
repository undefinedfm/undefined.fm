import * as React from 'react';
import { graphql } from 'gatsby';
import format from 'date-fns/format';

import { Nav } from '@components/Nav';
import { theme } from '../lib/theme';
import { css } from 'glamor';
import { scale, rhythm } from '../lib/typography';
import { Footer } from '@components/Footer';
import { Container } from '@components/Container';
import { Head } from '@components/Head/Head';

export default class Episode extends React.Component<any, any> {
  render() {
    const { episode } = this.props.data;
    return (
      <>
        <Head title={episode.title} description={episode.description} />
        <Nav />
        <Container>
          <main>
            <article>
              <header>
                <h1 {...css({ color: theme.color.white })}>{episode.title}</h1>
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
                src={`${episode.embed}?color=3d3d3d`}
                width="100%"
              />
              <div dangerouslySetInnerHTML={{ __html: episode.html }} />
            </article>
          </main>
          <Footer />
        </Container>
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
