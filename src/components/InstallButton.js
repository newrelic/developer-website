import React from 'react';
import PropTypes from 'prop-types';
import { Button, Link } from '@newrelic/gatsby-theme-newrelic';
import getPackNr1Url from '../utils/get-pack-nr1-url';
import { NR1_LOGIN_URL } from '../data/constants';

/** @param {string} packId */
const createInstallLink = (packId) => {
  const platformUrl = getPackNr1Url(packId); // FIXME: remove `true` when deployed
  const url = new URL(
    `?return_to=${encodeURIComponent(platformUrl)}`,
    NR1_LOGIN_URL
  );

  return url.href;
};

const InstallButton = ({ packId, ...props }) => (
  <Button
    {...props}
    as={Link}
    to={createInstallLink(packId)}
    variant={Button.VARIANT.PRIMARY}
  >
    Install Pack
  </Button>
);

InstallButton.propTypes = {
  packId: PropTypes.string.isRequired,
};

export default InstallButton;
