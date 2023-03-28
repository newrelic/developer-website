/* eslint-disable jsx-a11y/anchor-has-content */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
import {
  useLocale,
  Icon,
  useInstrumentedHandler,
} from '@newrelic/gatsby-theme-newrelic';
import SignUpLink from '../../../components/SignupLink';
import { localizePath } from '../../../utils/localizePath';

import { css } from '@emotion/react';

const isHash = (to) => to.startsWith('#');
const isExternal = (to) => to.startsWith('http');
const isNewRelicDomain = (to) =>
  to.endsWith('newrelic.com') || to.includes('newrelic.com/');
const isSignup = (to) => to.startsWith('https://newrelic.com/signup');
const isImageLink = (className) => className === 'gatsby-resp-image-link';
const isRelativePath = (to) => !to.startsWith('http') && to.startsWith('/');

const Link = forwardRef(
  (
    {
      to,
      onClick,
      instrumentation = {},
      displayExternalIcon,
      shouldAutoLocalize = true,
      isEmbedPageLink = false,
      ...props
    },
    ref
  ) => {
    const locale = useLocale();

    const {
      site: {
        siteMetadata: { siteUrl },
      },
    } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `);

    const handleExternalLinkClick = useInstrumentedHandler(onClick, {
      eventName: 'externalLinkClick',
      category: 'LinkClick',
      origin: 'gatsbyTheme',
      href: to,
      ...instrumentation,
    });

    const handleInternalLinkClick = useInstrumentedHandler(onClick, {
      eventName: 'internalLinkClick',
      category: 'LinkClick',
      origin: 'gatsbyTheme',
      href: to,
      ...instrumentation,
    });

    if (to.startsWith(siteUrl)) {
      to = to.replace(siteUrl, '');

      // absolute links to the home page without trailing slash
      to = to || '/';
    }

    if (isHash(to)) {
      return <a ref={ref} href={to} {...props} />;
    }

    if (isSignup(to)) {
      return (
        <SignUpLink
          {...props}
          href={to}
          onClick={handleExternalLinkClick}
          instrumentation={instrumentation}
          ref={ref}
        />
      );
    }

    if (isExternal(to) || isEmbedPageLink) {
      if (isRelativePath(to)) {
        to = siteUrl + to;
      }

      const rel = isNewRelicDomain(to) ? 'noopener' : 'noopener noreferrer';

      return (
        <>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a
            {...props}
            href={to}
            onClick={handleExternalLinkClick}
            target="_blank"
            rel={rel}
            ref={ref}
          >
            {props.children}
            {displayExternalIcon && (
              <Icon
                name="fe-external-link"
                css={css`
                  margin-left: 0.25rem;
                  position: relative;
                  top: -1px;
                `}
                size="1em"
              />
            )}
          </a>
        </>
      );
    }

    if (isImageLink(props.className)) {
      return <a {...props} href={to} />;
    }

    return (
      <GatsbyLink
        to={
          shouldAutoLocalize
            ? localizePath({
                path: to,
                locale,
              })
            : to
        }
        ref={ref}
        onClick={handleInternalLinkClick}
        {...props}
      />
    );
  }
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  instrumentation: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  shouldAutoLocalize: PropTypes.bool,
  displayExternalIcon: PropTypes.bool,
  isEmbedPageLink: PropTypes.bool,
};

export default Link;
