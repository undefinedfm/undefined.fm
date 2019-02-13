import * as React from 'react';
import posed from 'react-pose';
import { Block } from 'glamor/jsxstyle';

export const PoseBlock: React.SFC<any> = ({ innerRef, ...props }) => (
  <Block ref={innerRef} {...props} />
);

const SlideDownPoser = posed.div({
  open: { y: 0 },
  closed: { y: -50 },
  initialPose: 'closed',
});

export const SlideDown: React.SFC<any> = props => (
  <Block component={SlideDownPoser} {...props} />
);
