import * as React from 'react';
import { css } from 'glamor';
import '../reset.css';
import { Logo } from '../components/Logo';
import { Block } from 'glamor/jsxstyle';
import { Formik, Form, FieldProps } from 'formik';
import axios from 'axios';
import { theme } from '../theme';
import { Fieldset } from '../components/Fieldset';
import { Footer } from '../components/Footer';
import { Head } from '../components/Head';

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

export default class Home extends React.Component {
  render() {
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
                    textTransform="uppercase"
                    color="#C86DD7"
                  >
                    Thanks! We'll keep you posted!
                  </Block>
                ) : (
                  <Form>
                    <Block
                      component="h2"
                      textAlign="center"
                      marginBottom="2rem"
                      fontWeight="800"
                      fontStyle="italic"
                      textTransform="uppercase"
                      color="#C86DD7"
                    >
                      Subscribe for updates.
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
                      color={theme.color.white}
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
                      background="#3023AE"
                      fontStyle="italic"
                      backgroundImage="linear-gradient(-134deg, #3023AE 0%, #C86DD7 100%)"
                      css={{
                        transition: 'all 100ms ease',
                        '&:hover': {
                          transform: `translateY(-1px)`,
                          boxShadow: `0 4px 8px rgba(0,0,0,.1)`,
                        },
                        '&:active': {
                          transform: `translateY(0)`,
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
        </Block>
        <Footer />
      </Block>
    );
  }
}
