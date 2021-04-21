import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import cx from 'classnames';
import PageLayout from '../components/PageLayout';
import {
  Button,
  Icon,
  NewRelicLogo,
  Surface,
} from '@newrelic/gatsby-theme-newrelic';
import DevSiteSeo from '../components/DevSiteSeo';
import { graphql, useStaticQuery, Link } from 'gatsby';
import FeatherIcon from '../components/FeatherIcon';
import * as styles from './nerd-days.module.scss';
import roadIcon from '../images/nerd-days/icon-road.svg';
import NerdDaysLogo from '../components/NerdDaysLogo';
import graphLines from '../images/nerd-days/hero-image-graph-lines.png';
import heroBackgroundPattern from '../images/nerd-days/nerd-days-hero-bg-pattern.png';
import shapesIcon from '../images/nerd-days/icon-shapes.svg';
import openSourceIcon from '../images/nerd-days/icon-open-source.svg';
import HopinLogo from '../components/HopinLogo';
import styled from '@emotion/styled';
import Agenda from '../components/Agenda';

import AaronSoto from '../images/nerd-days/speakers/AaronSoto.jpg';
import CaitlinHalla from '../images/nerd-days/speakers/CaitlinHalla.jpg';
import DavidShanker from '../images/nerd-days/speakers/DavidShanker.jpg';
import JeremyCooper from '../images/nerd-days/speakers/JeremyCooper.jpg';
import JoelWorrall from '../images/nerd-days/speakers/JoelWorrall.jpg';
import JohnVajda from '../images/nerd-days/speakers/JohnVajda.jpg';
import JonThurman from '../images/nerd-days/speakers/JonThurman.jpg';
import JustinEveland from '../images/nerd-days/speakers/JustinEveland.jpg';
import LeonChapman from '../images/nerd-days/speakers/LeonChapman.jpg';
import LindsyFarina from '../images/nerd-days/speakers/LindsyFarina.jpg';
import TaliaNassi from '../images/nerd-days/speakers/TaliaNassi.jpg';
import ThomasMartin from '../images/nerd-days/speakers/ThomasMartin.jpg';
import AlecSwanson from '../images/nerd-days/speakers/AlecSwanson.jpg';
import BrianThomason from '../images/nerd-days/speakers/BrianThomason.jpg';
import ChrisTrombley from '../images/nerd-days/speakers/ChrisTrombley.jpg';
import GabeObrien from '../images/nerd-days/speakers/GabeObrien.jpg';
import LiamHurrell from '../images/nerd-days/speakers/LiamHurrell.jpg';
import MichaelCaron from '../images/nerd-days/speakers/MichaelCaron.jpg';
import PhilWeber from '../images/nerd-days/speakers/PhilWeber.jpg';
import SebastianRamirez from '../images/nerd-days/speakers/SebastianRamirez.jpg';
import SanderBlue from '../images/nerd-days/speakers/SanderBlue.jpg';
import JewelsNocera from '../images/nerd-days/speakers/JewelsNocera.jpg';
import NicaFee from '../images/nerd-days/speakers/NicaFee.jpg';
import StijnPolfliet from '../images/nerd-days/speakers/StijnPolfliet.jpg';
import BradSchmitt from '../images/nerd-days/speakers/BradSchmitt.jpg';
import EricMittelhammer from '../images/nerd-days/speakers/EricMittelhammer.jpg';
import ColinMacNaughton from '../images/nerd-days/speakers/ColinMacNaughton.jpg';

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
              13 (Dates vary by region)
            </SectionDescription>
            <div
              className={cx(styles.twoColumnAlt, styles.registrationSection)}
            >
              <div>
                <h2>What’s is Nerd Days exactly…</h2>
                <p>
                  A{' '}
                  <strong>
                    <em>FREE</em>
                  </strong>{' '}
                  developer focused live digital conference covering a broad
                  range of topics at varying levels for all skill sets.
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
                  Presented by Relics, partners, Developer Champions, and
                  customers
                </p>
                <h3>Save the date &amp; join us online</h3>
                <p>
                  Whether you’re new or a data nerd, there’s an interactive
                  session for you. Choose the sessions you're interested in and
                  add Nerd Days to your calendar.
                </p>
                <p>
                  <strong>Date:</strong> October 13, 2020
                  <br />
                  <strong>Time:</strong> 9AM PST - 3PM PST
                </p>
                <p>
                  We look forward to building with you during Nerd Days! If you
                  have any questions about Nerd Days please emails{' '}
                  <a href="mailto:deco@newrelic.com">deco@newrelic.com</a>.
                </p>
              </div>
              <div>
                <h3>Upcoming Nerd Days</h3>
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
                  <CtaItem date="Nov 10, 2020" to="/emea-nerd-days">
                    EMEA Registration
                  </CtaItem>
                </ul>
              </div>
            </div>
          </Section>
          <Section>
            <SectionHeading>Speaker line up</SectionHeading>
            <SectionDescription>
              Get hands on with sessions presented by the following Relics,
              partners, Developer Champions, and customers.
            </SectionDescription>

            <ul
              css={css`
                max-width: 1200px;
                padding: 0;
                margin: 0 auto;
                list-style-type: none;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
              `}
            >
              {speakers.map(({ name, title, image, company }, idx) => (
                <Surface
                  key={idx}
                  as="li"
                  base={Surface.BASE.SECONDARY}
                  css={css`
                    margin: 1rem;
                    max-width: 256px;
                    overflow: hidden;
                    box-shadow: 0px 103.32px 133.205px rgba(3, 62, 70, 0.09),
                      0px 43.1645px 55.6501px rgba(3, 62, 70, 0.0646969),
                      0px 23.0778px 29.7532px rgba(3, 62, 70, 0.0536497),
                      0px 12.9372px 16.6794px rgba(3, 62, 70, 0.045),
                      0px 6.87086px 8.8583px rgba(3, 62, 70, 0.0363503),
                      0px 2.85912px 3.68614px rgba(3, 62, 70, 0.0253031);
                  `}
                >
                  <div
                    css={css`
                      position: relative;
                      margin-bottom: -0.5rem;
                      &:before {
                        content: '';
                        width: 100%;
                        height: 10px;
                        position: absolute;
                        bottom: 10px;
                        background-image: linear-gradient(
                          294.8deg,
                          #0069ce -16.42%,
                          #0fb7c9 115.59%
                        );
                        clip-path: polygon(0 0, 100% 0%, 100% 0%, 0% 100%);
                      }
                    `}
                  >
                    <img
                      src={image}
                      alt={name}
                      css={css`
                        clip-path: polygon(0 0, 100% 0%, 100% 97%, 0% 93%);
                      `}
                    />
                  </div>
                  <div
                    css={css`
                      padding: 0.75rem 1rem 1rem;
                    `}
                  >
                    <h4
                      css={css`
                        font-size: 1.25rem;
                        font-weight: 800;
                        margin-bottom: 0.25rem;
                      `}
                    >
                      {name}
                    </h4>
                    <p
                      css={css`
                        font-size: 0.875rem;
                        line-height: 1.25rem;
                        margin-bottom: 0;
                      `}
                    >
                      {title}
                    </p>
                    <p
                      css={css`
                        font-size: 0.875rem;
                        font-weight: 600;
                        line-height: 1.25rem;
                        margin-bottom: 0;
                      `}
                    >
                      {company}
                    </p>
                  </div>
                </Surface>
              ))}
            </ul>
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
                name="Observability"
                icon={<TrackFeatherIcon name="eye" size="87px" />}
              />
              <TrackItem
                name="Cloud migration"
                icon={<TrackFeatherIcon name="upload-cloud" size="87px" />}
              />
              <TrackItem
                name="Open source"
                icon={<img src={openSourceIcon} alt="open source" />}
              />
              <TrackItem
                name="Devops journey"
                icon={<img src={roadIcon} alt="devops journey" />}
              />
              <TrackItem
                name="Fundamentals"
                icon={<img src={shapesIcon} alt="Fundamentals" />}
              />
            </ul>
          </Section>

          <Section>
            <SectionHeading>Nerd Days AMER Agenda</SectionHeading>
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
                'Observability',
                'Cloud migration',
                'DevOps journey',
                'Open source',
              ]}
            >
              <Agenda.Session
                time="9:00AM PST"
                title="Keynote: Jemiah Sius, Lew Cirne, and Special Guest Announcements"
                speaker="Lew Cirne"
                track={null}
                span={5}
              />
              <Agenda.Session
                time="10:00AM PST"
                title="Instrumenting your service using agents"
                speaker="Michael Caron"
              />
              <Agenda.Session
                time="10:00AM PST"
                title="New Relic CLI Wizardry"
                speaker="Jon Thurman"
              />
              <Agenda.Session
                time="10:00AM PST"
                title="5 Steps to Kubernetes Observability"
                speaker="Stijn Polfliet & Brad Schmitt"
              />
              <Agenda.Session
                time="10:00AM PST"
                title="Delivering SRE as a Service"
                speaker="Thomas Martin"
              />
              <Agenda.Session
                time="10:00AM PST"
                title="Building applications on New Relic One"
                speaker="Joel Worrall"
              />
              <Agenda.Session
                time="11:00AM PST"
                title="Exploring your data using NRQL"
                speaker="Phil Weber"
              />
              <Agenda.Session
                time="11:00AM PST"
                title="New Relic AI"
                speaker="Sebastian Ramirez"
              />
              <Agenda.Session
                time="11:00AM PST"
                title="Going Serverless: Chipping at the monolith"
                speaker="Nica Fee"
              />
              <Agenda.Session
                time="11:00AM PST"
                title="Logging for Modern Organizations"
                speaker="Jeremy Cooper & Leon Chapman"
              />
              <Agenda.Session
                time="11:00AM PST"
                title="Power up your Prometheus metrics with the Telemetry Data Platform"
                speaker="Liam Hurrell &	Colin MacNaughton"
              />
              <Agenda.Session
                inactive
                time="12:00PM PST"
                title="Lunch with Lew"
                speaker="Lew Cirne & Jemiah Sius"
                track={null}
                span={5}
              />
              <Agenda.Session
                time="1:00PM PST"
                title="Custom Instrumentation"
                speaker="Michael Caron"
              />
              <Agenda.Session
                time="1:00PM PST"
                title="Exploring Data with NerdGraph"
                speaker="Caitlin Halla"
              />
              <Agenda.Session
                time="1:00PM PST"
                title="Consolidating Your Data with New Relic’s Telemetry Data Platform"
                speaker="Eric Mittelhammer"
              />
              <Agenda.Session
                time="1:00PM PST"
                title="Testing in Production"
                speaker="Talia Nassi"
              />
              <Agenda.Session
                time="1:00PM PST"
                title="How Open Source powers the New Relic One Catalog"
                speaker="Justin Eveland"
              />
              <Agenda.Session
                time="2:00PM PST"
                title="Alerts Best Practices"
                speaker="Phil Weber"
              />
              <Agenda.Session
                time="2:00PM PST"
                title="The Art & Science of Deciphering Perceived Performance: A look at how user behavior affects your data"
                speaker="Lindsy Farina"
              />
              <Agenda.Session
                time="2:00PM PST"
                title="Monitoring your Cloud Usage and Spend"
                speaker="Jewels Nocera"
              />
              <Agenda.Session
                time="2:00PM PST"
                title="Scaling the Developer Toolkit Team: Writing Code that Writes Code"
                speaker="Sander Blue"
              />
              <Agenda.Session
                time="2:00PM PST"
                title="Reducing toil with Terraform"
                speaker="Jon Thurman"
              />
              <Agenda.Session
                time="3:00PM PST"
                title="True availability using Synthetics"
                speaker="Michael Caron"
              />
              <Agenda.Session
                time="3:00PM PST"
                title="How Observability-Driven Development accelerates DevOps transformations"
                speaker="Dave Shanker"
              />
              <Agenda.Session
                time="3:00PM PST"
                title="AWS Modernization"
                speaker="Aaron Soto & Brian Thomason"
              />
              <Agenda.Session
                time="3:00PM PST"
                title="Writing Reliably Bad Software, AKA 'How to get paid to write memory leaks'"
                speaker="Gabe O’Brien & Alec Swanson"
              />
              <Agenda.Session
                time="3:00PM PST"
                title="NerdStorageVault: ThirdParty Secrets"
                speaker="John Vajda"
              />
              <Agenda.Session
                time="4:00PM PST"
                title="Closing + Swag"
                speaker="Jemiah Sius"
                track={null}
                span={5}
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

const speakers = [
  {
    name: 'Aaron Soto',
    image: AaronSoto,
    title: 'Sr. Partner Solutions Architect',
    company: 'AWS',
  },
  {
    name: 'Caitlin Halla',
    image: CaitlinHalla,
    title: 'Software Engineer',
    company: 'New Relic',
  },
  {
    name: 'David Shanker',
    image: DavidShanker,
    title: 'Director, Platform Engineering',
    company: 'Kinect Consulting',
  },
  {
    name: 'Jeremy Cooper',
    image: JeremyCooper,
    title: 'Sr. TechOps Strategy Consultant',
    company: 'New Relic',
  },
  {
    name: 'Joel Worrall',
    image: JoelWorrall,
    title: 'Director, Open Source and Developer Advocacy',
    company: 'New Relic',
  },
  {
    name: 'John Vajda',
    image: JohnVajda,
    title: 'Senior Product Manager',
    company: 'New Relic',
  },
  {
    name: 'Jon Thurman',
    image: JonThurman,
    title: 'Senior Solutions Consultant',
    company: 'New Relic',
  },
  {
    name: 'Justin Eveland',
    image: JustinEveland,
    title: 'Software Engineer',
    company: 'New Relic',
  },
  {
    name: 'Leon Chapman',
    image: LeonChapman,
    title: 'Senior TechOps Strategy Consultant',
    company: 'New Relic',
  },
  {
    name: 'Lindsy Farina',
    image: LindsyFarina,
    title: 'Senior Product Manager',
    company: 'New Relic',
  },
  {
    name: 'Talia Nassi',
    image: TaliaNassi,
    title: 'Developer Advocate',
    company: 'Split Software',
  },
  {
    name: 'Thomas Martin',
    image: ThomasMartin,
    title: 'Director, Site Reliability',
    company: '27 Global',
  },
  {
    name: 'Alec Swanson',
    image: AlecSwanson,
    title: 'Software Engineer',
    company: 'New Relic',
  },
  {
    name: 'Brian Thomason',
    image: BrianThomason,
    title: 'Senior Partner Solutions Consultant',
    company: 'New Relic',
  },
  {
    name: 'Chris Trombley',
    image: ChrisTrombley,
    title: 'Senior Software Engineer',
    company: 'New Relic',
  },
  {
    name: 'Sander Blue',
    image: SanderBlue,
    title: 'Senior Software Engineer',
    company: 'New Relic',
  },
  {
    name: "Gabe O'Brien",
    image: GabeObrien,
    title: 'Senior Software Engineer',
    company: 'New Relic',
  },
  {
    name: 'Liam Hurrell',
    image: LiamHurrell,
    title: 'Senior Technical Training Specialist',
    company: 'New Relic',
  },
  {
    name: 'Michael Caron',
    image: MichaelCaron,
    title: 'Senior Technical Training Specialist',
    company: 'New Relic',
  },
  {
    name: 'Phil Weber',
    image: PhilWeber,
    title: 'Senior Technical Training Specialist',
    company: 'New Relic',
  },
  {
    name: 'Sebastian Remirez',
    image: SebastianRamirez,
    title: 'Lead Software Engineer',
    company: 'New Relic',
  },
  {
    name: 'Jewels Nocera',
    image: JewelsNocera,
    title: 'Senior Software Engineer',
    company: 'New Relic',
  },
  {
    name: 'Nica Fee',
    image: NicaFee,
    title: 'Developer Advocate',
    company: 'New Relic',
  },
  {
    name: 'Stijn Polfliet',
    image: StijnPolfliet,
    title: 'Principal TechOps Strategy Consultant',
    company: 'New Relic',
  },
  {
    name: 'Brad Schmitt',
    image: BradSchmitt,
    title: 'Senior TechOps Strategy Consultant',
    company: 'New Relic',
  },
  {
    name: 'Eric Mittelhammer',
    image: EricMittelhammer,
    title: 'Senior TechOps Strategy Consultant',
    company: 'New Relic',
  },
  {
    name: 'Colin MacNaughton',
    image: ColinMacNaughton,
    title: 'Lead Software Engineer',
    company: 'New Relic',
  },
];

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

export default NerdDaysPage;
