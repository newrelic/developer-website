import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import cx from 'classnames';
import PageLayout from '../components/PageLayout';
import FeatherIcon from '../components/FeatherIcon';
import MarketoForm from '../components/MarketoForm';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import DevSiteSeo from '../components/DevSiteSeo';
import { Link } from 'gatsby';
import * as styles from './nerdlog.module.scss';
import { teamMembers } from '../data/nerdlogData';
import nerdlogBanner from '../images/nerdlog/nerdlog-banner.png';
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
      <div className={styles.point} key={i}>
        <img
          alt={teamMember.name}
          src={teamMember.avatar}
          className={styles.avatar}
        />
        <h3>{teamMember.name}</h3>
        <h4>{teamMember.pronouns}</h4>
        <ul className={styles.socials}>{socialItems}</ul>
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
              src={nerdlogBanner}
              className={cx(styles.nerdlogBanner)}
              alt="Nerdlog banner"
            />
          </section>
          <Section>
            <SectionHeading>
              Get weekly product updates, watch demos, and
              <br /> share tips and tricks{' '}
            </SectionHeading>
            <SectionDescription>
              Watch and engage with New Relic product managers and engineers who
              are building the future of New Relic
            </SectionDescription>
            <div
              className={cx(styles.twoColumnAlt, styles.registrationSection)}
            >
              <div>
                <h2>What is the New Relic Changelog?</h2>
                <p>
                  The Changelog is our brand new live stream changelog on{' '}
                  <a href="https://www.twitch.tv/new_relic">Twitch</a> that lets you:
                </p>
                <div>
                  <ul>
                    <li>
                      <strong>
                        Learn about the latest features from the people who
                        built them
                      </strong>
                      <br />
                      Watch New Relic product managers and engineers play with
                      the latest features and integrations to help you navigate
                      New Relic One like a pro.
                    </li>
                    <li>
                      <strong>
                        Get some knowledge, a little inspiration, and a whole
                        lot of answers
                      </strong>
                      <br />
                      Walk away with tons of resources, projects with
                      step-by-step instructions, and all your questions
                      answered.
                    </li>
                    <li>
                      <strong>Connect with other engineers </strong>
                      <br />
                      Share your experiences with other New Relic users and have
                      fun as you learn about observability.{' '}
                    </li>
                    <br />
                  </ul>
                </div>
                <div style={{ display: 'none' }}>
                  <p>Check out our playlist on{' '}
                    <a href="https://www.youtube.com/playlist?list=PLmhYj7Jl81JGOEHV7zUVfa_iGNyOfMGNh">
                      YouTube.
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <h3>Get Reminders</h3>
                <p>
                  Enter your email address to get notified before our next
                  episode of the Nerdlog and information about our previous
                  ones.
                </p>
                <MarketoForm
                  id={2058}
                  title="Nerdlog Weekly Email"
                  munchkinId="341-XKP-310"
                  publishableKey="pk_4d10daa544de6f993a9a9ce002ccd1c6"
                  redirectLink="/nerdlog-thank-you"
                />
              </div>
            </div>
          </Section>
          <Section>
            <SectionHeading>
              Brought to you by the New Relic DevRel team
            </SectionHeading>
            <section className={cx(styles.meetTheTeam)}>
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

const SectionDescription = styled.p`
  margin-bottom: 2rem;
  text-align: center;
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
