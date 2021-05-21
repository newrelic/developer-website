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
import NerdDaysLogo from '../components/NerdDaysLogo';
import graphLines from '../images/nerd-days/hero-image-graph-lines.png';
import heroBackgroundPattern from '../images/nerd-days/nerd-days-hero-bg-pattern.png';
import shapesIcon from '../images/nerd-days/icon-shapes.svg';
import openSourceIcon from '../images/nerd-days/icon-open-source.svg';
import HopinLogo from '../components/HopinLogo';
import MarketoForm from '../components/MarketoForm';
import styled from '@emotion/styled';
import Agenda from '../components/Agenda';

import StijnPolfliet from '../images/nerd-days/emea-speakers/StijnPolfliet.jpg';
import JavierRamos from '../images/nerd-days/emea-speakers/JavierRamos.jpg';
import DaisyMuyldermans from '../images/nerd-days/emea-speakers/DaisyMuyldermans.jpg';
import AntonMalinovskiy from '../images/nerd-days/emea-speakers/AntonMalinovskiy.jpg';
import JasonClark from '../images/nerd-days/emea-speakers/JasonClark.jpg';
import IreneLopez from '../images/nerd-days/emea-speakers/IreneLopez.jpg';
import MiguelMingorance from '../images/nerd-days/emea-speakers/MiguelMignorance.jpg';
import LiamHurrell from '../images/nerd-days/emea-speakers/LiamHurrell.jpg';
import TomDoherty from '../images/nerd-days/emea-speakers/TomDoherty.jpg';
import DanielAguas from '../images/nerd-days/emea-speakers/DanielAguas.jpg';
import WilliamJanssen from '../images/nerd-days/emea-speakers/WilliamJanssen.jpg';
import ManeshTailor from '../images/nerd-days/emea-speakers/ManeshTailor.jpg';
import SteveWoodard from '../images/nerd-days/emea-speakers/SteveWoodard.jpg';
import IdirOuhab from '../images/nerd-days/emea-speakers/IdirOuhab.jpg';
import BenEvans from '../images/nerd-days/emea-speakers/BenEvans.jpg';

const speakers = [
  {
    name: 'Anton Malinovskiy',
    image: AntonMalinovskiy,
    title: 'Principal Software Engineer',
    company: 'Ocado Technology',
  },
  {
    name: 'Ben Evans',
    image: BenEvans,
    title: 'Principal Software Engineer',
    company: 'New Relic',
  },
  {
    name: 'Daisy Muyldermans',
    image: DaisyMuyldermans,
    title: 'Associate Solutions Engineer',
    company: 'New Relic',
  },
  {
    name: 'Daniel Aguas',
    image: DanielAguas,
    title: 'Software Developer',
    company: 'Basecone',
  },
  {
    name: 'Idir Ouhab Meskine',
    image: IdirOuhab,
    title: 'Solutions Consultant',
    company: 'New Relic',
  },
  {
    name: 'Irene Lopez',
    image: IreneLopez,
    title: 'Software Engineer',
    company: 'New Relic',
  },
  {
    name: 'Jason Clark',
    image: JasonClark,
    title: 'Principal Software Engineer',
    company: 'New Relic',
  },
  {
    name: 'Javier Ramos',
    image: JavierRamos,
    title: 'Principal Site Reliability Engineer',
    company: 'Elsevier',
  },

  {
    name: 'Liam Hurrell',
    image: LiamHurrell,
    title: 'Senior Technical Training Specialist',
    company: 'New Relic',
  },
  {
    name: 'Manesh Tailor',
    image: ManeshTailor,
    title: 'Services Solutions Director',
    company: 'New Relic',
  },
  {
    name: 'Miguel Mingorance',
    image: MiguelMingorance,
    title: 'Systems Engineer',
    company: 'Delivery Hero',
  },
  {
    name: 'Steve Woodard',
    image: SteveWoodard,
    title: 'Enterprise Solutions Architect',
    company: 'AWS',
  },
  {
    name: 'Stijn Polfliet',
    image: StijnPolfliet,
    title: 'Principal TechOps Strategy Consultant',
    company: 'New Relic',
  },
  {
    name: 'Tom Doherty',
    image: TomDoherty,
    title: 'Lead Technical Training Program Manager',
    company: 'New Relic',
  },
  {
    name: 'William Janssen',
    image: WilliamJanssen,
    title: 'CTO',
    company: 'Delta Blue',
  },
];

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
              Nerd Days is a FREE engineering conference that kicks off November
              10 (Dates vary by region)
            </SectionDescription>
            <div
              className={cx(styles.twoColumnAlt, styles.registrationSection)}
            >
              <div>
                <h2>What is Nerd Days exactly…</h2>
                <p>
                  Nerd Days is a <b>FREE</b> engineering conference that kicks
                  off November 10, 2020 <em>(Dates vary by region)</em>. Focused
                  on building more perfect software, our goal is to spend less
                  time looking at slides that tell you what software can do and
                  more time on getting your hands on the software to solve
                  problems efficiently.
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
                <h3>Save the date &amp; join us online</h3>
                <p>
                  Whether you’re new or a data nerd, there’s an interactive
                  session for you. Choose the sessions you're interested in and
                  add Nerd Days to your calendar.
                </p>
                <p>
                  <strong>Date:</strong> November 10, 2020
                  <br />
                  <strong>Time:</strong> 9:45AM GMT - 3:30 - 4 pm GMT (Depending
                  on last session)
                </p>
                <p>
                  We look forward to building with you during Nerd Days! If you
                  have any questions about Nerd Days please emails{' '}
                  <a href="mailto:emeamarketing@newrelic.com">
                    emeamarketing@newrelic.com
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
                  <CtaItem date="Nov 11, 2020" to="/apj-nerd-days">
                    APJ Registration
                  </CtaItem>
                </ul>
              </div>
              <MarketoForm
                id={1418}
                title="REGISTER FOR NERD DAYS | EMEA"
                munchkinId="341-XKP-310"
                publishableKey="pk_4d10daa544de6f993a9a9ce002ccd1c6"
                redirectLink="/nerd-days-thank-you"
              />
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
                name="Open source"
                icon={<img src={openSourceIcon} alt="open source" />}
              />
              <TrackItem
                name="Fundamentals"
                icon={<img src={shapesIcon} alt="Fundamentals" />}
              />
            </ul>
          </Section>

          <Section>
            <SectionHeading>Nerd Days EMEA Agenda</SectionHeading>
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
              tracks={['Observability', 'Open source', 'Fundamentals']}
            >
              <Agenda.Session
                time="9:45 AM"
                title="Welcome and Opening"
                track={null}
                span={3}
              />
              <Agenda.Session
                time="10:00 AM"
                title="Setting SLOs, SLAs and SLIs in the Real World"
                speaker="Javier Ramos"
              />
              <Agenda.Session
                time="10:00 AM"
                title="React and the power of visualization"
                speaker="Daisy Muyldermans"
              />
              <Agenda.Session
                time="10:00 AM"
                title="Instrumenting your service using agents"
                speaker="Tom Doherty"
              />
              <Agenda.Session
                time="11:00 AM"
                title="Who Watches the Watchman: Custom metrics with Micrometer"
                speaker="Anton Malinovskiy"
              />
              <Agenda.Session
                time="11:00 AM"
                title="5 Steps to Kubernetes Observability"
                speaker="Stijn Polfliet"
              />
              <Agenda.Session
                time="11:00 AM"
                title="Exploring your data using NRQL"
                speaker="Liam Hurrell"
              />
              <Agenda.Session
                inactive
                time="12:00 PM"
                title="Lunch Break"
                track={null}
                span={3}
              />
              <Agenda.Session
                time="12:30 PM"
                title="Fireside Chat: Frontline engineering in 2020"
                track={null}
                speaker="Manesh Tailor & Steve Woodard"
                span={3}
              />
              <Agenda.Session
                time="1:00 PM"
                title="GraphQL: Smooth Schemas and Rough Edges"
                speaker="Irene Lopez & Jason Clark"
              />
              <Agenda.Session
                time="1:00 PM"
                title="Reducing toil with Terraform"
                speaker="Miguel Mingorance"
              />
              <Agenda.Session
                time="1:00 PM"
                title="Custom Data Collection"
                speaker="Tom Doherty"
              />
              <Agenda.Session
                time="2:00 PM"
                title="Test in production with KPI-driven release management"
                speaker="William Janssen"
              />
              <Agenda.Session
                time="2:00 PM"
                title="Plot your data"
                speaker="Daniel Aguas"
              />
              <Agenda.Session
                time="2:00 PM"
                title="Alerts Best Practices"
                speaker="Liam Hurrell"
              />
              <Agenda.Session
                time="3:00 PM"
                title="New Relic AI"
                speaker="Idir Ouhab Meskine"
              />
              <Agenda.Session
                time="3:00 PM"
                title="How We Became Open By Default"
                speaker="Ben Evans"
              />
              <Agenda.Session
                time="3:00 PM"
                title="True availability using Synthetics"
                speaker="Tom Doherty"
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
