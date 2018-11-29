import * as React from 'react';
import { Formik, Form, FieldProps } from 'formik';
import Axios from 'axios';
import { Block } from 'glamor/jsxstyle';
import { Fieldset } from '../components/Fieldset';
import { theme } from '../theme';

export function Subscribe() {
  return (
    <Block css={{ maxWidth: 550, margin: '0 auto' }}>
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          Axios.request({
            url:
              'https://api.formik.io/v1/form/5bf8a927daa4d40001e38e2a/submit',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            data: {
              ...values,
            },
          }).then(
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
                      css={theme.inputStyles}
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
                      css={theme.inputStyles}
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
  );
}
