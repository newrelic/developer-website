import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Button, Link, Icon } from '@newrelic/gatsby-theme-newrelic';
import getPackNr1Url from '../utils/get-pack-nr1-url';
import { NR1_LOGIN_URL } from '../data/constants';
import { quickstart } from '../types';

/**
 * @param {String} id
 * @returns {String}
 */
const createInstallLink = (id) => {
  const platformUrl = getPackNr1Url(id);
  const url = new URL(
    `?return_to=${encodeURIComponent(platformUrl)}`,
    NR1_LOGIN_URL
  );

  return url.href;
};

/**
 * @param {quickstart} quickstart
 * @param {String} key
 * @returns {Boolean}
 */
const hasComponent = (quickstart, key) =>
  quickstart[key] && quickstart[key].length > 0;

const InstallButton = ({ quickstart, ...props }) => {
  const hasInstallableComponent =
    hasComponent(quickstart, 'dashboards') ||
    hasComponent(quickstart, 'alerts');

  // If there is nothing to install AND no documentation, don't show this button.
  if (!hasInstallableComponent && !hasComponent(quickstart, 'documentation')) {
    return null;
  }

  // If we have an install-able component, generate a URL. Otherwise, link to the
  // first documentation supplied.
  const url = hasInstallableComponent
    ? createInstallLink(quickstart.id)
    : quickstart.documentation[0].url;

  return (
    <Button {...props} as={Link} to={url} variant={Button.VARIANT.PRIMARY}>
      {hasInstallableComponent ? (
        <>
          <Icon
            name="fe-plus"
            viewBox="0 0 16 16"
            css={css`
              margin-right: 7px;
            `}
          />
          Install quickstart
        </>
      ) : (
        'See installation docs'
      )}
    </Button>
  );
};

InstallButton.propTypes = {
  quickstart: quickstart.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default InstallButton;
