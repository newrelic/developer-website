import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Portal, Button, Icon } from '@newrelic/gatsby-theme-newrelic';

const Modal = ({ children, onClose, isOpen }) => {
  return isOpen ? (
    <Portal>
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 100;
          width: 500px;
          background-color: var(--secondary-background-color);
          height: 100vh;
          overflow: scroll;
        `}
      >
        <div
          css={css`
            margin: 0.25rem;
            display: flex;
            justify-content: flex-end;
          `}
        >
          <Button variant={Button.VARIANT.LINK} onClick={onClose}>
            <Icon name="fe-x" />
          </Button>
        </div>
        <div
          css={css`
            padding: 1rem 2rem 2rem 2rem;
          `}
        >
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Modal;
