import React from 'react';
import { css } from '@emotion/core';
import cx from 'classnames';
import PageLayout from '../components/PageLayout';
import {
  Button,
  ExternalLink,
  NewRelicLogo,
  Surface,
} from '@newrelic/gatsby-theme-newrelic';
import SEO from '../components/Seo';
import { graphql, useStaticQuery } from 'gatsby';
import FeatherIcon from '../components/FeatherIcon';
import styles from './nerd-days.module.scss';
import hopinLogo from '../images/nerd-days/hopin-logo.svg';
import roadIcon from '../images/nerd-days/icon-road.svg';
import NerdDaysLogo from '../components/NerdDaysLogo';
import shapesIcon from '../images/nerd-days/icon-shapes.svg';
import openSourceIcon from '../images/nerd-days/icon-open-source.svg';

const NerdDaysPage = () => {
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
      <SEO />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Content>
          <section className={cx(styles.heroSection)}>
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
                `}
              />
            </div>
            <h3 className={cx(styles.heroHeading)}>
              Nerd Days is a{' '}
              <em className={cx(styles.heroHeadingHighlight)}>free</em>
              {` `}
              1-day event focused on building more perfect software
            </h3>
            <p className={cx(styles.heroDescription)}>
              Our goal is to spend less time looking at slides that tell you
              what software can do and more time on getting your hands on the
              software to solve problems efficiently. Morbi malesuada nulla nec
              purus convallis consequat. Vivamus id mollis quam. Morbi ac comm.
              You’ll hear from fellow engineers who built New Relic solutions
              and New Relic users from various industries. Whether you’re new or
              a data nerd, there’s an interactive session for you. We look
              forward to building with you during Nerd Days.
            </p>
            <ul className={cx(styles.heroCtaContainer)}>
              <li className={cx(styles.heroCtaContainerItem)}>
                <CtaButton>US Registration</CtaButton>
                <span className={cx(styles.registrationButtonDate)}>
                  Oct 13, 2020
                </span>
              </li>
              <li className={cx(styles.heroCtaContainerItem)}>
                <CtaButton>EMEA Registration</CtaButton>
                <span className={cx(styles.registrationButtonDate)}>
                  Oct 20, 2020
                </span>
              </li>
              <li className={cx(styles.heroCtaContainerItem)}>
                <CtaButton>APJ Registration</CtaButton>
                <span className={cx(styles.registrationButtonDate)}>
                  Oct 22, 2020
                </span>
              </li>
            </ul>
          </section>

          <Section className={cx(styles.speakersSection)}>
            <h3 className={cx(styles.sectionHeading)}>Speaker line up</h3>
            <p className={cx(styles.sectionDescription)}>
              Nulla vitae elit libero, a pharetra augue nullam id dolor id nibh
              ultricies vehicula ut id elit
            </p>

            <ul className={cx(styles.speakerList)}>
              {speakers.map(({ name, bio }, idx) => (
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
                      src="https://dummyimage.com/256x194/#444/000333.jpg"
                      alt="..."
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
                      {bio}
                    </p>
                  </div>
                </Surface>
              ))}
            </ul>
          </Section>

          <Section
            css={alternateSection}
            className={cx(styles.tracksSection, styles.alternateSection)}
          >
            <h3 className={cx(styles.sectionHeading)}>Tracks</h3>
            <p className={cx(styles.sectionDescription)}>
              Tracks will vary by region. All sessions will be recorded and
              distributed after the event.
            </p>

            <ul className={cx(styles.tracksList)}>
              <li className={cx(styles.tracksListItem)}>
                <FeatherIcon
                  className={cx(styles.eyeIcon, styles.trackIcon)}
                  name="eye"
                  size="87"
                />
                <h5 className={cx(styles.tracksListItemName)}>Observability</h5>
              </li>
              <li className={cx(styles.tracksListItem)}>
                <FeatherIcon
                  className={cx(styles.cloudMigrationIcon, styles.trackIcon)}
                  name="upload-cloud"
                  size="87"
                />
                <h5 className={cx(styles.tracksListItemName)}>
                  Cloud Migration
                </h5>
              </li>
              <li className={cx(styles.tracksListItem)}>
                <img
                  className={cx(styles.trackIcon)}
                  src={openSourceIcon}
                  alt="open source"
                />
                <h5 className={cx(styles.tracksListItemName)}>Open Source</h5>
              </li>
              <li className={cx(styles.tracksListItem)}>
                <img
                  className={cx(styles.trackIcon)}
                  src={roadIcon}
                  alt="devops journey"
                />
                <h5 className={cx(styles.tracksListItemName)}>
                  Devops Journey
                </h5>
              </li>
              <li className={cx(styles.tracksListItem)}>
                <img
                  className={cx(styles.trackIcon)}
                  src={shapesIcon}
                  alt="Fundamentals"
                />
                <h5 className={cx(styles.tracksListItemName)}>fundamentals</h5>
              </li>
            </ul>
          </Section>

          <Section className={cx(styles.agendaSection)}>
            <h3 className={cx(styles.sectionHeading)}>Agenda</h3>
            <p className={cx(styles.sectionDescription)}>
              We’ve got a packed schedule with thought-leaders of their
              respective industries
            </p>

            <div className={cx(styles.agendaContainer)}>
              <div className={cx(styles.agendaHeaderRow)}>
                <h5
                  className={cx(
                    styles.agendaHeaderRowHeading,
                    styles.agendaHeaderRowHeading1
                  )}
                >
                  Observability
                </h5>
                <h5
                  className={cx(
                    styles.agendaHeaderRowHeading,
                    styles.agendaHeaderRowHeading2
                  )}
                >
                  Cloud Migration
                </h5>
                <h5
                  className={cx(
                    styles.agendaHeaderRowHeading,
                    styles.agendaHeaderRowHeading3
                  )}
                >
                  Open Source
                </h5>
                <h5
                  className={cx(
                    styles.agendaHeaderRowHeading,
                    styles.agendaHeaderRowHeading4
                  )}
                >
                  DevOps Journey
                </h5>
                <h5
                  className={cx(
                    styles.agendaHeaderRowHeading,
                    styles.agendaHeaderRowHeading5
                  )}
                >
                  Fundamentals
                </h5>
              </div>
              <div className={cx(styles.agendaRow)}>
                <h4 className={cx(styles.agendaTime)}>8:00 AM</h4>
                <h4
                  className={cx(styles.agendaSession, styles.agendaSession5Col)}
                >
                  Welcome
                  <span className={cx(styles.agendaSessionSpeaker)}>
                    Jemiah Sius
                  </span>
                  <ul className={cx(styles.agendaSessionMetaList)}>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      8:00 AM
                    </li>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      DevOps Journey
                    </li>
                  </ul>
                </h4>
              </div>
              <div className={cx(styles.agendaRow)}>
                <h4 className={cx(styles.agendaTime)}>8:30 AM</h4>
                <h4
                  className={cx(styles.agendaSession, styles.agendaSession2Col)}
                >
                  Building better apps
                  <span className={cx(styles.agendaSessionSpeaker)}>
                    Anita Baker
                  </span>
                  <ul className={cx(styles.agendaSessionMetaList)}>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      8:00 AM
                    </li>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      Fundamentals
                    </li>
                  </ul>
                </h4>
                <h4
                  className={cx(styles.agendaSession, styles.agendaSession2Col)}
                >
                  Open DevOps
                  <span className={cx(styles.agendaSessionSpeaker)}>
                    Robert Parr
                  </span>
                  <ul className={cx(styles.agendaSessionMetaList)}>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      8:00 AM
                    </li>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      DevOps Journey
                    </li>
                  </ul>
                </h4>
                <h4 className={cx(styles.agendaSession)}>
                  NR 101
                  <span className={cx(styles.agendaSessionSpeaker)}>
                    Jeff Osborne
                  </span>
                  <ul className={cx(styles.agendaSessionMetaList)}>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      8:00 AM
                    </li>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      DevOps Journey
                    </li>
                  </ul>
                </h4>
              </div>
              <div className={cx(styles.agendaRow)}>
                <h4 className={cx(styles.agendaTime)}>9:00 AM</h4>
                <h4 className={cx(styles.agendaSession)}>
                  All seeing eye
                  <span className={cx(styles.agendaSessionSpeaker)}>
                    Dylan Hernandez
                  </span>
                  <ul className={cx(styles.agendaSessionMetaList)}>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      8:00 AM
                    </li>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      Observability
                    </li>
                  </ul>
                </h4>
                <h4 className={cx(styles.agendaSession)}>
                  AWS Ops
                  <span className={cx(styles.agendaSessionSpeaker)}>
                    Celso Piña
                  </span>
                  <ul className={cx(styles.agendaSessionMetaList)}>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      8:00 AM
                    </li>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      DevOps Journey
                    </li>
                  </ul>
                </h4>
                <h4 className={cx(styles.agendaSession)}>
                  Main v master
                  <span className={cx(styles.agendaSessionSpeaker)}>
                    Jeff Osborne
                  </span>
                  <ul className={cx(styles.agendaSessionMetaList)}>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      8:00 AM
                    </li>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      DevOps Journey
                    </li>
                  </ul>
                </h4>
                <h4
                  className={cx(styles.agendaSession, styles.agendaSession2Col)}
                >
                  DevOps Journey
                  <span className={cx(styles.agendaSessionSpeaker)}>
                    Jemiah Sius
                  </span>
                  <ul className={cx(styles.agendaSessionMetaList)}>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      8:00 AM
                    </li>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      DevOps Journey
                    </li>
                  </ul>
                </h4>
              </div>
              <div className={cx(styles.agendaRow)}>
                <h4 className={cx(styles.agendaTime)}>11:00 AM</h4>
                <h4 className={cx(styles.agendaSession)}>
                  Is it down? Yes.
                  <span className={cx(styles.agendaSessionSpeaker)}>
                    Dylan Hernandez
                  </span>
                  <ul className={cx(styles.agendaSessionMetaList)}>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      8:00 AM
                    </li>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      Fundamentals
                    </li>
                  </ul>
                </h4>
                <h4
                  className={cx(styles.agendaSession, styles.agendaSession2Col)}
                >
                  How much is too much?
                  <span className={cx(styles.agendaSessionSpeaker)}>
                    Natalia Lafourcade
                  </span>
                  <ul className={cx(styles.agendaSessionMetaList)}>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      8:00 AM
                    </li>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      DevOps Journey
                    </li>
                  </ul>
                </h4>
                <h4 className={cx(styles.agendaSession)}>
                  Monolith Magic
                  <span className={cx(styles.agendaSessionSpeaker)}>
                    John McGibbons
                  </span>
                  <ul className={cx(styles.agendaSessionMetaList)}>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      8:00 AM
                    </li>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      DevOps Journey
                    </li>
                  </ul>
                </h4>
                <h4 className={cx(styles.agendaSession)}>
                  Debuggers
                  <span className={cx(styles.agendaSessionSpeaker)}>
                    Anita Baker
                  </span>
                  <ul className={cx(styles.agendaSessionMetaList)}>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      8:00 AM
                    </li>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      DevOps Journey
                    </li>
                  </ul>
                </h4>
              </div>
              <div className={cx(styles.agendaRow)}>
                <h4
                  className={cx(
                    styles.agendaTime,
                    styles.agendaSessionSecondary
                  )}
                >
                  12:00 PM
                </h4>
                <h4
                  className={cx(
                    styles.agendaSession,
                    styles.agendaSessionSecondary,
                    styles.agendaSession5Col
                  )}
                >
                  Lunch break
                  <span className={cx(styles.agendaSessionSpeaker)}>
                    Music by DJ Mykael V
                  </span>
                  <ul className={cx(styles.agendaSessionMetaList)}>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      8:00 AM
                    </li>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      DevOps Journey
                    </li>
                  </ul>
                </h4>
              </div>
              <div className={cx(styles.agendaRow)}>
                <h4 className={cx(styles.agendaTime)}>1:30 PM</h4>
                <h4
                  className={cx(styles.agendaSession, styles.agendaSession3Col)}
                >
                  Observability and you
                  <span className={cx(styles.agendaSessionSpeaker)}>
                    Natalia Lafourcade
                  </span>
                  <ul className={cx(styles.agendaSessionMetaList)}>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      8:00 AM
                    </li>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      DevOps Journey
                    </li>
                  </ul>
                </h4>
                <h4
                  className={cx(styles.agendaSession, styles.agendaSession2Col)}
                >
                  Covid productivity
                  <span className={cx(styles.agendaSessionSpeaker)}>
                    Celso Piña
                  </span>
                  <ul className={cx(styles.agendaSessionMetaList)}>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      8:00 AM
                    </li>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      DevOps Journey
                    </li>
                  </ul>
                </h4>
              </div>
              <div className={cx(styles.agendaRow)}>
                <h4 className={cx(styles.agendaTime)}>2:30 PM</h4>
                <h4
                  className={cx(styles.agendaSession, styles.agendaSession5Col)}
                >
                  Closing + Swag
                  <span className={cx(styles.agendaSessionSpeaker)}>
                    Jemiah Sius and Team
                  </span>
                  <ul className={cx(styles.agendaSessionMetaList)}>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      8:00 AM
                    </li>
                    <li className={cx(styles.agendaSessionMetaListItem)}>
                      DevOps Journey
                    </li>
                  </ul>
                </h4>
              </div>
            </div>
          </Section>

          <Section
            css={alternateSection}
            className={cx(styles.engagementSection, styles.alternateSection)}
          >
            <h3 className={cx(styles.sectionHeading)}>
              Engage with the developer community
            </h3>

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
                    <FeatherIcon
                      className={cx(styles.engagementOptionIcon)}
                      name="twitter"
                      size="23"
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
                    <FeatherIcon
                      className={cx(styles.engagementOptionIcon)}
                      name="message-square"
                      size="20"
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
                    <FeatherIcon
                      className={cx(styles.engagementOptionIcon)}
                      name="code"
                      size="26"
                    />
                  </span>
                </a>
              </li>
            </ul>

            <a
              href="https://hopin.to/?ref=developer.newrelic.com"
              className={cx(styles.sponsorLogoContainer)}
            >
              <img
                className={cx(styles.sponsorLogo)}
                src={hopinLogo}
                alt="Hopin logo"
              />
              <p className={cx(styles.sponsorLogoCaption)}>
                Event powered by Hopin
              </p>
            </a>
          </Section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

const speakers = [
  {
    name: 'Dylan Hernandez',
    bio:
      'Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam.',
  },
  {
    name: 'Alisha Edwards',
    bio:
      'Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam.',
  },
  {
    name: 'Ralph McGibbons',
    bio:
      'Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam.',
  },
  {
    name: 'Anita Baker',
    bio:
      'Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam.',
  },
];

const Section = (props) => (
  <section
    css={css`
      padding: 4rem 0;
      position: relative;
    `}
    {...props}
  />
);

const CtaButton = (props) => (
  <Button
    as={ExternalLink}
    variant={Button.VARIANT.PRIMARY}
    css={css`
      background-color: #fff;
      color: #0069ce;

      &:hover {
        background-color: #fff;
        color: #0069ce;
      }

      &:active {
        transform: translateY(1px);
      }
    `}
    {...props}
  />
);

export default NerdDaysPage;
