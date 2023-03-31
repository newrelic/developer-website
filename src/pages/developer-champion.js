import React from 'react';
import PropTypes from 'prop-types';
import DevSiteSeo from '../components/DevSiteSeo';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import PageLayout from '../components/PageLayout';
import ExternalLink from '../components/ExternalLink';
import FeatherIcon from '../components/FeatherIcon';
import devChampionHeader from '../images/developer-champion/developer-champions.jpg';
import uptimeEverythingHeader from '../images/developer-champion/uptime-everything-header-image.jpg';
import { css } from '@emotion/react';

const DeveloperChampionPage = ({ location }) => {
  return (
    <>
      <DevSiteSeo location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="New Relic Developer Champions" />
        <PageLayout.Content>
          <section
            css={css`
              &:not(:last-child) {
                margin-bottom: 4rem;
              }
              display: grid;
              grid-template-columns: repeat(2, calc(50% - 1rem));
              grid-gap: 2rem;

              @media (max-width: 760px) {
                grid-template-columns: 1fr;
              }
            `}
          >
            <div>
              <p>
                New Relic Champions are the voice of the developer community. As
                experts and innovators, they are given the resources to not only
                share the newest product innovations and updates but also to
                provide feedback of the community back to New Relic product and
                engineering teams.
              </p>
              <p>
                Champions solve big problems using New Relic as their toolkit
                and are recognized as experts and leaders in the New Relic
                technical community.{' '}
              </p>
              <Button
                as={ExternalLink}
                variant={Button.VARIANT.PRIMARY}
                href="https://forms.gle/Zkdub5e1x4MNqSKW9"
              >
                Nominate a developer champion
                <FeatherIcon
                  css={css`
                    margin-left: 0.5rem;
                  `}
                  name="external-link"
                />
              </Button>
            </div>
            <img
              css={css`
                width: 100%;
              `}
              src={devChampionHeader}
              alt="developer champion header"
            />
          </section>
          <section
            css={css`
              &:not(:last-child) {
                margin-bottom: 4rem;
              }
            `}
          >
            <h2>What do Developer Champions do?</h2>
            <p>
              New Relic Champions demonstrate expertise in using New Relic
              products by solving large problems and positioning New Relic as a
              central force in their strategies. The New Relic Champions is a
              recognition and partnership program designed to acknowledge the
              developers that are driving innovation within their companies and
              making top contributions to the developer community.They also
              commit to making their work public by:
            </p>
          </section>
          <section
            css={css`
              &:not(:last-child) {
                margin-bottom: 4rem;
              }
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 2rem;

              @media (max-width: 760px) {
                display: block;
                text-align: center;
              }
            `}
          >
            <div
              css={css`
                text-align: center;
                max-width: 400px;
                margin: auto;

                @media (max-width: 760px) {
                  margin-bottom: 40px;
                }
              `}
            >
              <FeatherIcon
                css={css`
                  --feather-icon-stroke-width: 1;

                  margin-bottom: 2rem;
                  color: var(--color-brand-500);
                `}
                name="github"
                size="4rem"
              />
              <h4>Open-source contributions</h4>
              <p>
                Serving as an open-source author or maintainer for an accepted
                public project related to New Relic One
              </p>
            </div>
            <div
              css={css`
                text-align: center;
                max-width: 400px;
                margin: auto;

                @media (max-width: 760px) {
                  margin-bottom: 40px;
                }
              `}
            >
              <FeatherIcon
                css={css`
                  --feather-icon-stroke-width: 1;

                  margin-bottom: 2rem;
                  color: var(--color-brand-500);
                `}
                name="trello"
                size="4rem"
              />
              <h4>Content creation</h4>
              <p>
                Authoring two pieces of content in the New Relic Explorers Hub /
                Dev website
              </p>
            </div>
            <div
              css={css`
                text-align: center;
                max-width: 400px;
                margin: auto;

                @media (max-width: 760px) {
                  margin-bottom: 40px;
                }
              `}
            >
              <FeatherIcon
                css={css`
                  --feather-icon-stroke-width: 1;

                  margin-bottom: 2rem;
                  color: var(--color-brand-500);
                `}
                name="users"
                size="4rem"
              />
              <h4>Community engagement</h4>
              <p>
                Delivering and/or organizing two events focused on an
                observability platform theme in which New Relic plays a crucial
                role
              </p>
            </div>
            <Button
              as={ExternalLink}
              css={css`
                grid-column: 2;
                justify-self: center;
              `}
              href="https://forms.gle/Zkdub5e1x4MNqSKW9"
              variant={Button.VARIANT.PRIMARY}
            >
              Nominate a Developer Champion{' '}
              <FeatherIcon
                name="external-link"
                css={css`
                  margin-left: 0.5rem;
                `}
              />
            </Button>
          </section>
          <section
            css={css`
              &:not(:last-child) {
                margin-bottom: 4rem;
              }
              display: grid;
              grid-template-columns: repeat(2, calc(50% - 1rem));
              grid-gap: 2rem;

              @media (max-width: 760px) {
                grid-template-columns: 1fr;
              }
            `}
          >
            <div>
              <h2>Why should you join and how will we support?</h2>
              <p>
                As a benefit of being a Developer Champion, New Relic provides
                unique access to our Developer Advocacy team and the resources
                of our product organization, as well as specialized recognition
                and rewards.
              </p>
              <h2>Developer Champions benefits:</h2>
              <ul>
                <li>
                  Formal, specialized access to the New Relic Product
                  organization
                  <ul>
                    <li>
                      Champions have direct access to the New Relic’s Developer
                      Ecosystem team
                    </li>
                    <li>Custom badge to wear with pride at events</li>
                  </ul>
                </li>
                <li>
                  Public recognition on the New Relic Developer website and
                  badging in the New Relic Explorers Hub as a Champion
                </li>
                <li>Exclusive Champion-only swag</li>
                <li>
                  Early access program for some of our products (under NDA)
                </li>
                <li>
                  Priority access to off-site FutureHack events (including when
                  Lew is participating)
                </li>
                <li>
                  Increased Explorer’s Hub support SLA Access to private
                  Developer Champion Explorer’s Hub group
                </li>
              </ul>
            </div>
            <img
              css={css`
                width: 100%;
              `}
              src={uptimeEverythingHeader}
              alt="uptime everything header"
            />
          </section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

DeveloperChampionPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default DeveloperChampionPage;
