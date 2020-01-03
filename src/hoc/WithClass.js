import React from 'react';

const withClass = (WrappedComponent, className) => (
  () => <div className={className}>
    <WrappedComponent></WrappedComponent>
  </div>
);

export default withClass;
