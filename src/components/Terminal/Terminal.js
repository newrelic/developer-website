import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Icon, Button, useClipboard } from '@newrelic/gatsby-theme-newrelic';
import Highlight from 'prism-react-renderer';
import Prism from 'prismjs';
import Shell from './Shell';
import { useIntersection } from 'react-use';

const Terminal = ({ animate, children }) => {
  const ref = useRef();
  const shellRef = useRef();
  const code = children.trim();
  const [copied, copy] = useClipboard();
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px 0px -33% 0px',
  });

  useEffect(() => {
    if (animate && intersection?.isIntersecting) {
      shellRef.current.startAnimation();
    }
  }, [animate, intersection]);

  return (
    <div
      ref={ref}
      css={css`
        --chrome-color: #252526;
        --border-radius: 0.25rem;

        background: #1e1e1e;
        border-radius: var(--border-radius);
      `}
    >
      <div
        css={css`
          background: var(--chrome-color);
          display: grid;
          grid-template-columns: repeat(3, auto) 1fr 90px;
          grid-gap: 0.5rem;
          align-items: center;
          padding: 0.25rem 1rem;
          border-top-left-radius: var(--border-radius);
          border-top-right-radius: var(--border-radius);
        `}
      >
        <FrameButton color="#ed6b60" />
        <FrameButton color="#f5be4f" />
        <FrameButton color="#62c554" />
        <div
          css={css`
            color: #ccc;
            text-align: center;
            font-family: var(--code-font);
            font-size: 0.75rem;
          `}
        >
          bash
        </div>

        <Button
          variant={Button.VARIANT.LINK}
          size={Button.SIZE.SMALL}
          onClick={() => copy(filterCopyOutput(children))}
          className="dark-mode"
          css={css`
            justify-self: end;
            white-space: nowrap;
          `}
        >
          <Icon
            name={Icon.TYPE.COPY}
            css={css`
              margin-right: 0.5rem;
            `}
          />
          {copied ? 'Copied' : 'Copy'}
        </Button>
      </div>
      <Highlight Prism={Prism} code={code} language="shell">
        {(highlight) => (
          <Shell
            ref={shellRef}
            animate={animate}
            code={code}
            highlight={highlight}
          />
        )}
      </Highlight>
    </div>
  );
};

const filterCopyOutput = (commands) => {
  return commands
    .split('\n')
    .filter((line) => !line.startsWith('[output]'))
    .join('\n');
};

const FrameButton = ({ color }) => (
  <div
    css={css`
      background: ${color};
      border-radius: 50%;
      width: 10px;
      height: 10px;
    `}
  />
);

FrameButton.propTypes = {
  color: PropTypes.string,
};

Terminal.propTypes = {
  animate: PropTypes.bool,
  children: PropTypes.string,
};

Terminal.defaultProps = {
  animate: false,
};

export default Terminal;
