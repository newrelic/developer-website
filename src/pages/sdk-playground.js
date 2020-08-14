import React from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import PlaygroundChrome from '../components/PlaygroundChrome';
import { css } from '@emotion/core';

const defaultCode = `
class MyAwesomeNerdpackNerdletNerdlet extends React.Component {
  render() {
    return <Button
    onClick={() => alert('Hello World!')}
    type={Button.TYPE.PRIMARY}
    iconType={Button.ICON_TYPE.DOCUMENTS__DOCUMENTS__NOTES__A_ADD}
  >
    Click Me
  </Button>;
  }
}
`;

const SdkPlayground = () => {
  return (
    <LiveProvider code={defaultCode} scope={window.__NR1_SDK__.default}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          height: 100vh;
        `}
      >
        <PlaygroundChrome
          css={css`
            flex-grow: 1;
          `}
        >
          <LivePreview />
        </PlaygroundChrome>
        <LiveEditor style={{ height: '300px' }} />
        <LiveError />
      </div>
    </LiveProvider>
  );
};

export default SdkPlayground;
