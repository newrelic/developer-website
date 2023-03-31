import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import PageLayout from '../components/PageLayout';
import FeatherIcon from '../components/FeatherIcon';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import DevSiteSeo from '../components/DevSiteSeo';
import { Link } from 'gatsby';
import { teamMembers } from '../data/nerdlogData';
import changelogBanner from '../images/changelog/changelog-banner.jpg';
import styled from '@emotion/styled';

const NerdlogPage = ({ location }) => {
  const teamMemberPanels = teamMembers.map((teamMember, i) => {
    const socialItems = teamMember.socials.map((socialNetwork, j) => {
      return (
        <li key={j}>
          <a href={socialNetwork.url}>
            <FeatherIcon name={socialNetwork.name} size="1.5rem" />
          </a>
        </li>
      );
    });

    return (
      <div
        css={css`
          text-align: center;
          max-width: 400px;
          min-height: 575px;

          @media (max-width: 760px) {
            margin-bottom: 40px;
          }

          @media (max-width: 1200px) {
            min-height: auto;
          }
        `}
        key={i}
      >
        <img
          alt={teamMember.name}
          src={teamMember.avatar}
          css={css`
            max-width: 150px;
            height: auto;
            border-radius: 50%;
          `}
        />
        <h3>{teamMember.name}</h3>
        <h4>{teamMember.pronouns}</h4>
        <ul
          css={css`
            list-style: none;
            text-align: center;
            margin: 0;
            padding: 0;
            > li {
              display: inline;
              margin: 0 5px;
              padding: 0;
            }
          `}
        >
          {socialItems}
        </ul>
        {teamMember.bio}
      </div>
    );
  });

  return (
    <>
      <DevSiteSeo location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Content>
          <section>
            <img
              src={changelogBanner}
              css={css`
                display: block;
                width: 100%;
              `}
              alt="Changelog banner"
            />
          </section>
          <Section>
            <SectionHeading>
              Learn about our latest innovations from the product managers and
              engineers
              <br /> who are building the future of New Relic{' '}
            </SectionHeading>
            <br />
            <br />
            <div
              css={css`
                display: grid;
                grid-template-columns: 55% 35%;
                grid-gap: 2rem;

                width: 85%;
                margin: 0 auto;

                @media screen and (max-width: 1200px) {
                  grid-template-columns: 100%;
                }
              `}
            >
              <div>
                <h2>
                  Get behind-the-scenes insight and detailed demonstrations of
                  our latest features and integrations
                </h2>
                <div>
                  <ul>
                    <li>
                      Understand the "why" behind the "what" - dive deeper into
                      the problems New Relic is working to solve, and the
                      process of how our latest features came to life.
                    </li>
                    <li>
                      Learn how to navigate New Relic like a pro by watching New
                      Relic product managers and engineers play with the latest
                      features and integrations.
                    </li>
                    <li>
                      Never miss an episode of Changelog, the Uptime, DataBytes
                      and more by subscribing to the New Relic &nbsp;
                      <a href="https://www.youtube.com/c/NewRelicInc">
                        YouTube Channel
                      </a>
                      .
                    </li>
                  </ul>
                  <p>
                    Looking for more info on our latest updates and releases?
                    Check out &nbsp;
                    <a href="https://docs.newrelic.com/whats-new/">
                      What's new in New Relic
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div
                css={css`
                  width: 560px;
                  @media (max-width: 760px) {
                    width: 100%;
                  }
                `}
              >
                <iframe
                  style={{ aspectRatio: '16/9' }}
                  width="100%"
                  src="https://www.youtube.com/embed/videoseries?list=PLmhYj7Jl81JEIOsmCBtTv8TDdzEqqQ8K9"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </Section>
          <Section>
            <SectionHeading>
              Hosted by <a href="https://twitter.com/leonadato">@LeonAdato</a>
              &nbsp; and New Relic's DevRel team
            </SectionHeading>
            <section
              css={css`
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 2rem;

                @media (max-width: 1400px) {
                  grid-template-columns: repeat(2, 1fr);
                }

                @media (max-width: 1200px) {
                  grid-template-columns: repeat(1, 1fr);
                }
              `}
            >
              {teamMemberPanels}
            </section>
          </Section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

NerdlogPage.propTypes = {
  location: PropTypes.object.isRequired,
};

const breakpoints = {
  laptop: '@media screen and (max-width: 1100px)',
  mobile: '@media screen and (max-width: 480px)',
};

const Section = styled.section`
  padding: 4rem 0;
  position: relative;
`;

const SectionHeading = styled.h3`
  font-size: 1.75rem;
  text-align: center;

  ${breakpoints.mobile} {
    font-size: 1.5rem;
  }
`;

const CtaItem = ({ date, to, children }) => (
  <li
    css={css`
      margin-top: 0.5rem;
      margin-right: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &:last-child {
        margin-right: 0;
      }

      ${breakpoints.mobile} {
        margin: 1rem 0 0;
      }
    `}
  >
    <Button
      as={Link}
      to={to}
      variant={Button.VARIANT.PRIMARY}
      css={css`
        background-color: #f4f4f5;
        color: #0069ce;

        &:hover {
          background-color: #edeeee;
          color: #0069ce;
        }

        &:active {
          transform: translateY(1px);
        }
      `}
    >
      {children}
    </Button>
    <span
      css={css`
        margin-top: 0.25rem;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      `}
    >
      {date}
    </span>
  </li>
);

CtaItem.propTypes = {
  date: PropTypes.string.isRequired,
  to: PropTypes.string,
  children: PropTypes.string,
};

export default NerdlogPage;
