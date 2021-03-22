import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link } from '@newrelic/gatsby-theme-newrelic';
import parse, { domToReact, attributesToProps } from 'html-react-parser';

const REPLACEMENTS = [
  [/&lt;(\/?)mark>/g, '<$1mark>'],
  [/&lt;(\/?)var>/g, '<$1var>'],
  [/&lt;a href=['"](.+?)['"](.*?)>/g, '<a href="$1"$2>'],
  [/&lt;\/a>/g, '</a>'],
];

const replaceHTML = (code) => {
  const html = REPLACEMENTS.reduce(
    (code, [regex, replacement]) => code.replace(regex, replacement),
    code.replace(/</g, '&lt;')
  );

  return parse(html, {
    replace: (domNode) => {
      const { name, attribs, children } = domNode;

      if (name === 'a') {
        const { href, ...props } = attribs;

        return (
          <Link to={href} {...attributesToProps(props)}>
            {domToReact(children)}
          </Link>
        );
      }
    },
  });
};

const RawCode = ({ code, language }) => {
  return (
    <pre
      css={css`
        color: var(--color-nord-6);
        font-family: var(--code-font);
        font-size: 0.75rem;
        display: block;
        overflow: auto;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        tab-size: 2;
        hyphens: none;
        text-shadow: none;
        padding: 1rem;
        .light-mode & {
          color: var(--color-nord-0);
        }
        max-height: 100px;
        border-radius: 0.25rem;
        background-color: var(--tertiary-background-color);
      `}
      data-language={language}
    >
      <code
        css={css`
          width: 100%;
          padding: 0;
          background: none;
          var,
          mark {
            font-size: inherit;
            padding: 0.125rem;
          }
          var {
            background: var(--color-nord-3);
            color: inherit;
            .light-mode & {
              background: var(--color-nord-4);
            }
          }
          a:hover var {
            background: var(--color-nord-3);
            .light-mode & {
              background: var(--color-nord-5);
            }
          }
          mark {
            color: var(--color-neutrals-900) !important;
            var {
              color: var(--color-neutrals-100);
              .light-mode & {
                color: var(--color-neutrals-900);
              }
            }
          }
        `}
      >
        {replaceHTML(code)}
      </code>
    </pre>
  );
};

RawCode.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
};

export default RawCode;
