import React from 'react';
import cx from 'classnames';
import PageLayout from '../components/PageLayout';
import {
  Button,
  ExternalLink,
  NewRelicLogo,
} from '@newrelic/gatsby-theme-newrelic';
import SEO from '../components/Seo';
import FeatherIcon from '../components/FeatherIcon';
import styles from './nerd-days.module.scss';
import hopinLogo from '../images/nerd-days/hopin-logo.svg';
import roadIcon from '../images/nerd-days/icon-road.svg';
import shapesIcon from '../images/nerd-days/icon-shapes.svg';
import openSourceIcon from '../images/nerd-days/icon-open-source.svg';

const NerdDaysPage = () => {
  return (
    <>
      <SEO />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Content>
          <section className={cx(styles.heroSection)}>
            <div className={cx(styles.heroLogoContainer)}>
              <NewRelicLogo />
              <h1 className={cx(styles.heroLogo)}>nerd days 1.0</h1>
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
                <Button
                  as={ExternalLink}
                  variant={Button.VARIANT.PRIMARY}
                  className={cx(styles.ctaButton)}
                >
                  US Registration
                </Button>
                <span className={cx(styles.registrationButtonDate)}>
                  Oct 13, 2020
                </span>
              </li>
              <li className={cx(styles.heroCtaContainerItem)}>
                <Button
                  as={ExternalLink}
                  variant={Button.VARIANT.PRIMARY}
                  className={cx(styles.ctaButton)}
                >
                  EMEA Registration
                </Button>
                <span className={cx(styles.registrationButtonDate)}>
                  Oct 20, 2020
                </span>
              </li>
              <li className={cx(styles.heroCtaContainerItem)}>
                <Button
                  as={ExternalLink}
                  variant={Button.VARIANT.PRIMARY}
                  className={cx(styles.ctaButton)}
                >
                  APJ Registration
                </Button>
                <span className={cx(styles.registrationButtonDate)}>
                  Oct 22, 2020
                </span>
              </li>
            </ul>
          </section>

          <section className={cx(styles.speakersSection, styles.eventSection)}>
            <h3 className={cx(styles.sectionHeading)}>Speaker line up</h3>
            <p className={cx(styles.sectionDescription)}>
              Nulla vitae elit libero, a pharetra augue nullam id dolor id nibh
              ultricies vehicula ut id elit
            </p>

            <ul className={cx(styles.speakerList)}>
              <li className={cx(styles.speakerListItem)}>
                <div className={cx(styles.speakerListItemPhoto)}>
                  <img
                    src="https://dummyimage.com/256x194/#444/000333.jpg"
                    alt="..."
                  />
                </div>
                <div className={cx(styles.speakerListItemCopy)}>
                  <h4 className={cx(styles.speakerListItemHeading)}>
                    Dylan Hernandez
                  </h4>
                  <p className={cx(styles.speakerListItemDescription)}>
                    Etiam porta sem malesuada magna mollis euismod. Aenean eu
                    leo quam. Pellentesque ornare sem lacinia quam.
                  </p>
                </div>
              </li>
              <li className={cx(styles.speakerListItem)}>
                <div className={cx(styles.speakerListItemPhoto)}>
                  <img
                    src="https://dummyimage.com/256x194/#444/000333.jpg"
                    alt="..."
                  />
                </div>
                <div className={cx(styles.speakerListItemCopy)}>
                  <h4 className={cx(styles.speakerListItemHeading)}>
                    Alisha Edwards
                  </h4>
                  <p className={cx(styles.speakerListItemDescription)}>
                    Etiam porta sem malesuada magna mollis euismod. Aenean eu
                    leo quam. Pellentesque ornare sem lacinia quam.
                  </p>
                </div>
              </li>
              <li className={cx(styles.speakerListItem)}>
                <div className={cx(styles.speakerListItemPhoto)}>
                  <img
                    src="https://dummyimage.com/256x194/#444/000333.jpg"
                    alt="..."
                  />
                </div>
                <div className={cx(styles.speakerListItemCopy)}>
                  <h4 className={cx(styles.speakerListItemHeading)}>
                    Ralph McGibbons
                  </h4>
                  <p className={cx(styles.speakerListItemDescription)}>
                    Etiam porta sem malesuada magna mollis euismod. Aenean eu
                    leo quam. Pellentesque ornare sem lacinia quam.
                  </p>
                </div>
              </li>
              <li className={cx(styles.speakerListItem)}>
                <div className={cx(styles.speakerListItemPhoto)}>
                  <img
                    src="https://dummyimage.com/256x194/#444/000333.jpg"
                    alt="..."
                  />
                </div>
                <div className={cx(styles.speakerListItemCopy)}>
                  <h4 className={cx(styles.speakerListItemHeading)}>
                    Anita Baker
                  </h4>
                  <p className={cx(styles.speakerListItemDescription)}>
                    Etiam porta sem malesuada magna mollis euismod. Aenean eu
                    leo quam. Pellentesque ornare sem lacinia quam.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section
            className={cx(
              styles.tracksSection,
              styles.eventSection,
              styles.alternateSection
            )}
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
          </section>

          <section className={cx(styles.agendaSection, styles.eventSection)}>
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
          </section>

          <section
            className={cx(
              styles.engagementSection,
              styles.eventSection,
              styles.alternateSection
            )}
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
                alt="Hoping logo"
              />
              <p className={cx(styles.sponsorLogoCaption)}>
                Event powered by Hopin
              </p>
            </a>
          </section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

export default NerdDaysPage;
