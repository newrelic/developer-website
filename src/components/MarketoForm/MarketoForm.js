import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { navigate } from 'gatsby';
import useMarketoForm from '../../hooks/useMarketoForm';
import Spinner from '../Spinner';
import './marketo.scss';

const MarketoForm = ({
  title,
  id,
  munchkinId,
  publishableKey,
  redirectLink,
}) => {
  const [, { state }] = useMarketoForm({
    munchkinId,
    id,
    publishableKey,
    onSubmit: () => navigate(redirectLink),
  });

  return (
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
        <h4
          css={css`
            font-weight: bold;
            text-align: center;
            margin-bottom: 1rem;
          `}
        >
          {title}
        </h4>
        <form id={`mktoForm_${id}`} />
        {state.matches('blocked') && (
          <Error>
            Unable to load the form. Perhaps you have an ad blocker enabled? If
            you’re having issues registering, or any questions, email
            deco@newrelic.com
          </Error>
        )}
        {state.matches('error') && <Error>Unable to load the form.</Error>}
        {state.matches('loading') && <Spinner />}
      </div>
    </div>
  );
};

const Error = ({ children }) => (
  <div
    css={css`
      padding: 1rem;
      border-radius: 0.25rem;
      background: var(--color-red-100);
      font-size: 0.875rem;

      .dark-mode & {
        background: var(--color-red-900);
      }
    `}
  >
    {children}
  </div>
);

Error.propTypes = {
  children: PropTypes.node,
};

MarketoForm.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  munchkinId: PropTypes.string.isRequired,
  publishableKey: PropTypes.string.isRequired,
  redirectLink: PropTypes.string.isRequired,
};

export default MarketoForm;
