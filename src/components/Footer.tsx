import * as React from 'react';
import { theme } from '../lib/theme';
import { Row, Block, Column } from 'glamor/jsxstyle';
import { NavLink } from './NavLink';
import { LINKS } from '../lib/constants';
import { Container } from './Container';
import { Formik, Form, FieldProps } from 'formik';
import axios from 'axios';
import { Fieldset } from './Fieldset';

const inputStyles = {
  appearance: 'none',
  color: '#fff',
  fontFamily: 'inherit',
  fontStyle: 'inherit',
  verticalAlign: 'baseline',
  display: 'block',
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

export interface FooterProps {}

export const Footer: React.SFC<FooterProps> = props => {
  return (
    <Block
      component="footer"
      props={{ role: 'contentinfo', 'aria-label': 'Footer', id: 'footer' }}
      padding="4rem 0"
      textAlign="center"
    >
      <Container>
        <Formik
          initialValues={{ name: '', email: '' }}
          onSubmit={(values, { setSubmitting, setStatus }) => {
            axios
              .request({
                url:
                  'https://api.formik.com/v1/form/5bf8a927daa4d40001e38e2a/submit',
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
                  console.log(e);
                }
              );
          }}
        >
          {({ status, isSubmitting }) => (
            <>
              {status === 'Success' ? (
                <Block
                  component="h2"
                  textAlign="center"
                  marginBottom="2rem"
                  fontWeight="800"
                  fontStyle="italic"
                  color={theme.color.purple}
                >
                  Thanks! We'll keep you posted!
                </Block>
              ) : (
                <Form>
                  <Block
                    component="h2"
                    textAlign="center"
                    marginBottom="2rem"
                    fontWeight="700"
                    fontSize="1.5rem"
                    textTransform="uppercase"
                    // fontStyle="italic"
                    color={theme.color.purple}
                  >
                    Subscribe for updates
                  </Block>
                  <Fieldset
                    id="name"
                    name="name"
                    label="Name"
                    render={({ field }: FieldProps) => (
                      <Block
                        component="input"
                        props={{
                          ...field,
                          placeholder: 'Name',
                          required: true,
                        }}
                        css={inputStyles}
                      />
                    )}
                  />
                  <Fieldset
                    label="Email"
                    id="email"
                    name="email"
                    render={({ field, form }: FieldProps) => (
                      <Block
                        component="input"
                        props={{
                          ...field,
                          type: 'email',
                          placeholder: 'Email',
                          required: true,
                        }}
                        css={inputStyles}
                      />
                    )}
                  />
                  <Block
                    component="button"
                    props={{ type: 'submit' }}
                    // color={theme.color.white}
                    padding="1rem 1.25rem"
                    minWidth={200}
                    margin="3rem auto"
                    display="block"
                    position="relative"
                    textTransform="uppercase"
                    borderRadius={30}
                    border="0"
                    fontSize="1rem"
                    textAlign="center"
                    fontWeight={theme.bold}
                    transform="translateY(0)"
                    cursor="pointer"
                    color="#000"
                    background={theme.color.purple}
                    // fontStyle="italic"
                    backgroundImage={`linear-gradient(-134deg, ${
                      theme.color.purple
                    } 0%, #00FFF4 100%)`}
                    css={{
                      transition: 'all 100ms ease',
                      '&:hover': {
                        boxShadow: `0 4px 8px rgba(0,0,0,.1)`,
                      },
                      '&:hover:active': {
                        transform: `scale(.98)`,
                      },
                    }}
                  >
                    {isSubmitting ? 'Loading....' : 'Subscribe'}
                  </Block>
                </Form>
              )}
            </>
          )}
        </Formik>
        <Column
          margin="6rem auto 2rem"
          css={{
            [theme.media.medium]: {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          }}
        >
          {LINKS.map(item => (
            <NavLink key={`footer-${item.text}`} {...item} />
          ))}
        </Column>
        <Block fontSize=".8rem" color={theme.color.gray}>
          Copyright © 2019 The Palmer Group.
        </Block>
      </Container>
    </Block>
  );
};

(Footer as any).displayName = 'Footer';
