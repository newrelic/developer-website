import React from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
// import PropTypes from 'prop-types';
// import { graphql, Link } from 'gatsby';

const defaultCode = `
class MyAwesomeNerdpackNerdletNerdlet extends React.Component {
  render() {
    return <h1>Hello, my-awesome-nerdpack-nerdlet Nerdlet!</h1>;
  }
}
`;

const SdkPlayground = () => {
  return (
    <LiveProvider code={defaultCode} scope={window.__NR1_SDK__.default}>
      <LiveEditor />
      <LivePreview />
      <LiveError />
    </LiveProvider>
  );
};

export default SdkPlayground;
