import * as React from 'react';
import { Router, Redirect } from '@reach/router';
import { Login } from '../screens/Login';
import Axios from 'axios';
import { toApiError } from '../utils/api';

export class Dashboard extends React.Component<any, any> {
  state: any = {
    user: null,
  };
  componentDidMount() {
    Axios.get('http://localhost:8080/v1/user/me', {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${window.localStorage.getItem('ufm-token')}`,
      },
    }).then(
      ({ data }: any) => this.setState({ user: data }),
      error => {
        console.log(toApiError(error));
        if (error) {
          this.setState({ redirect: true });
        }
      }
    );
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/app/login" noThrow />;
    }
    if (this.state.user)
      <div style={{ color: '#fff' }}>
        Dashboard
        <pre style={{ color: '#fff' }}>
          {JSON.stringify(this.state.user, null, 2)}
        </pre>
      </div>;

    return <div style={{ color: '#fff' }}> Loading.....</div>;
  }
}

export function Settings(props: any) {
  return <div style={{ color: '#fff' }}>Settings</div>;
}

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Dashboard path="/app/" exact />
        <Settings path="/app/settings" />
        <Login path="/app/login/:token" />
        <Login path="/app/login" />
      </Router>
    );
  }
}
