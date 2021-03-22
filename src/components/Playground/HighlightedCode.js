import Highlight from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import Prism from 'prismjs';
import React from 'react';
import PropTypes from 'prop-types';

const HighlightedCode = ({ children }) => (
  <Highlight Prism={Prism} code={children} language="javascript" theme={theme}>
    {({ tokens, getLineProps, getTokenProps }) => {
      return (
        <pre data-language="javascript">
          <code>
            {tokens.map((line, idx) => (
              // eslint-disable-next-line react/jsx-key
              <div {...getLineProps({ line, key: idx })}>
                <div>
                  {line.map((token, key) => (
                    // eslint-disable-next-line react/jsx-key
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              </div>
            ))}
          </code>
        </pre>
      );
    }}
  </Highlight>
);

HighlightedCode.propTypes = {
  children: PropTypes.node,
};

export default HighlightedCode;
