import * as React from 'react';
import { graphql, Link } from 'gatsby';
import format from 'date-fns/format';

import { Nav } from '@components/Nav';
import { theme } from '../lib/theme';
import { css } from 'glamor';
import { scale, rhythm } from '../lib/typography';
import { Footer } from '@components/Footer';
import { Head } from '@components/Head/Head';
import { ShareRow } from '@components/ShareRow';
import { Logo } from '@components/Logo';
import { Header } from '@components/Header';
import { Listen } from '@components/Listen';
import { Bio } from '@components/Bio';

export default class Episode extends React.Component<any, any> {
  render() {
    const { episode } = this.props.data;
    return (
      <>
        <Head title={episode.title} description={episode.description} />
        <div
          {...css({
            display: 'block',
            [theme.media.medium]: { display: 'none' },
          })}
        >
          <Nav />
        </div>
        <div>
          <div
            {...css({
              top: 0,
              left: 0,
              right: 0,
              zIndex: 9999,
              height: 4,
              backgroundImage: `linear-gradient(left, #0ef 0%, #F249CF 100%)`,
              display: 'none',
              [theme.media.medium]: { display: 'block' },
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
            <div
              {...css({
                display: 'flex',
                flexDirection: 'column',
                [theme.media.medium]: { flexDirection: 'row' },
              })}
            >
              <div
                {...css({
                  order: 2,
                  [theme.media.medium]: { order: 1, display: 'block' },
                  margin: '0 auto',
                })}
              >
                <Link
                  to="/"
                  {...css({
                    display: 'block',
                    textDecoration: 'none',
                    textAlign: 'center',
                    background: '#000',
                    margin: '2rem auto',
                    maxWidth: 300,
                    borderRadius: 16,
                    boxShadow: `0 4px 8px rgba(0,0,0,.1)`,
                  })}
                >
                  <Logo size={0.39} />
                </Link>
                <div {...css({ marginBottom: rhythm(1) })}>
                  <Listen />
                </div>
                <div>
                  <div
                    {...css({
                      color: theme.color.gray,
                      fontSize: '.9rem',
                      marginBottom: rhythm(0.5),
                      textTransform: 'uppercase',
                      letterSpacing: '.1em',
                    })}
                  >
                    Hosted By
                  </div>
                  <Bio
                    name="Jared Palmer"
                    twitterHandle="jaredpalmer"
                    avatarUrl="https://pbs.twimg.com/profile_images/892351529348411392/FLQyLnoc_400x400.jpg"
                  />
                  <Bio
                    name="Ken Wheeler"
                    twitterHandle="ken_wheeler"
                    avatarUrl="https://avatars3.githubusercontent.com/u/286616?s=400&v=4"
                  />
                </div>
              </div>
              <div
                {...css({
                  order: 1,
                  [theme.media.medium]: { order: 2, marginLeft: rhythm(2) },
                })}
              >
                <div {...css({ marginTop: rhythm(2) })}>
                  <main {...css({ marginTop: rhythm(1) })}>
                    <article>
                      <header>
                        <h1
                          {...css({ color: theme.color.purple, marginTop: 0 })}
                        >
                          {episode.title}
                        </h1>
                        <p
                          style={{
                            ...scale(-1 / 5),
                            display: 'block',
                            marginBottom: rhythm(0.25),
                            color: theme.color.gray,
                            textTransform: 'uppercase',
                            letterSpacing: '.1em',
                          }}
                        >
                          <Link
                            to="/"
                            {...css({
                              color: theme.color.gray,
                              textDecoration: 'none',
                              '&:hover': {
                                color: theme.color.purple,
                              },
                            })}
                          >
                            The Undefined
                          </Link>{' '}
                          · {format(episode.date, 'MMM D, YYYY')}
                        </p>
                        <ShareRow
                          author="theundefinedio"
                          {...css({ marginBottom: rhythm(2) })}
                        />
                      </header>
                      <iframe
                        frameBorder="0"
                        height="200px"
                        scrolling="no"
                        seamless={true}
                        src={`${episode.embed}?color=fff`}
                        width="100%"
                      />
                      <div dangerouslySetInnerHTML={{ __html: episode.html }} />

                      <a href={episode.audioUrl}>Direct Download</a>
                    </article>
                  </main>
                </div>
              </div>
            </div>
          </div>
          <Footer />
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
      duration
      number
      audioUrl
    }
  }
`;
