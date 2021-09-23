import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Button, Link, Icon } from '@newrelic/gatsby-theme-newrelic';
import {
  getPackNr1Url,
  getGuidedInstallStackedNr1Url,
} from '../utils/get-pack-nr1-url';
import {
  NR1_LOGIN_URL,
  NR1_GUIDED_INSTALL_NERDLET,
  NR1_PACK_DETAILS_NERDLET,
  UTM_PARAMETERS,
  NR1_SIGNUP_URL,
} from '../data/constants';
import { quickstart } from '../types';

/**
 * @param {String} parameters
 * @returns {Array}
 */
const strippedParameters = (parameters) => {
  return parameters[0] === '?'
    ? parameters.slice(1).split('&')
    : parameters.split('&');
};

/**
 * @param {Object} location
 * @returns {String}
 */
const checkUtmParameters = (location) => {
  const { state } = location;
  if (!state) {
    return false;
  }
  const { search: parameters } = state.prevPath;
  const parametersArray = strippedParameters(parameters);

  const hasUtmParameters = parametersArray.some((value) =>
    UTM_PARAMETERS.includes(value)
  );
  return hasUtmParameters;
};

/**
 * @param {String} id
 * @param {String} nerdletId
 * @param {Boolean} hasGuidedInstall
 * @param {Boolean} hasUtmParameters
 * @param {String} parameters
 * @returns {String}
 */
const createInstallLink = (
  id,
  nerdletId,
  hasGuidedInstall,
  hasUtmParameters,
  parameters
) => {
  const platformUrl = hasGuidedInstall
    ? getGuidedInstallStackedNr1Url(nerdletId)
    : getPackNr1Url(id, nerdletId);

  const url = new URL(
    `?${parameters}&return_to=${encodeURIComponent(platformUrl)}`,
    hasUtmParameters ? NR1_SIGNUP_URL : NR1_LOGIN_URL
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

const InstallButton = ({ quickstart, location, ...props }) => {
  const hasInstallableComponent = hasComponent(quickstart, 'installPlans');

  const parameters =
    location.state && strippedParameters(location.state.prevPath.search);

  const hasGuidedInstall =
    hasInstallableComponent &&
    quickstart.installPlans.length === 1 &&
    quickstart.installPlans[0].id.includes('guided-install');

  // If there is nothing to install AND no documentation, don't show this button.
  if (!hasInstallableComponent && !hasComponent(quickstart, 'documentation')) {
    return null;
  }

  const nerdletId = hasGuidedInstall
    ? NR1_GUIDED_INSTALL_NERDLET
    : NR1_PACK_DETAILS_NERDLET;

  const hasUtmParameters = checkUtmParameters(location);

  // If we have an install-able component, generate a URL. Otherwise, link to the
  // first documentation supplied.
  const url = hasInstallableComponent
    ? createInstallLink(
        quickstart.id,
        nerdletId,
        hasGuidedInstall,
        hasUtmParameters,
        parameters
      )
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
  location: PropTypes.object.isRequired,
};

export default InstallButton;
