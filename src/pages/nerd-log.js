import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import cx from 'classnames';
import PageLayout from '../components/PageLayout';
import { Button, NewRelicLogo } from '@newrelic/gatsby-theme-newrelic';
import SEO from '../components/Seo';
import { graphql, useStaticQuery, Link } from 'gatsby';
import FeatherIcon from '../components/FeatherIcon';
import styles from './nerd-log.module.scss';
import { teamMembers } from '../data/nerdlogData';
import graphLines from '../images/nerd-days/hero-image-graph-lines.png';
import heroBackgroundPattern from '../images/nerd-days/nerd-days-hero-bg-pattern.png';
import styled from '@emotion/styled';

const NerdlogPage = () => {
  const {
    site: { layout },
  } = useStaticQuery(graphql`
    query {
      site {
        layout {
          contentPadding
        }
      }
    }
  `);

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
          <section
            css={css`
              margin-top: -2rem;
              padding-bottom: 2rem;
              text-align: center;
              background-image: url(${graphLines}),
                url(${heroBackgroundPattern}),
                linear-gradient(165deg, #06b4c7 10%, #0269ce 60%);
              background-size: 104%, 13%, 100%;
              background-position: -24px -10px, 0, 0;
              background-blend-mode: normal, soft-light, normal;
              border-radius: 20px;
              background-repeat: no-repeat, repeat, no-repeat;

              .dark-mode & {
                position: relative;
                background-image: url(${graphLines}),
                  url(${heroBackgroundPattern}),
                  linear-gradient(145deg, #01273d 20%, #2dcde3 250%);
                background-blend-mode: soft-light, soft-light, normal;
              }

              ${breakpoints.laptop} {
                background-position: -14px -10px, 0, 0;
              }

              ${breakpoints.mobile} {
                border-radius: 0;
                margin: -48px -32px 0 -32px;
              }
            `}
          >
            <div
              css={css`
                display: inline-block;
                max-width: 364px;
                padding: 0.5rem 1.25rem;
                margin: 0 48px;
                text-align: center;
                background-color: #fff;
                box-shadow: 0px 18px 9px rgba(13, 80, 138, 0.12),
                  0px 7.51997px 3.75998px rgba(13, 80, 138, 0.0862625),
                  0px 4.02054px 2.01027px rgba(13, 80, 138, 0.0715329),
                  0px 2.25388px 1.12694px rgba(13, 80, 138, 0.06),
                  0px 1.19702px 0.598509px rgba(13, 80, 138, 0.0484671),
                  0px 0.498106px 0.249053px rgba(13, 80, 138, 0.0337375);
                border-radius: 0px 0px 20px 20px;

                .dark-mode & {
                  background-color: rgba(0, 0, 0, 0.5);
                  backdrop-filter: blur(5px);
                }
              `}
            >
              <NewRelicLogo />
            </div>
            <h3
              css={css`
                max-width: 566px;
                margin: 2rem auto 0.5rem;
                color: #fff;
                font-style: normal;
                font-weight: 600;
                font-size: 30px;
                line-height: 2.5rem;
                text-align: center;

                ${breakpoints.laptop} {
                  padding: 0 3rem;
                  margin: 1.75rem auto 1.25rem;
                  font-size: 1.5rem;
                  line-height: 2.25rem;
                }

                ${breakpoints.mobile} {
                  padding: 0 ${layout.contentPadding};
                  font-size: 1.25rem;
                  line-height: 1.75rem;
                }
              `}
            >
              Nerdlog
            </h3>
            <h4
              css={css`
                max-width: 566px;
                margin: 1rem auto 1.5rem;
                color: #fff;
                font-style: normal;
                font-weight: 600;
                font-size: 25px;
                line-height: 2.5rem;
                text-align: center;

                ${breakpoints.laptop} {
                  padding: 0 3rem;
                  margin: 1.75rem auto 1.25rem;
                  font-size: 1.5rem;
                  line-height: 2.25rem;
                }

                ${breakpoints.mobile} {
                  padding: 0 ${layout.contentPadding};
                  font-size: 1.25rem;
                  line-height: 1.75rem;
                }
              `}
            >
              A changelog for the modern developer
            </h4>
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
                  The Nerdlog is your opportunity to learn from New Relic
                  experts live or on-demand. We want your teams to stay informed
                  and navigate New Relic One like a pro.
                </p>
                <p>
                  <strong>
                    Every Thursday, you can watch New Relic experts:
                  </strong>
                  <ul>
                    <li>
                      Showcase the latest features, capabilities, and
                      integrations
                    </li>
                    <li>
                      Explain the most recent changes and answer your most
                      burning questions
                    </li>
                    <li>
                      Share best practices, resources, and hands-on projects{' '}
                    </li>
                  </ul>
                </p>
                <p>
                  We want to connect with you, learn from you, and continue
                  building products with you in mind.
                </p>
                <h3>Save the date &amp; join us online</h3>
                <p>We are live every Thursday!</p>
                <p>
                  <strong>Where:</strong> Follow us on Twitch
                  <br />
                  <strong>Date:</strong> 12 p.m. PT
                </p>
                <p>
                  Recordings are available on{' '}
                  <a href="https://youtube.com">YouTube.</a>
                </p>
              </div>
              <div>
                <h3>Get Reminders</h3>
                <p>
                  Enter your email address to get notified before our next live
                  stream and information about our previous ones.
                </p>
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
