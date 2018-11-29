import * as React from 'react';
import { Formik, Form, FieldProps } from 'formik';
import Axios from 'axios';
import { Fieldset } from '../components/Fieldset';
import { RouteComponentProps } from '@reach/router';
import { css } from 'glamor';
import { Block } from 'glamor/jsxstyle';
import { theme } from '../theme';
import { toApiError } from '../utils/api';

export interface LoginProps extends RouteComponentProps {
  token?: string;
}

export interface LoginState {}

export class Login extends React.Component<LoginProps, LoginState> {
  componentDidMount() {
    if (this.props.token) {
      Axios.request({
        method: 'GET',
        url: `${process.env.RAZZLE_API_URL}/v2/member/me`,
        headers: {
          Authorization: `Bearer ${this.props.token}`,
        },
      }).then(
        () => {
          window.localStorage.setItem('ufm-token', this.props.token);
          window.location.href = '/app';
        },
        error => {
          this.setState({ error: toApiError(error) });
        }
      );
    }
  }
  render() {
    return (
      <div>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={(values, { setSubmitting, setStatus }) => {
            Axios.request({
              url: 'http://localhost:8080/v1/user/sendlogin',
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              data: values,
            }).then(
              () => {
                setSubmitting(false);
                console.log('sent');
                setStatus('done');
              },
              error => {
                console.log(error);
                setSubmitting(false);
              }
            );
          }}
        >
          {({ status }) => (
            <Form>
              <h1 {...css({ color: '#fff' })}>Login</h1>
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
              {!!status ? <div style={{ color: '#fff' }}>{status}</div> : null}
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
