import React from 'react';
import { PageContext } from '../src/components/PageContext';
import { Global, css } from '@emotion/react';

const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Global
        styles={css`
          // add additional styles needed for gatsby-remark-autolink-headers
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            scroll-margin-top: calc(var(--global-header-height) + 2rem);

            .anchor.before {
              position: absolute;
              top: 0;
              left: 0;
              transform: translateX(-100%);
              padding-right: 4px;
            }
            .anchor svg {
              opacity: 0;
              transition: opacity 0.2s ease-out;
            }

            &:hover .anchor svg,
            .anchor:focus svg {
              opacity: 1;
            }
          }
          :root {
            --height-mobile-nav-bar: 60px;
            --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          input[type='text'] {
            border: 1px solid var(--border-color);
            border-radius: 4px;
            box-sizing: border-box;
            transition: all 0.1s var(--ease-out-quad);

            &:hover {
              border-color: var(--border-hover-color);
            }
          }
        `}
      />
      <PageContext.Provider value={props.pageContext}>
        {element}
      </PageContext.Provider>
    </>
  );
};

export default wrapPageElement;
