import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import SuperTilesExperiment from '../../experiments/super_tiles';
import IOLogo from '../IOLogo';
import { Link, Button } from '@newrelic/gatsby-theme-newrelic';

const QuickstartsSidebar = ({
  isMobile,
  categoriesWithCount,
  category,
  handleCategory,
}) => (
  <aside
    data-swiftype-index={false}
    css={css`
      grid-area: sidebar;
      border-right: ${isMobile ? 'none' : '1px solid var(--divider-color)'};
      height: calc(100vh - var(--global-header-height));
      position: sticky;
      top: var(--global-header-height);

      @media screen and (max-width: 760px) {
        display: block;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }
    `}
  >
    {/* FIXME super tiles component moved out of experiment folder */}
    {isMobile && <SuperTilesExperiment isMobile />}
    <div
      css={css`
        padding: var(--site-content-padding);
        height: 100%;
        overflow: auto;
        @media screen and (max-width: 760px) {
          position: relative;
        }
      `}
    >
      <Link
        css={css`
          display: block;
          margin-bottom: 1rem;
        `}
        to="/instant-observability"
      >
        <IOLogo
          css={css`
            width: 100%;
          `}
        />
      </Link>
      <p>
        A place to find quickstarts of resources like dashboards,
        instrumentation, and alerts to help you monitor your environment.
      </p>
      <aside
        data-swiftype-index={false}
        css={css`
          border-bottom: 1px solid var(--divider-color);
          margin-bottom: 1.5rem;
        `}
      />
      {!isMobile && (
        <>
          <FormControl>
            <Label htmlFor="quickstartCategory">CATEGORIES</Label>
            {categoriesWithCount.map(({ displayName, terms, slug, count }) => (
              <Button
                type="button"
                key={slug}
                disabled={count === 0}
                onClick={() => handleCategory(terms)}
                css={css`
                  padding: 1rem 0.5rem;
                  width: 100%;
                  display: flex;
                  justify-content: flex-start;
                  color: var(--primary-text-color);
                  font-weight: 100;
                  background: ${category === terms.toString()
                    ? 'var(--divider-color)'
                    : 'none'};
                `}
              >
                {`${displayName} (${count})`}
              </Button>
            ))}
          </FormControl>
        </>
      )}
    </div>
  </aside>
);

QuickstartsSidebar.propTypes = {
  isMobile: PropTypes.bool,
  categoriesWithCount: PropTypes.array,
  category: PropTypes.string,
  handleCategory: PropTypes.func,
};

const Label = ({ children, htmlFor }) => (
  <label
    htmlFor={htmlFor}
    css={css`
      display: block;
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 0.25rem;
    `}
  >
    {children}
  </label>
);

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};

const FormControl = ({ children }) => (
  <div
    css={css`
      margin: 0 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @media screen and (max-width: 1180px) {
        margin: 0.5rem 0;
      }
    `}
  >
    {children}
  </div>
);

FormControl.propTypes = {
  children: PropTypes.node,
};

export default QuickstartsSidebar;
