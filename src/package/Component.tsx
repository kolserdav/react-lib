import React from 'react';
import Header from './ui/Header';

interface ComponentProps {
  test?: boolean;
}

function Component({ test }: ComponentProps) {
  return <Header>Component 2</Header>;
}

Component.defaultProps = {
  test: false,
};

export default Component;
