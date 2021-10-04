import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Button, Icon, Link } from '@newrelic/gatsby-theme-newrelic';
import { QUICKSTARTS_REPO } from '../../data/constants';

const EmptyTab = ({
  quickstartName,
  tabName,
  quickstartUrl = QUICKSTARTS_REPO,
}) => (
  <div
    css={css`
      border: 1px solid var(--divider-color);
      border-radius: 0.25rem;
      padding: 1rem;
      text-align: center;
    `}
  >
    <Icon
      css={css`
        display: block;
        margin: 2rem auto;
        font-size: 4rem;
        color: var(--divider-color);
      `}
      name="edit"
    />
    <p>
      This quickstart doesn't include any {tabName}. Do you think it should?
      <br />
      You can edit this quickstart to add helpful components. View the
      repository and open a pull request.
    </p>
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <Button
        as={Link}
        variant={Button.VARIANT.PRIMARY}
        to={quickstartUrl}
        rel="noopener noreferrer"
        instrumentation={{ quickstartName }}
      >
        <Icon
          name="fe-github"
          css={css`
            margin-right: 7px;
          `}
        />
        View repo
      </Button>
    </div>
  </div>
);

EmptyTab.propTypes = {
  quickstartName: PropTypes.string.isRequired,
  tabName: PropTypes.string.isRequired,
  quickstartUrl: PropTypes.string,
};

export default EmptyTab;
