import * as React from 'react';
import { css } from 'glamor';
import { Link } from '@reach/router';

export interface JobsProps {}

export interface JobsState {}
export default class Jobs extends React.Component<JobsProps, JobsState> {
  render() {
    return (
      <div {...css({ color: '#fff' })}>
        Jobs List
        <Link to="/app">My Jobs</Link>
      </div>
    );
  }
}
