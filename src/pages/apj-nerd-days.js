import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import cx from 'classnames';
import PageLayout from '../components/PageLayout';
import { Button, Icon, NewRelicLogo } from '@newrelic/gatsby-theme-newrelic';
import DevSiteSeo from '../components/DevSiteSeo';
import { graphql, useStaticQuery, Link } from 'gatsby';
import FeatherIcon from '../components/FeatherIcon';
import * as styles from './nerd-days.module.scss';
import NerdDaysLogo from '../components/NerdDaysLogo';
import graphLines from '../images/nerd-days/hero-image-graph-lines.png';
import heroBackgroundPattern from '../images/nerd-days/nerd-days-hero-bg-pattern.png';
import shapesIcon from '../images/nerd-days/icon-shapes.svg';
import openSourceIcon from '../images/nerd-days/icon-open-source.svg';
import HopinLogo from '../components/HopinLogo';
import MarketoForm from '../components/MarketoForm';
import styled from '@emotion/styled';
import Agenda from '../components/Agenda';

const NerdDaysPage = ({ location }) => {
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
              <NerdDaysLogo
                css={css`
                  display: inline-block;
                  margin-top: 0.5rem;
                  width: 308px;
                  height: 53px;

                  ${breakpoints.laptop} {
                    width: 250px;
                  }

                  ${breakpoints.mobile} {
                    width: 175px;
                    height: 30px;
                    margin-top: 4px;
                    margin-bottom: 4px;
                  }
                `}
              />
            </div>
            <h3
              css={css`
                max-width: 566px;
                margin: 2rem auto 1.5rem;
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
              Nerd Days is a <em>free</em>
              {` `}
              1-day event focused on building more perfect software
            </h3>
          </section>
          <Section>
            <SectionHeading>Register for Nerd Days 1.0</SectionHeading>
            <SectionDescription>
              Nerd Days is a FREE engineering conference that kicks off October
              22 (Dates vary by region)
            </SectionDescription>
            <div
              className={cx(styles.twoColumnAlt, styles.registrationSection)}
            >
              <div>
                <h2>What is Nerd Days exactly…</h2>
                <p>
                  Nerd Days is a <b>FREE</b> engineering conference that kicks
                  off October 22 <em>(Dates vary by region)</em>. Focused on
                  building more perfect software, our goal is to spend less time
                  looking at slides that tell you what software can do and more
                  time on getting your hands on the software to solve problems
                  efficiently.
                </p>
                <p>
                  <strong>Including:</strong>
                  <ul>
                    <li>Live workshops</li>
                    <li>Live coding and demos</li>
                    <li>Customer examples</li>
                    <li>Panel / Q&A sessions</li>
                  </ul>
                </p>
                <p>
                  You’ll hear from fellow engineers who built New Relic
                  solutions and New Relic users from various industries. Whether
                  you’re new or a data nerd, there’s an interactive session for
                  you.
                </p>
                <h3>Save the date &amp; join us online</h3>
                <p>
                  <strong>Date:</strong> October 22, 2020
                  <br />
                  <strong>Nerd Days Starts:</strong> 12PM AEDT/ 9AM SGT/ 6:30AM
                  IST
                  <br />
                  <strong>Nerd Days Ends:</strong> 5PM AEDT/ 2PM SGT/ 11:30AM
                  IST
                </p>
                <p>
                  We look forward to building with you during Nerd Days! If you
                  have any questions about Nerd Days please emails{' '}
                  <a href="mailto:apac-events@newrelic.com">
                    APAC-events@newrelic.com
                  </a>
                </p>
                <h3
                  css={css`
                    margin: 25px 0 0 0;
                  `}
                >
                  Additional Nerd Days Events
                </h3>
                <ul
                  css={css`
                    padding: 0;
                    margin: 15px 0 30px;
                    display: inline-flex;
                    flex-wrap: wrap;
                    list-style-type: none;
                    justify-content: center;

                    ${breakpoints.mobile} {
                      flex-direction: column;
                    }
                  `}
                >
                  <CtaItem date="Oct 13, 2020" to="/nerd-days">
                    AMER Registration
                  </CtaItem>
                  <CtaItem date="Nov 11, 2020" to="/emea-nerd-days">
                    EMEA Registration
                  </CtaItem>
                </ul>
              </div>
              <MarketoForm
                id={1420}
                title="REGISTER FOR NERD DAYS | APAC"
                munchkinId="341-XKP-310"
                publishableKey="pk_4d10daa544de6f993a9a9ce002ccd1c6"
                redirectLink="/nerd-days-thank-you"
              />
            </div>
          </Section>

          <Section
            css={css`
              ${alternateSection}
              margin-top: 2rem;
            `}
          >
            <SectionHeading>Tracks</SectionHeading>
            <SectionDescription>
              Tracks will vary by region. All sessions will be recorded and
              distributed after the event.
            </SectionDescription>

            <ul
              css={css`
                max-width: 980px;
                margin: 0 auto;
                list-style-type: none;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                padding: 0;
              `}
            >
              <TrackItem
                name="Observability & Beyond"
                icon={<TrackFeatherIcon name="eye" size="87px" />}
              />
              <TrackItem
                name="Cloud & DevOps"
                icon={<img src={openSourceIcon} alt="open source" />}
              />
              <TrackItem
                name="Fundamentals"
                icon={<img src={shapesIcon} alt="Fundamentals" />}
              />
            </ul>
          </Section>

          <Section>
            <SectionHeading>Nerd Days APAC Agenda</SectionHeading>
            <SectionDescription>
              We’ve got a packed schedule with thought-leaders of their
              respective industries
            </SectionDescription>
            <Agenda
              css={css`
                max-width: 1000px;
                margin: 0 auto;
              `}
              mobileBreakpoint="1000px"
              tracks={[
                'Fundamentals',
                'Observability & Open source',
                'Cloud & DevOps',
              ]}
            >
              <Agenda.Session
                time="12:00 PM"
                title="Keynote: Observability For Good"
                speaker="Lew Cirne with Jill Macmurchy opening"
                track={null}
                span={3}
              />
              <Agenda.Session
                time="12:30 PM"
                title="Instrumenting your service using agents"
                speaker="Hazelle Sevilla"
              />
              <Agenda.Session
                time="12:30 PM"
                title="New Relic AI: Proactive Detection"
                speaker="Ned Lidbury"
              />
              <Agenda.Session
                time="12:30 PM"
                title="Logging for Modern Organizations"
                speaker="Ganesh Rajendran"
              />
              <Agenda.Session
                time="1:30 PM"
                title="Tell a Data Story with Dashboards"
                speaker="Chris Frost"
              />
              <Agenda.Session
                time="1:30 PM"
                title="Exploring Data with NerdGraph"
                speaker="Abhishek Lad"
              />
              <Agenda.Session
                time="1:30 PM"
                title="Deploying an app on Kubernetes"
                speaker="Carl Luo and Jason Esli"
              />
              <Agenda.Session
                time="2:30 PM"
                title="True availability using Synthetics "
                speaker="Toby Knight"
              />
              <Agenda.Session
                time="2:30 PM"
                title="Grafana and Prometheus with New Relic"
                speaker="Dan Johnson"
              />
              <Agenda.Session
                time="2:30 PM"
                title="Going Serverless: Chipping at the monolith (modernisation)"
                speaker="Nick Kim and Max Bausher"
              />
              <Agenda.Session
                time="3:30 PM"
                title="Full Stack Instrumentation"
                speaker="Dan Johnson"
              />
              <Agenda.Session
                time="3:30 PM"
                title="Removing toil via Terraform in New Relic"
                speaker="Steve Ng"
              />
              <Agenda.Session
                time="3:30 PM"
                title="Microservices Observability with Service Mesh and New Relic One"
                speaker="Nik Jain"
              />
              <Agenda.Session
                time="4:30 PM"
                title="Alerts Best Practices"
                speaker="Kajan Moorthy"
              />
              <Agenda.Session
                time="4:30 PM"
                title="Building applications on New Relic One"
                speaker="Kav Pather"
              />
              <Agenda.Session
                time="4:30 PM"
                title="Establish cloud KPIs and performance baselines"
                speaker="Max Bausher and Aron Marden"
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

            <a
              href="https://hopin.to/?ref=developer.newrelic.com"
              className={cx(styles.sponsorLogoContainer)}
            >
              <HopinLogo />
              <p
                css={css`
                  color: var(--secondary-text-color);
                `}
              >
                Event powered by Hopin
              </p>
            </a>
          </Section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

NerdDaysPage.propTypes = {
  location: PropTypes.object.isRequired,
};

const breakpoints = {
  laptop: '@media screen and (max-width: 1100px)',
  mobile: '@media screen and (max-width: 480px)',
};

const TrackItem = ({ icon, name }) => (
  <li
    css={css`
      display: flex;
      max-width: 175px;
      margin: 1.5rem 2rem;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
    `}
  >
    {cloneElement(icon, {
      css: css`
        margin-bottom: 0.75rem;
      `,
    })}
    <h5
      css={css`
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.75px;
        font-weight: bold;
      `}
    >
      {name}
    </h5>
  </li>
);

TrackItem.propTypes = {
  icon: PropTypes.node,
  name: PropTypes.string,
};

const TrackFeatherIcon = styled(FeatherIcon)`
  stroke: url(#nerdDaysGradient);
  stroke-width: 1.12px;
`;

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
      margin-right: 1.25rem;
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
        font-size: 0.625rem;
        opacity: 0.75;
        color: #464e4e;
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

export default NerdDaysPage;
