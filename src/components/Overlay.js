import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Portal, useKeyPress } from '@newrelic/gatsby-theme-newrelic';

const Overlay = ({ children, onCloseOverlay, isOpen = false, className }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = null;
    };
  }, [isOpen]);

  useKeyPress('Escape', onCloseOverlay);

  return (
    <Portal>
      <div
        css={css`
          z-index: 1000;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow-y: scroll;
          background-color: rgba(0, 0, 0, 0.5);
          opacity: ${isOpen ? 1 : 0};
          transform: scale(${isOpen ? 1 : 1.04});
          transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
          visibility: ${isOpen ? 'visible' : 'hidden'};
        `}
        className={className}
      >
        <div
          css={css`
            max-width: var(--site-max-width);
            padding: 0 var(--site-content-padding);
            margin: 0 auto;
          `}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
  onCloseOverlay: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default Overlay;
