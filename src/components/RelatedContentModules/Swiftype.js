/* eslint-disable jsx-a11y/no-onchange */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql, Link } from 'gatsby';
import Section from './Section';
import Title from './Title';
import { ExternalLink, Icon, Tag } from '@newrelic/gatsby-theme-newrelic';
import { useLocation } from '@reach/router';
import * as queries from '../relatedQueries';
import { merge } from 'lodash';

const ENGINE_KEY = 'Ad9HfGjDw4GRkcmJjUut';
const PER_PAGE = 5;

const SITE_TAGS = {
  developer: 'https://developer.newrelic.com',
  'open source': 'https://opensource.newrelic.com',
  docs: 'https://docs.newrelic.com',
  community: 'https://discuss.newrelic.com',
  learn: 'https://learn.newrelic.com',
  blog: 'https://blog.newrelic.com',
  main: 'https://newrelic.com',
};

const findTag = (page) =>
  Object.keys(SITE_TAGS).find((tag) => page.url.startsWith(SITE_TAGS[tag]));

const normalizeDeveloperUrl = (url) =>
  url.replace('https://developer.newrelic.com', '');

const Swiftype = ({ page }) => {
  const [currentQuery, setCurrentQuery] = useState('titleOnly');
  const [relatedPages, setRelatedPages] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    setRelatedPages([]);

    const params = queries[currentQuery].params({ page });

    fetch('https://search-api.swiftype.com/api/v1/public/engines/search.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        merge(params, {
          engine_key: ENGINE_KEY,
          per_page: PER_PAGE,
          filters: {
            page: {
              url: [
                `!https://developer.newrelic.com${pathname}/`,
                ...(params.filters?.page?.url ?? []),
              ],
            },
          },
        })
      ),
    })
      .then((res) => res.json())
      .then(({ records }) => setRelatedPages(records.page));
  }, [currentQuery, pathname, page]);

  return (
    <Section>
      <Title>Swiftype Resources</Title>
      <select
        onChange={(e) => setCurrentQuery(e.target.value)}
        value={currentQuery}
        css={css`
          width: 100%;
          margin-bottom: 1rem;
        `}
      >
        {Object.entries(queries).map(([key, query]) => (
          <option key={key} value={key}>
            {query.name}
          </option>
        ))}
      </select>
      <nav>
        <ul
          css={css`
            list-style: none;
            margin: 0;
            padding: 0;
          `}
        >
          {relatedPages.map((page) => {
            const tag = findTag(page);
            const isDeveloperSite = tag === 'developer';
            const LinkElement = isDeveloperSite ? Link : ExternalLink;
            const props = isDeveloperSite
              ? { to: normalizeDeveloperUrl(page.url) }
              : { href: page.url };

            return (
              <li
                key={page.id}
                css={css`
                  margin-bottom: 1rem;
                `}
              >
                <LinkElement
                  {...props}
                  css={css`
                    display: block;
                    margin-bottom: 0.25rem;
                  `}
                >
                  <span
                    css={css`
                      vertical-align: middle;
                    `}
                  >
                    {page.title}
                  </span>

                  {!isDeveloperSite && (
                    <Icon
                      name={Icon.TYPE.EXTERNAL_LINK}
                      css={css`
                        margin-left: 0.25rem;
                        vertical-align: middle;
                      `}
                    />
                  )}
                </LinkElement>

                <Tag>{tag}</Tag>
              </li>
            );
          })}
        </ul>
      </nav>
    </Section>
  );
};

Swiftype.propTypes = {
  page: PropTypes.object,
};

export const query = graphql`
  fragment Swiftype_page on Mdx {
    frontmatter {
      title
      description
    }
  }
`;

export default Swiftype;
