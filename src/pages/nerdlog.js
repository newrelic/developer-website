import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import cx from 'classnames';
import PageLayout from '../components/PageLayout';
import MarketoForm from '../components/MarketoForm';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import SEO from '../components/Seo';
import { Link } from 'gatsby';
import FeatherIcon from '../components/FeatherIcon';
import styles from './nerdlog.module.scss';
import { teamMembers } from '../data/nerdlogData';
import nerdlogBanner from '../images/nerdlog/nerdlog-banner.png';
import styled from '@emotion/styled';

const NerdlogPage = () => {
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
      <SEO />
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
              Watch and engage with New relic product managers and engineers
              (who are building the future of New Relic)
            </SectionDescription>
            <div
              className={cx(
                styles.section,
                styles.twoColumnAlt,
                styles.registrationSection
              )}
            >
              <div>
                <h2>What is the Nerdlog?</h2>
                <p>
                  The Nerdlog is our brand new live-stream changelog on Twitch.
                  Every Thursday, you can:
                </p>
                <div>
                  <strong>
                    Every Thursday, you can watch New Relic experts:
                  </strong>
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
                      experiences with other New Relic users and have fun as you
                      learn about observability.{' '}
                    </li>
                  </ul>
                </div>
                <h3>Save the date &amp; join us online</h3>
                <p>
                  <strong>We are live every Thursday!</strong>
                </p>
                <p>
                  <strong>Where:</strong> Follow us on{' '}
                  <a href="https://www.twitch.tv/new_relic">Twitch</a>
                  <br />
                  <strong>Date:</strong> 12 p.m. PT
                </p>
                <p>
                  Can’t make it? We’ll miss you, but recordings are available on{' '}
                  <a href="https://www.twitch.tv/new_relic/videos">Twitch.</a>
                </p>
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
                  munchkinId="412-MZS-894"
                  publishableKey="pk_4d10daa544de6f993a9a9ce002ccd1c6"
                  redirectLink="/nerd-days-thank-you"
                />
              </div>
            </div>
          </Section>
          <Section className={cx(styles.speakersSection)}>
            <SectionHeading>Meet the Nerdlog Host</SectionHeading>
            <section className={cx(styles.section, styles.meetTheTeam)}>
              {teamMemberPanels}
            </section>
          </Section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
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
