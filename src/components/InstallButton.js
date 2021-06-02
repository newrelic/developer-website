import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown, Link } from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';

const sampleItems = new Array(10).fill().map((_, i) => i + 1);

const createMenuItems = (children, items) => {
  const menuItems = [];
  for (const item of items) {
    menuItems.push(<Dropdown.MenuItem>{item}</Dropdown.MenuItem>);
  }
  return menuItems;
};

const createInstallLink = () => {
  return `https://one.newrelic.com/launcher/nr1-core.explorer`;
};

const InstallButton = ({ children, title, ...props }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        float: right;
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
      <Dropdown>
        <Dropdown.Toggle
          variant={Button.VARIANT.PRIMARY}
          css={css`
            border-bottom-left-radius: 0px;
            border-top-left-radius: 0px;
            padding: 5px;
          `}
        />
        <Dropdown.Menu>{createMenuItems(children, sampleItems)}</Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

InstallButton.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  guid: PropTypes.string,
};

export default InstallButton;
