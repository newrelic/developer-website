import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import PageLayout from '../components/PageLayout';
import { Button, Icon } from '@newrelic/gatsby-theme-newrelic';
import DevSiteSeo from '../components/DevSiteSeo';
import { graphql, useStaticQuery, Link } from 'gatsby';
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
              css={css`
                display: block;
                width: 100%;
              `}
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
            <div
              css={css`
                display: grid;
                grid-template-columns: 45% 45%;
                grid-gap: 2rem;
                @media screen and (max-width: 1200px) {
                  display: grid;
                  grid-template-columns: 1fr;
                  grid-gap: 2rem;
                }
              `}
            >
              <div
                css={css`
                  padding: 2rem;
                  box-sizing: border-box;
                `}
              >
                <h3
                  css={css`
                    font-size: 1.5rem;
                    font-weight: 400;
                  `}
                >
                  Low Code, No Code
                </h3>
                <p
                  css={css`
                    font-size: 1rem;
                  `}
                >
                  The low code, no code track is perfect for business analysts,
                  techops, and spreadsheet wizards who want to see how you can
                  use New Relic to understand business metrics better.
                </p>
                <p
                  css={css`
                    font-weight: 600;
                  `}
                >
                  The challenge:
                </p>
                <p
                  css={css`
                    font-size: 1rem;
                  `}
                >
                  <strong>
                    Build your most impactful New Relic Dashboard.
                  </strong>{' '}
                  Share a walkthrough with the details and impact of your
                  dashboard. Explain the NRQL queries you used to create it and
                  how it helps you better understand your system or service and
                  any APIs or instrumentation needed.
                </p>
              </div>
              <div
                css={css`
                  padding: 2rem;
                  box-sizing: border-box;
                `}
              >
                <h3
                  css={css`
                    font-size: 1.5rem;
                    font-weight: 400;
                  `}
                >
                  Build on New Relic
                </h3>
                <p
                  css={css`
                    font-size: 1rem;
                  `}
                >
                  The build on New Relic track is perfect for skilled Data Nerds
                  and New Relic practitioners ready to push their organization’s
                  dashboards beyond all limits.
                </p>
                <p
                  css={css`
                    font-weight: 600;
                  `}
                >
                  The challenge:
                </p>
                <p
                  css={css`
                    font-size: 1rem;
                  `}
                >
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
            <div
              css={css`
                display: grid;
                grid-template-columns: 45% 45%;
                grid-gap: 2rem;
                @media screen and (max-width: 1200px) {
                  display: grid;
                  grid-template-columns: 1fr;
                  grid-gap: 2rem;
                }
              `}
            >
              <div
                css={css`
                  padding: 2rem;
                  box-sizing: border-box;
                `}
              >
                <h3
                  css={css`
                    font-size: 1.5rem;
                    font-weight: 400;
                  `}
                >
                  Hack for Good
                </h3>
                <p
                  css={css`
                    font-size: 1rem;
                  `}
                >
                  The Hack for Good track is perfect for every coder, developer,
                  or engineer that wants to hack with minor restrictions.
                </p>
                <p
                  css={css`
                    font-weight: 600;
                  `}
                >
                  The challenge:
                </p>
                <p
                  css={css`
                    font-size: 1rem;
                  `}
                >
                  <strong>
                    Develop your most kick-ass project for the good of the
                    developer community,
                  </strong>{' '}
                  your community, or the world. Choose your cause, choose your
                  technology stack, and deliver your most innovative project -
                  points given for New Relic instrumentation and dashboards.
                </p>
              </div>
              <div
                css={css`
                  padding: 2rem;
                  box-sizing: border-box;
                `}
              >
                <h3
                  css={css`
                    font-size: 1.5rem;
                    font-weight: 400;
                  `}
                >
                  Student Challenge
                </h3>
                <p
                  css={css`
                    font-size: 1rem;
                  `}
                >
                  The Student Challenge track is for students to learn about New
                  Relic One in a real-world production environment and take
                  their first peek into the world of DevOps.
                </p>
                <p
                  css={css`
                    font-weight: 600;
                  `}
                >
                  The workshop:
                </p>
                <p
                  css={css`
                    font-size: 1rem;
                  `}
                >
                  Attend the <strong>Error in Prod workshop</strong>, where you
                  will become the lead SRE for the hottest techy store Urban
                  Nerdfitters. In the workshop, you will get a guided
                  walkthrough of New Relic One and get hands-on help us better
                  understand our system.
                </p>
                <p
                  css={css`
                    font-weight: 600;
                  `}
                >
                  The challenge:
                </p>
                <ul
                  css={css`
                    font-size: 1rem;
                  `}
                >
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
            <h4
              css={css`
                text-align: center;
                font-size: 1.2rem;
                margin: 2.5rem 0 1rem;
              `}
            >
              Tuesday, May 25, 2021
            </h4>

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

            <h4
              css={css`
                text-align: center;
                font-size: 1.2rem;
                margin: 2.5rem 0 1rem;
              `}
            >
              Wednesday, May 26, 2021
            </h4>

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

            <h4
              css={css`
                text-align: center;
                font-size: 1.2rem;
                margin: 2.5rem 0 1rem;
              `}
            >
              Thursday, May 27, 2021
            </h4>

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

            <ul
              css={css`
                display: inline-flex;
                list-style-type: none;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                margin-top: 20px;
                margin-bottom: 50px;
                padding: 0;
              `}
            >
              <li
                css={css`
                  margin: 10px 12px;
                  border: 3px solid #006c75;
                  border-radius: 4px;
                  box-shadow: 0 15px 20px rgba(4, 89, 97, 0.1),
                    0px 6.26664px 8.35552px rgba(4, 89, 97, 0.0718854),
                    0px 3.35045px 4.46726px rgba(4, 89, 97, 0.0596107),
                    0px 1.87823px 2.50431px rgba(4, 89, 97, 0.05),
                    0px 0.997515px 1.33002px rgba(4, 89, 97, 0.0403893),
                    0px 0.415088px 0.553451px rgba(4, 89, 97, 0.0281146);
                  transition: transform 0.095s ease-out;

                  &:hover {
                    transform: translateY(-1px);
                  }

                  &:active {
                    transform: translateY(2px);
                  }
                `}
              >
                <a
                  href="https://twitter.com/newrelic"
                  css={css`
                    display: inline-flex;
                    align-items: stretch;
                    height: 40px;
                    font-weight: 600;
                  `}
                >
                  <span
                    css={css`
                      font-size: 20px;
                      display: inline-flex;
                      padding: 6px 14px;
                      align-items: center;
                    `}
                  >
                    @newrelic
                  </span>
                  <span
                    css={css`
                      display: inline-flex;
                      align-items: center;
                      justify-content: center;
                      height: 100%;
                      padding: 0 11px 0 24px;
                      background-color: #006c75;
                      border-right: 1px solid #006c75;
                      clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0% 100%);
                    `}
                  >
                    <EngagementIcon
                      name="fe-twitter"
                      css={css`
                        fill: white;
                      `}
                    />
                  </span>
                </a>
              </li>
              <li
                css={css`
                  margin: 10px 12px;
                  border: 3px solid #006c75;
                  border-radius: 4px;
                  box-shadow: 0 15px 20px rgba(4, 89, 97, 0.1),
                    0px 6.26664px 8.35552px rgba(4, 89, 97, 0.0718854),
                    0px 3.35045px 4.46726px rgba(4, 89, 97, 0.0596107),
                    0px 1.87823px 2.50431px rgba(4, 89, 97, 0.05),
                    0px 0.997515px 1.33002px rgba(4, 89, 97, 0.0403893),
                    0px 0.415088px 0.553451px rgba(4, 89, 97, 0.0281146);
                  transition: transform 0.095s ease-out;

                  &:hover {
                    transform: translateY(-1px);
                  }

                  &:active {
                    transform: translateY(2px);
                  }
                `}
              >
                <a
                  href="https://discuss.newrelic.com/"
                  css={css`
                    display: inline-flex;
                    align-items: stretch;
                    height: 40px;
                    font-weight: 600;
                  `}
                >
                  <span
                    css={css`
                      font-size: 20px;
                      display: inline-flex;
                      padding: 6px 14px;
                      align-items: center;
                    `}
                  >
                    New Relic Forum
                  </span>
                  <span
                    css={css`
                      display: inline-flex;
                      align-items: center;
                      justify-content: center;
                      height: 100%;
                      padding: 0 11px 0 24px;
                      background-color: #006c75;
                      border-right: 1px solid #006c75;
                      clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0% 100%);
                    `}
                  >
                    <EngagementIcon
                      name="fe-message-square"
                      css={css`
                        fill: white;
                      `}
                    />
                  </span>
                </a>
              </li>
              <li
                css={css`
                  margin: 10px 12px;
                  border: 3px solid #006c75;
                  border-radius: 4px;
                  box-shadow: 0 15px 20px rgba(4, 89, 97, 0.1),
                    0px 6.26664px 8.35552px rgba(4, 89, 97, 0.0718854),
                    0px 3.35045px 4.46726px rgba(4, 89, 97, 0.0596107),
                    0px 1.87823px 2.50431px rgba(4, 89, 97, 0.05),
                    0px 0.997515px 1.33002px rgba(4, 89, 97, 0.0403893),
                    0px 0.415088px 0.553451px rgba(4, 89, 97, 0.0281146);
                  transition: transform 0.095s ease-out;

                  &:hover {
                    transform: translateY(-1px);
                  }

                  &:active {
                    transform: translateY(2px);
                  }
                `}
              >
                <a
                  href="https://developer.newrelic.com/"
                  css={css`
                    display: inline-flex;
                    align-items: stretch;
                    height: 40px;
                    font-weight: 600;
                  `}
                >
                  <span
                    css={css`
                      font-size: 20px;
                      display: inline-flex;
                      padding: 6px 14px;
                      align-items: center;
                    `}
                  >
                    Developers
                  </span>
                  <span
                    css={css`
                      display: inline-flex;
                      align-items: center;
                      justify-content: center;
                      height: 100%;
                      padding: 0 11px 0 24px;
                      background-color: #006c75;
                      border-right: 1px solid #006c75;
                      clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0% 100%);
                    `}
                  >
                    <EngagementIcon name="fe-code" size="1.5rem" />
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
