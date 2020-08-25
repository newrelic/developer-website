import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import './marketo.scss';

const Form = ({ title, id, children }) => (
  <div
    css={css`
      position: relative;
    `}
  >
    <div
      css={css`
        position: relative;
        background-color: var(--primary-background-color);
        border-radius: 5px;
        border: 1px solid var(--border-color);
        padding: 20px;
      `}
    >
      <p
        css={css`
          font-size: 20px;
          font-weight: bold;
          text-align: center;
        `}
      >
        {title}
      </p>
      <form id={`mktoForm_${id}`} />
      {children}
    </div>
  </div>
);

Form.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Form;
