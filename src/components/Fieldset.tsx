import * as React from 'react';
import { Block } from 'glamor/jsxstyle';
import { Field, FieldProps } from 'formik';
import posed from 'react-pose';
import { theme } from '../theme';

const LabelPoser = posed.label({
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { ease: 'circOut', duration: 300 },
      opacity: { ease: 'easeIn', duration: 200 },
    },
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      y: { ease: 'circOut', duration: 300 },
      opacity: { ease: 'easeIn', duration: 200 },
    },
  },
  initialPose: 'closed',
});

export const Label: React.SFC<any> = props => (
  <Block component={LabelPoser} {...props} />
);

export const Fieldset: React.SFC<any> = ({ label, id, render, ...props }) => {
  return (
    <Block position="relative" marginBottom="2rem">
      <Field
        id={id}
        {...props}
        render={(fieldProps: FieldProps) => (
          <>
            <Label
              htmlFor={id}
              position="relative"
              textTransform="uppercase"
              opacity="0"
              fontSize=".85rem"
              marginBottom=".5rem"
              letterSpacing=".025em"
              textAlign="left"
              zIndex="1"
              color={theme.color.gray}
              pose={fieldProps.field.value !== '' ? 'open' : 'closed'}
            >
              {label}
            </Label>
            {render(fieldProps)}
          </>
        )}
      />
    </Block>
  );
};

(Fieldset as any).displayName = 'Fieldset';
