import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { Footer } from '@components/Footer';
import { rhythm } from '../lib/typography';
import { theme } from '../lib/theme';
import { css } from 'glamor';
import { format } from 'date-fns';
import { Logo } from '@components/Logo';
import { Listen } from '@components/Listen';
import { ShareRow } from '@components/ShareRow';
import { Header } from '../components/Header';
import { Bio } from '@components/Bio';

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
          <div
            {...css({
              [theme.media.medium]: { display: 'flex' },
              margin: '0 auto',
            })}
          >
            <div
              {...css({
                margin: '0 auto',
                flex: 0,
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
                  width: 300,
                  padding: '.5rem 0',
                  borderRadius: 16,
                  boxShadow: `0 4px 8px rgba(0,0,0,.1)`,
                })}
              >
                <Logo size={0.39} />
              </Link>
              <Header {...css({ [theme.media.medium]: { display: 'none' } })} />
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
            <div {...css({ [theme.media.medium]: { marginLeft: rhythm(2) } })}>
              <Header
                {...css({
                  display: 'none',
                  [theme.media.medium]: { display: 'block' },
                })}
              />
              <ShareRow
                author="theundefinedio"
                {...css({ marginBottom: rhythm(2) })}
              />
              <div {...css({ marginTop: rhythm(2) })}>
                {this.props.data.allEpisode.edges.map(
                  ({ node }: any, i: number) => (
                    <div key={`${node.date}${i}-rss`}>
                      <div {...css({ display: 'flex', alignItems: 'center' })}>
                        <Link
                          to={node.fields.slug}
                          aria-label={`View ${node.title}`}
                          style={{
                            textDecoration: 'none',
                          }}
                          {...css({
                            '&:hover svg': {
                              color: '#00FFF4',
                            },
                            transition: 'scale 100ms ease-out',
                            '&:active': {
                              transform: 'scale(.98)',
                            },
                          })}
                        >
                          <svg
                            height="48"
                            width="48"
                            version="1.1"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                            {...css({
                              verticalAlign: 'middle',
                              height: 42,
                              width: 42,
                              marginRight: rhythm(0.5),
                              [theme.media.medium]: {
                                height: 56,
                                width: 56,
                              },
                            })}
                          >
                            <title>button circle play</title>
                            <g fill="currentColor">
                              <path
                                // tslint:disable-next-line:max-line-length
                                d="M24,1C11.317,1,1,11.317,1,24s10.317,23,23,23s23-10.317,23-23S36.683,1,24,1z M32.524,24.852l-13,8 C19.363,32.95,19.182,33,19,33c-0.168,0-0.336-0.042-0.488-0.127C18.196,32.696,18,32.362,18,32V16c0-0.362,0.196-0.696,0.512-0.873 c0.317-0.178,0.703-0.169,1.013,0.021l13,8C32.82,23.33,33,23.652,33,24S32.82,24.67,32.524,24.852z"
                                fill="currentColor"
                              />
                            </g>
                          </svg>
                        </Link>
                        <div {...css({ flex: 1 })}>
                          <span
                            {...css({
                              display: 'block',
                              color: '#555',
                              fontSize: rhythm(0.55),
                              textTransform: 'uppercase',
                              letterSpacing: '.1em',
                            })}
                          >
                            {format(node.date, 'MMM D, YYYY')} · Episode{' '}
                            {node.episodeNumber}
                          </span>
                          <Link
                            to={node.fields.slug}
                            aria-label={`View ${node.title}`}
                            style={{ textDecoration: 'none' }}
                          >
                            <h2
                              {...css({
                                color: theme.color.purple,
                                marginTop: 0,
                                fontSize: rhythm(1),
                                ':hover': {
                                  color: '#00FFF4',
                                  cursor: 'pointer',
                                },
                              })}
                            >
                              {node.title}
                            </h2>
                          </Link>
                        </div>
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
          episodeNumber
          duration
          date
          fields {
            slug
          }
        }
      }
    }
  }
`;
