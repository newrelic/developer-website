import React, { useState } from 'react';
import PropTypes from 'prop-types';
import formatCode from '../utils/formatCode';
import github from 'prism-react-renderer/themes/github';
import { LiveEditor, LiveError, LiveProvider, LivePreview } from 'react-live';
import styles from './ComponentExample.module.scss';
import root from 'react-shadow';
import { CSS_BUNDLE } from '../utils/sdk';

const TRAILING_SEMI = /;\s*$/;

const EXAMPLE_CSS = `
.nr1-ComponentExample {
  line-height: 1.36;
  font-weight: 400;
  background-color: #fff;
  color: #000e0e;
  font-size: 12px;
  font-family: Open Sans,Segoe UI,Tahoma,sans-serif;
}

.nr1-ComponentExample-ToastManager > div {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-right: 16px;
  pointer-events: none;
  z-index: 200;
  min-height: 9999px;
}

.nr1-Docs-prettify > * {
  margin-right: 0.5rem;
}

.nr1-Docs-prettify > *:not(:first-child) {
  margin-left: 0.5rem;
}

.nr1-Box,
.nr1-RedBox,
.nr1-Box--a,
.nr1-Box--b,
.nr1-Box--c {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0.5rem;
  width: 100%;
  height: 100%;
}

.nr1-RedBox {
  color: red;
  background: rgba(255, 0, 0, 0.15);
  box-shadow: inset 0 0 0 1px rgba(255, 0, 0, 0.5);
  margin-bottom: 0.5rem;
}

[class^=nr1-Example--stack--direction],
[class^=nr1-Example--stack--horizontal],
[class^=nr1-Example--stack--gap],
[class^=nr1-Example--stack--vertical] {
  margin-bottom: 1.25rem;
}

.nr1-Example--stack--title {
  display: block;
  font-size: 1.5em;
  margin-bottom: 1.25rem;
}

.nr1-Box--a {
  min-height: 70px;
  min-width: 70px;
}

.nr1-Box--b {
  min-height: 90px;
  min-width: 40px;
}

.nr1-Box--c {
  min-height: 40px;
  min-width: 90px;
}
`;

const ComponentExample = ({
  className,
  example,
  useToastManager,
  previewStyle,
}) => {
  const [stylesLoaded, setStylesLoaded] = useState(false);
  const ToastManager = window.__NR1_SDK__.ToastManager;
  let formattedCode;

  try {
    formattedCode = formatCode(example.sourceCode).replace(TRAILING_SEMI, '');
  } catch (e) {
    formattedCode = example.sourceCode;
  }

  return (
    <div className={className}>
      <h3 className={styles.title}>{example.label}</h3>
      <LiveProvider
        scope={{
          ...window.__NR1_SDK__.default,
          navigation: {
            // eslint-disable-next-line no-empty-function
            getOpenLauncherLocation() {},
          },
        }}
        code={formattedCode}
        theme={github}
        disabled={!example.options.live}
      >
        {example.options.live && (
          <root.div className={styles.preview}>
            <link
              rel="stylesheet"
              href={CSS_BUNDLE}
              onLoad={() => setStylesLoaded(true)}
            />
            <style type="text/css">{EXAMPLE_CSS}</style>
            {useToastManager && (
              <div className="nr1-ComponentExample-ToastManager">
                <ToastManager />
              </div>
            )}
            {stylesLoaded ? (
              <LivePreview
                className="nr1-ComponentExample"
                style={previewStyle}
              />
            ) : (
              'Loading...'
            )}
          </root.div>
        )}
        <LiveEditor style={{ fontSize: '0.75rem' }} />
        <LiveError className={styles.error} />
      </LiveProvider>
    </div>
  );
};

ComponentExample.propTypes = {
  className: PropTypes.string,
  example: PropTypes.shape({
    label: PropTypes.string.isRequired,
    sourceCode: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
  }).isRequired,
  useToastManager: PropTypes.bool,
  previewStyle: PropTypes.object,
};

export default ComponentExample;
