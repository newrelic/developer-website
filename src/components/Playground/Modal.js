import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Portal, Button, Icon } from '@newrelic/gatsby-theme-newrelic';
import { animated, useSpring, useTransition, useChain } from 'react-spring';

const Modal = ({ children, onClose, isOpen }) => {
  const springRef = useRef();
  const transitionRef = useRef();
  const { width } = useSpring({ width: isOpen ? 600 : 0, ref: springRef });
  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    ref: transitionRef,
  });

  useChain([springRef, transitionRef]);

  return (
    <Portal>
      <animated.div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 100;
          background-color: var(--secondary-background-color);
          height: 100vh;
          overflow-y: scroll;
        `}
        style={{ width }}
      >
        {isOpen && (
          <>
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
            {transitions.map(
              ({ item, key, props }) =>
                item && (
                  <animated.div
                    key={key}
                    style={props}
                    css={css`
                      padding: 1rem 2rem 2rem 2rem;
                    `}
                  >
                    {children}
                  </animated.div>
                )
            )}
          </>
        )}
      </animated.div>
    </Portal>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Modal;
