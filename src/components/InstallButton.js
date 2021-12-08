import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Button, Link, Icon, useTessen } from '@newrelic/gatsby-theme-newrelic';
import {
  getPackNr1Url,
  getGuidedInstallStackedNr1Url,
} from '../utils/get-pack-nr1-url';
import {
  NR1_GUIDED_INSTALL_NERDLET,
  NR1_PACK_DETAILS_NERDLET,
  NR1_CODESTREAM_INSTALL_NERDLET,
  CODESTREAM_QUICKSTART_ID,
  UTM_PARAMETERS,
  SIGNUP_LINK,
} from '../data/constants';
import Cookies from 'js-cookie';
import useTreatment from '../hooks/useTreatment';

/**
 * @param {Object} parameters
 * @returns {Boolean}
 */
const checkUtmParameters = (parameters) => {
  if (!parameters) {
    return false;
  }

  const hasUtmParameters = Object.entries(UTM_PARAMETERS).some(
    ([key, value]) => {
      return parameters.get(key) === value;
    }
  );

  return hasUtmParameters;
};

/**
 * Method which returns `false` if current user is 'new'. Returns `true` if user is a returning user.
 * @returns {Boolean}
 */
const checkIfReturningUser = () => {
  return Boolean(Cookies.get('ajs_user_id'));
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
  isReturningUser,
  parameters
) => {
  const platformUrl = hasGuidedInstall
    ? getGuidedInstallStackedNr1Url(nerdletId)
    : getPackNr1Url(id, nerdletId);

  const installUrl = new URL(isReturningUser ? platformUrl : SIGNUP_LINK);
  if (parameters) {
    parameters.forEach((value, key) => {
      installUrl.searchParams.set(key, value);
    });
  }

  if (hasUtmParameters) {
    installUrl.searchParams.set('return_to', platformUrl);
  }
  return installUrl.href;
};

/**
 * @param {quickstart} quickstart
 * @param {String} key
 * @returns {Boolean}
 */

const InstallButton = ({ quickstart, location, ...props }) => {
  const { treatment } = useTreatment('super_tiles');
  const { installer, id, slug, quickstartUrl, documentation } = quickstart;

  const hasInstallableComponent =
    installer.steps || id === CODESTREAM_QUICKSTART_ID;

  const tessen = useTessen();

  const [parameters, setParameters] = useState();
  useEffect(() => {
    if (location.search) {
      setParameters(new URLSearchParams(location.search));
    }
  }, [location.search, setParameters]);

  const hasGuidedInstall =
    hasInstallableComponent &&
    installer.steps.length === 1 &&
    installer.steps[0].id.includes('guided-install');

  let nerdletId = hasGuidedInstall
    ? NR1_GUIDED_INSTALL_NERDLET
    : NR1_PACK_DETAILS_NERDLET;

  if (id === CODESTREAM_QUICKSTART_ID) {
    nerdletId = NR1_CODESTREAM_INSTALL_NERDLET;
  }
  const hasUtmParameters = checkUtmParameters(parameters);
  // If we have an install-able component, generate a URL. Otherwise, link to the
  // first documentation supplied.
  const url = hasInstallableComponent
    ? createInstallLink(
        id,
        nerdletId,
        hasGuidedInstall,
        hasUtmParameters,
        checkIfReturningUser(),
        parameters
      )
    : quickstart.documentation[0].url;

  const [installUrl, setInstallUrl] = useState(SIGNUP_LINK);
  useEffect(() => {
    setInstallUrl(url);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If there is nothing to install AND no documentation, don't show this button.
  if (!hasInstallableComponent && !documentation.length > 0) {
    return null;
  }

  const writeCookie = () => {
    const currentEnvironment =
      process.env.ENV || process.env.NODE_ENV || 'development';
    const options = { expires: 1 /* days */ };
    if (currentEnvironment !== 'development') {
      options.domain = 'newrelic.com';
    }

    const startTarget = btoa(
      JSON.stringify({
        source: 'nrio',
        id: id,
      })
    );
    Cookies.set('start_target', startTarget, options);
    Cookies.set('newrelic-quickstart-id', id, options);
  };

  const handleInstallClick = () => {
    writeCookie();
    tessen.track({
      eventName: 'instantObservability',
      category: 'QuickstartInstall',
      quickstartName: slug,
      quickstartId: id,
      quickstartUrl: quickstartUrl,
      super_tiles_treatment: treatment,
      quickstartButtonText: hasInstallableComponent
        ? 'Install quickstart'
        : 'See installation docs',
    });
  };

  return (
    <Button
      {...props}
      as={Link}
      to={installUrl}
      onClick={handleInstallClick}
      variant={Button.VARIANT.PRIMARY}
    >
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
  quickstart: PropTypes.shape({
    installer: PropTypes.object,
    id: PropTypes.string,
    quickstartUrl: PropTypes.string,
    slug: PropTypes.string,
    documentation: PropTypes.array,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default InstallButton;
