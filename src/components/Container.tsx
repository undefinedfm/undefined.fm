import * as React from 'react';
import { css } from 'glamor';

export const Container = (props: any) => {
  return (
    <div
      {...css({ maxWidth: 675, margin: '0 auto', padding: '0 1rem' })}
      {...props}
    />
  );
};
