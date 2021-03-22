import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/core';
import ToolTip from '../Tooltip';
import PropsModal from '../Playground/PropsModal';
import Markdown from '../Markdown';

const ComponentItem = ({ component, onAdd }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      css={css`
        padding: 0.5rem 1rem;
        &:not(:last-child) {
          border-bottom: 1px solid var(--border-color);
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin: 0;
          padding: 0;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            align-items: flex-end;
          `}
        >
          <span
            css={css`
              margin-right: 0.25rem;
            `}
          >
            {component.name}
          </span>
          <ToolTip.Wrapper>
            <Icon name="fe-info" size="0.825rem" />
            <ToolTip>
              <Markdown>{component.description}</Markdown>
            </ToolTip>
          </ToolTip.Wrapper>
        </div>{' '}
        <Button
          variant={Button.VARIANT.NORMAL}
          type="button"
          onClick={() => onAdd(`<${component.name}></${component.name}>`)}
          size={Button.SIZE.EXTRA_SMALL}
        >
          Add
        </Button>
      </div>
      <Button
        css={css`
          padding: 0;
        `}
        variant={Button.VARIANT.LINK}
        type="button"
        onClick={() => setIsModalOpen(true)}
        size={Button.SIZE.EXTRA_SMALL}
      >
        <span
          css={css`
            padding-right: 0.25rem;
          `}
        >
          Configure Props
        </span>
        <Icon name="fe-arrow-right" />
      </Button>
      <PropsModal
        isOpen={isModalOpen}
        onAdd={onAdd}
        onClose={() => setIsModalOpen(false)}
        component={component}
      />
    </div>
  );
};

ComponentItem.propTypes = {
  component: PropTypes.object,
  onClick: PropTypes.func,
};

export default ComponentItem;
