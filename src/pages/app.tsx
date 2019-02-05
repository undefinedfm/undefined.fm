import * as React from 'react';
import { Router, Redirect } from '@reach/router';
import { Login } from '../screens/Login';
import Axios from 'axios';
import { toApiError } from '../utils/api';

export class Dashboard extends React.Component<any, any> {
  render() {
    return (
      <div style={{ color: '#fff' }}>
        Dashboard
        <pre style={{ color: '#fff' }}>
          {JSON.stringify(this.props.user, null, 2)}
        </pre>
      </div>
    );
  }
}

export class AuthenicatedArea extends React.Component<any, any> {
  render() {
    if (this.props.redirect) {
      return <Redirect to="/app/login" noThrow />;
    }
    if (this.props.viewer) {
      return this.props.children;
    }

    return <div style={{ color: '#fff' }}>Loading.....</div>;
  }
}

export function Settings(props: any) {
  return <div style={{ color: '#fff' }}>Settings</div>;
}

export default class App extends React.Component<any, any> {
  state: any = {
    viewer: null,
  };
  componentDidMount() {
    Axios.get('http://localhost:8080/v1/user/me', {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${window.localStorage.getItem('ufm-token')}`,
      },
    }).then(
      ({ data }: any) => this.setState({ viewer: data }),
      error => {
        if (error) {
          this.setState({ redirect: true });
        }
      }
    );
  }
  render() {
    return (
      <Router>
        <AuthenicatedArea
          path="/app"
          viewer={this.state.viewer}
          redirect={this.state.redirect}
        >
          <Dashboard path="/" exact viewer={this.state.viewer} />
          <Settings path="/settings" viewer={this.state.viewer} />
        </AuthenicatedArea>
        <Login path="/app/login/:token" />
        <Login path="/app/login" />
      </Router>
    );
  }
}
