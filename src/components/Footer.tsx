import * as React from 'react';
import { theme } from '../lib/theme';
import { NavLink } from './Nav/NavLink';
import { LINKS } from '../lib/constants';
import { Container } from './Container';
import { Formik, Form, FieldProps } from 'formik';
import axios from 'axios';
import { Fieldset } from './Fieldset';
import { css } from 'glamor';
import { Link } from 'gatsby';

const inputStyles = {
  WebkitAppearance: 'none',
  color: '#fff',
  fontFamily: 'inherit',
  fontStyle: 'inherit',
  verticalAlign: 'baseline',
  position: 'relative',
  margin: '0 0 2rem',
  border: 0,
  padding: '.5rem 0',
  background: 'transparent',
  borderBottom: `1px solid ${theme.color.gray}`,
  borderRadius: 0,
  fontSize: 18,
  lineHeight: '1.55556',
  outline: 0,
  zIndex: 2,
  width: '100%',
  transition: 'all 200ms ease',
  '&:focus': {
    borderBottom: `1px solid ${theme.color.gray}`,
  },
  '&:placeholder': {
    fontSize: 18,
  },
};

export interface FooterProps {
  showForm?: boolean;
}

export const Footer: React.SFC<FooterProps> = ({ showForm = true }) => {
  return (
    <footer
      role="contentinfo"
      aria-label="Footer"
      id="footer"
      {...css({ padding: '4rem 0', textAlign: 'center' })}
    >
      <Container {...css({ maxWidth: 900 })}>
        <div {...css({ maxWidth: 675, margin: '0 auto' })}>
          {showForm ? (
            <Formik
              initialValues={{ name: '', email: '' }}
              onSubmit={(values, { setSubmitting, setStatus }) => {
                axios
                  .request({
                    url:
                      'https://api.formik.com/submit/undefinedfm/subscribe',
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    data: {
                      ...values,
                    },
                  })
                  .then(
                    () => {
                      setSubmitting(false);
                      setStatus('Success');
                    },
                    e => {
                      setSubmitting(false);
                      setStatus()
                      console.log(e);
                    }
                  );
              }}
            >
              {({ status, isSubmitting }) => (
                <>
                  {status === 'Success' ? (
                    <h2
                      {...css({
                        textAlign: 'center',
                        marginBottom: '1rem',
                        fontWeight: '700',
                        fontSize: '1.5rem',
                        // fontStyle: "italic",
                        color: theme.color.grayLighter,
                      })}
                    >
                      Thanks! We'll keep you posted!
                    </h2>
                  ) : (
                    <Form>
                      <h2
                        {...css({
                          textAlign: 'center',
                          marginBottom: '1rem',
                          fontWeight: '700',
                          fontSize: '1.5rem',
                          // fontStyle: "italic",
                          color: theme.color.grayLighter,
                        })}
                      >
                        Subscribe for updates
                      </h2>
                      <Fieldset
                        id="name"
                        name="name"
                        label="Name"
                        render={({ field }: FieldProps) => (
                          <input
                            {...field}
                            type="text"
                            placeholder="Name"
                            required={true}
                            {...css(inputStyles)}
                          />
                        )}
                      />
                      <Fieldset
                        label="Email"
                        id="email"
                        name="email"
                        render={({ field, form }: FieldProps) => (
                          <input
                            {...field}
                            type="email"
                            placeholder="Email"
                            required={true}
                            {...css(inputStyles)}
                          />
                        )}
                      />
                      <button
                        type="submit"
                        {...css({
                          padding: '1rem 1.25rem',
                          minWidth: 200,
                          margin: '3rem auto',
                          display: 'div',
                          position: 'relative',
                          textTransform: 'uppercase',
                          borderRadius: 40,
                          border: '0',
                          outline: 0,
                          fontSize: '1rem',
                          textAlign: 'center',
                          fontWeight: theme.bold,
                          transform: 'translateY(0)',
                          cursor: 'pointer',
                          color: '#000',
                          background: theme.color.purple,
                          // fontStyle: "italic",
                          backgroundImage: `linear-gradient(-134deg, ${
                            theme.color.purple
                          } 0%, #00FFF4 100%)`,

                          transition: 'all 100ms ease',
                          '&:hover': {
                            boxShadow: `0 4px 8px rgba(0,0,0,.1)`,
                          },
                          '&:hover:active': {
                            transform: `scale(.98)`,
                          },
                        })}
                      >
                        {isSubmitting ? 'Loading....' : 'Subscribe'}
                      </button>
                    </Form>
                  )}
                </>
              )}
            </Formik>
          ) : null}
        </div>
        <div
          {...css({
            margin: showForm ? '6rem auto 2rem' : '2rem auto 2rem',
            display: 'flex',
            flexDirection: 'column',
            [theme.media.medium]: {
              flexDirection: 'row',
              alignItems: 'center',
              textAlign: 'center',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            },
          })}
        >
          {LINKS.map(item => (
            <NavLink key={`footer-${item.text}`} {...item} />
          ))}
          <Link
            {...css({
              color: theme.color.purple,
              textTransform: 'uppercase',
              fontSize: '.9rem',
              transition: 'color 200ms ease-in',
              margin: '.5rem',
              '&:hover': {
                color: theme.color.white,
              },
            })}
            to="/sponsor"
          >
            Sponsor the Podcast
          </Link>
        </div>
        <div {...css({ fontSize: '.8rem', color: theme.color.gray })}>
          Copyright © 2020{' '}
          <a
            href="https://jaredpalmer.com"
            {...css({
              marginTop: '1.25rem',
              transition: 'color .2s ease-out',
              color: theme.color.gray,
              textDecoration: 'underline',
              ':hover': {
                color: theme.color.purple,
              },
            })}
          >
            Jared Palmer
          </a>
          .
        </div>
        <div
          {...css({
            fontSize: 12,
            color: theme.color.gray,
            marginTop: '1.25rem',
            transition: 'color .2s ease-out',
            '& a': {
              color: theme.color.gray,
              textDecoration: 'underline',
            },
            '& a:hover': {
              color: theme.color.purple,
            },
          })}
        >
          {' '}
          This site was built with{' '}
          <a href="https://github.com/facebook/react">React</a>,{' '}
          <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a>, and{' '}
          <a href="https://github.com/threepointone/glamor">Glamor</a>. It is
          hosted on <a href="https://netlify.com">Netlify</a> and the source
          code is on{' '}
          <a href="https://github.com/undefinedfm/undefined.fm">GitHub</a>.
        </div>
      </Container>
    </footer>
  );
};

(Footer as any).displayName = 'Footer';
