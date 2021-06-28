import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown, Link } from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';

const sampleItems = new Array(10).fill().map((_, i) => i + 1);

const createMenuItems = (items, index) =>
  items.map((item) => (
    <Dropdown.MenuItem key={index}>{item}</Dropdown.MenuItem>
  ));

const createInstallLink = () => {
  return `https://one.newrelic.com/launcher/nr1-core.explorer`;
};

const InstallButton = ({ title, ...props }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
      `}
    >
      <Button
        {...props}
        as={Link}
        to={createInstallLink()}
        variant={Button.VARIANT.PRIMARY}
        css={css`
          border-bottom-right-radius: 0px;
          border-top-right-radius: 0px;
          margin-right: 2px;
        `}
      >
        {title}
      </Button>
      <Dropdown align="right">
        <Dropdown.Toggle
          variant={Button.VARIANT.PRIMARY}
          css={css`
            border-bottom-left-radius: 0px;
            border-top-left-radius: 0px;
            padding: 5px;
          `}
        />
        <Dropdown.Menu>{createMenuItems(sampleItems)}</Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

InstallButton.propTypes = {
  title: PropTypes.string.isRequired,
  guid: PropTypes.string.isRequired,
};

export default InstallButton;
