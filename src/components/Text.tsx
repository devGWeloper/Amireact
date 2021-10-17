import React, { FunctionComponent } from 'react';

interface TextProps {
  text: string;
}

const Text = ({ text }: TextProps): FunctionComponent => {
  return <div>{text}</div>;
};

export default Text;
