import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import cx from 'classnames';
import PageLayout from '../components/PageLayout';
import { Button, Icon } from '@newrelic/gatsby-theme-newrelic';
import DevSiteSeo from '../components/DevSiteSeo';
import { graphql, useStaticQuery, Link } from 'gatsby';
import * as styles from './futurehack.module.scss';
import nerdlogBanner from '../images/futurehack/futurehack-banner.png';
import styled from '@emotion/styled';
import Agenda from '../components/Agenda';

const FutureHackPage = ({ location }) => {
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

  const alternateSection = css`
    background-color: var(--tertiary-background-color);
    margin-left: -${layout.contentPadding};
    margin-right: -${layout.contentPadding};
  `;

  return (
    <>
      <DevSiteSeo location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Content>
          <section>
            <img
              src={nerdlogBanner}
              className={cx(styles.futurehackBanner)}
              alt="changelog banner"
            />
          </section>

          <Section>
            <SectionHeading>Register for FutureStack: Level Up</SectionHeading>
            <SectionDescription>
              Jump into our 24-hour virtual FutureHack to compete with fellow
              developers, engineers, practitioners, and students to create
              <br /> your most kick-ass project. It's your opportunity to shine,
              with Relics and sponsor engineers
              <br /> there to help you through Slack and Zoom rooms.
            </SectionDescription>
            <SectionDescription>
              <strong>
                To participate in FutureHack,{' '}
                <a href="https://web.cvent.com/event/ac440313-3922-45f5-b5b9-0812f29f4a51/summary?RefId=WEBL31&rt=DKI6UYQP806AeXIj4Q4uxw">
                  you must register for FutureStack: Level Up.
                </a>
              </strong>
              <br /> After you've registered for FutureStack, make sure to add
              FutureHack to your
              <br /> conference schedule and{' '}
              <a href="/">fill out the team submission form.</a>
            </SectionDescription>
            <CtaItem to="https://web.cvent.com/event/ac440313-3922-45f5-b5b9-0812f29f4a51/summary?RefId=WEBL31&rt=DKI6UYQP806AeXIj4Q4uxw">
              Register for FutureHack
            </CtaItem>
          </Section>

          <Section
            css={css`
              ${alternateSection}
              margin-top: 2rem;
            `}
          >
            <SectionHeading>FutureHack 2021 Tracks</SectionHeading>
            <SectionDescription>
              FutureHack welcomes all competitors across varying techincal
              skillsets to participate in varying tracks.
              <br /> Wheather you're a student, new hacker, seasoned vet, or
              builder of dashboards, we hope you join us at FutureHack.
            </SectionDescription>
            <div className={styles.twoColumnAlt}>
              <div className={styles.hackTrack}>
                <h3 className={styles.hackTitle}>Low Code, No Code</h3>
                <p className={styles.hackPersona}>
                  The low code, no code track is perfect for business analysts,
                  techops, and spreadsheet wizards who want to see how you can
                  use New Relic to understand business metrics better.
                </p>
                <p className={styles.hackChallengeHead}>The challenge:</p>
                <p className={styles.hackChallengeBody}>
                  <strong>
                    Build your most impactful New Relic Dashboard.
                  </strong>{' '}
                  Share a walkthrough with the details and impact of your
                  dashboard. Explain the NRQL queries you used to create it and
                  how it helps you better understand your system or service and
                  any APIs or instrumentation needed.
                </p>
              </div>
              <div className={styles.hackTrack}>
                <h3 className={styles.hackTitle}>Build on New Relic</h3>
                <p className={styles.hackPersona}>
                  The build on New Relic track is perfect for skilled Data Nerds
                  and New Relic practitioners ready to push their organization’s
                  dashboards beyond all limits.
                </p>
                <p className={styles.hackChallengeHead}>The challenge:</p>
                <p className={styles.hackChallengeBody}>
                  <strong>
                    Use the New Relic SDK to build a custom visualization
                  </strong>{' '}
                  and deploy it to an existing dashboard or a new one if needed.
                  Share your selected components and data, the impact your
                  custom visualization creates, and how you'd plan to use it
                  combined with the data displayed in your dashboard.
                </p>
              </div>
            </div>
            <div className={styles.twoColumnAlt}>
              <div className={styles.hackTrack}>
                <h3 className={styles.hackTitle}>Hack for Good</h3>
                <p className={styles.hackPersona}>
                  The Hack for Good track is perfect for every coder, developer,
                  or engineer that wants to hack with minor restrictions.
                </p>
                <p className={styles.hackChallengeHead}>The challenge:</p>
                <p className={styles.hackChallengeBody}>
                  <strong>
                    Develop your most kick-ass project for the good of the
                    developer community,
                  </strong>{' '}
                  your community, or the world. Choose your cause, choose your
                  technology stack, and deliver your most innovative project -
                  points given for New Relic instrumentation and dashboards.
                </p>
              </div>
              <div className={styles.hackTrack}>
                <h3 className={styles.hackTitle}>Student Challenge</h3>
                <p className={styles.hackPersona}>
                  The Student Challenge track is for students to learn about New
                  Relic One in a real-world production environment and take
                  their first peek into the world of DevOps.
                </p>
                <p className={styles.hackChallengeHead}>The workshop:</p>
                <p className={styles.hackChallengeBody}>
                  Attend the <strong>Error in Prod workshop</strong>, where you
                  will become the lead SRE for the hottest techy store Urban
                  Nerdfitters. In the workshop, you will get a guided
                  walkthrough of New Relic One and get hands-on help us better
                  understand our system.
                </p>
                <p className={styles.hackChallengeHead}>The challenge:</p>
                <ul className={styles.hackChallengeBody}>
                  <li>
                    Help us solve the issue with our Urban Nerdfitters
                    production environment.{' '}
                    <strong>
                      The first student to complete all the challenges
                    </strong>{' '}
                    wins this part of the challenge.
                  </li>
                  <li>
                    Based on what you’ve learned,{' '}
                    <strong>
                      develop your most impactful Urban Nerdfitters New Relic
                      Dashboard
                    </strong>
                    . Share a walkthrough with the details and impact of your
                    dashboard. Explain the NRQL queries you used to create it
                    and how it helps you better understand your system.
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          <Section>
            <SectionHeading>FutureHack Agenda</SectionHeading>
            <h4 className={styles.agendaDate}>Tuesday, May 25, 2021</h4>

            <Agenda
              css={css`
                max-width: 1000px;
                margin: 0 auto;
              `}
              mobileBreakpoint="1000px"
              tracks={[
                'Low Code, No Code',
                'Build New Relic',
                'Hack for Good',
                'Student Challenge',
              ]}
            >
              <Agenda.Session
                time="12:00PM PST"
                title="FutureHack kickoff"
                speaker="Judges"
                track={null}
                span={4}
              />
              <Agenda.Session
                time="12:05PM PST"
                title="Welcome message"
                speaker="Jemiah Sius"
                track={null}
                span={4}
              />
              <Agenda.Session
                time="12:15PM PST"
                title="FutureHack overview"
                speaker="Judges"
                track={null}
                span={4}
              />
              <Agenda.Session
                time="1:00PM PST"
                title="Hacking starts"
                track={null}
                span={4}
              />
            </Agenda>

            <h4 className={styles.agendaDate}>Wednesday, May 26, 2021</h4>

            <Agenda
              css={css`
                max-width: 1000px;
                margin: 0 auto;
              `}
              mobileBreakpoint="1000px"
              tracks={[
                'Low Code, No Code',
                'Build New Relic',
                'Hack for Good',
                'Student Challenge',
              ]}
            >
              <Agenda.Session
                time="9:00AM PST"
                title="Welcome Back Webinar"
                speaker="Jemiah Sius"
                track={null}
                span={4}
              />
              <Agenda.Session
                time="11:00AM PST"
                title="Final hour warning"
                track={null}
                span={4}
              />
              <Agenda.Session
                time="1:00PM PST"
                title="Hacking stops"
                track={null}
                span={4}
              />
            </Agenda>

            <h4 className={styles.agendaDate}>Thursday, May 27, 2021</h4>

            <Agenda
              css={css`
                max-width: 1000px;
                margin: 0 auto;
              `}
              mobileBreakpoint="1000px"
              tracks={[
                'Low Code, No Code',
                'Build New Relic',
                'Hack for Good',
                'Student Challenge',
              ]}
            >
              <Agenda.Session
                time="11:15AM PST"
                title="FutureHack Award Presentation"
                speaker="Judges"
                track={null}
                span={4}
              />
            </Agenda>
          </Section>

          <Section
            css={css`
              ${alternateSection}
              padding-bottom: 30px;
              text-align: center;
            `}
          >
            <SectionHeading>Engage with the developer community</SectionHeading>

            <ul className={cx(styles.engagementOptions)}>
              <li className={cx(styles.engagementOption)}>
                <a
                  href="https://twitter.com/newrelic"
                  className={cx(styles.engagementOptionLink)}
                >
                  <span className={cx(styles.engagementOptionLabel)}>
                    @newrelic
                  </span>
                  <span className={cx(styles.engagementOptionIconContainer)}>
                    <EngagementIcon
                      className={cx(styles.engagementOptionIcon)}
                      name="fe-twitter"
                      css={css`
                        fill: white;
                      `}
                    />
                  </span>
                </a>
              </li>
              <li
                className={cx(
                  styles.engagementOption,
                  styles.engagementOptionForum
                )}
              >
                <a
                  href="https://discuss.newrelic.com/"
                  className={cx(styles.engagementOptionLink)}
                >
                  <span className={cx(styles.engagementOptionLabel)}>
                    New Relic Forum
                  </span>
                  <span className={cx(styles.engagementOptionIconContainer)}>
                    <EngagementIcon
                      className={cx(styles.engagementOptionIcon)}
                      name="fe-message-square"
                      css={css`
                        fill: white;
                      `}
                    />
                  </span>
                </a>
              </li>
              <li className={cx(styles.engagementOption)}>
                <a
                  href="https://developer.newrelic.com/"
                  className={cx(styles.engagementOptionLink)}
                >
                  <span className={cx(styles.engagementOptionLabel)}>
                    Developers
                  </span>
                  <span className={cx(styles.engagementOptionIconContainer)}>
                    <EngagementIcon
                      className={cx(styles.engagementOptionIcon)}
                      name="fe-code"
                      size="1.5rem"
                    />
                  </span>
                </a>
              </li>
            </ul>
          </Section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

FutureHackPage.propTypes = {
  location: PropTypes.object.isRequired,
};

const breakpoints = {
  laptop: '@media screen and (max-width: 1100px)',
  mobile: '@media screen and (max-width: 480px)',
};

const EngagementIcon = (props) => (
  <Icon
    size="1.25rem"
    css={css`
      stroke: #fff;
    `}
    {...props}
  />
);

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

export default FutureHackPage;
