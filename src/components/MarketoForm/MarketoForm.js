import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import './marketo.scss';
import useMarketoForm from '../../hooks/useMarketoForm';

const MarketoForm = ({
  title,
  id,
  munchkinId,
  publishableKey,
  redirectLink,
}) => {
  const loaded = useMarketoForm(munchkinId, id, publishableKey, redirectLink);

  return loaded ? (
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
          padding: 1.25rem;
        `}
      >
        <p
          css={css`
            font-size: 1rem;
            font-weight: bold;
            text-align: center;
          `}
        >
          {title}
        </p>
        <form id={`mktoForm_${id}`} />
      </div>
    </div>
  ) : null;
};

MarketoForm.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  munchkinId: PropTypes.string.isRequired,
  publishableKey: PropTypes.string.isRequired,
  redirectLink: PropTypes.string.isRequired,
};

export default MarketoForm;
