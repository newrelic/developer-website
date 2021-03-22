import React, { useState, Suspense, useRef } from 'react';
import { LiveProvider, LivePreview } from 'react-live';
import { css } from '@emotion/core';
import PlaygroundSidebar from '../components/PlaygroundSideview';
import PlaygroundToggle from '../components/PlaygroundToggle';
import PlaygroundChrome from '../components/Playground/Chrome';
import { Icon, useClipboard } from '@newrelic/gatsby-theme-newrelic';
import useCustomMonaco from '../components/Playground/useCustomMonaco';

const defaultCode = `
class MyAwesomeNerdpackNerdletNerdlet extends React.Component {
  render() {
    return <div></div>
  }
}
`;

const Editor = React.lazy(() => import('@monaco-editor/react'));

const SdkPlayground = () => {
  const [code, setCode] = useState(defaultCode);
  const [showSidebar, setShowSidebar] = useState(false);
  const [copied, copy] = useClipboard();
  const [editorKey, setEditorKey] = useState(null);
  const editorRef = useRef(null);
  const monaco = useCustomMonaco();

  if (typeof window === 'undefined') global.window = {};
  const sdk = window.__NR1_SDK__?.default ?? {};
  if (!sdk) return null;

  const handleOnMount = (editor) => {
    window.addEventListener('resize', updateWindowDimensions);
    editorRef.current = editor;
  };
  const updateWindowDimensions = () => {
    setEditorKey(`${window.innerWidth}`);
  };

  const onEditorChange = (value) => {
    setCode(value);
  };

  const toggleSidebar = () => {
    const num = Math.random() * 10;
    setShowSidebar(!showSidebar);
    setEditorKey(`${window.innerWidth} ${num}`);
  };

  const handleAdd = (insertCode) => {
    const editor = editorRef.current;
    editor.executeEdits('', [
      {
        range: {
          startLineNumber: editor.getPosition().lineNumber,
          startColumn: editor.getPosition().column,
          endLineNumber: editor.getPosition().lineNumber,
          endColumn: editor.getPosition().column,
        },
        text: insertCode,
      },
    ]);
  };

  return (
    <>
      <LiveProvider code={code} scope={sdk}>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            height: 100vh;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              flex-grow: 1;
            `}
          >
            <PlaygroundChrome>
              <LivePreview />
            </PlaygroundChrome>

            <Suspense fallback={<div>Loading...</div>}>
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                `}
              >
                <Editor
                  height="350px"
                  language="javascript"
                  value={code}
                  theme="nightOwl"
                  options={{ selectOnLineNumbers: true, automaticLayout: true }}
                  onChange={onEditorChange}
                  onMount={handleOnMount}
                  key={editorKey}
                />
              </div>
            </Suspense>
          </div>
          <PlaygroundToggle>
            <PlaygroundToggle.Item onClick={toggleSidebar}>
              <Icon size="1.25rem" name="fe-edit" />
            </PlaygroundToggle.Item>
            <PlaygroundToggle.Item onClick={() => copy(code)}>
              {copied ? (
                <Icon size="1.25rem" name="fe-thumbsup" />
              ) : (
                <Icon size="1.25rem" name="fe-copy" />
              )}
            </PlaygroundToggle.Item>
          </PlaygroundToggle>
          {showSidebar && <PlaygroundSidebar onAdd={handleAdd} />}
        </div>
      </LiveProvider>
    </>
  );
};

export default SdkPlayground;
