import React from 'react';
import cx from 'classnames';
import PageLayout from '../components/PageLayout';
import { Button, ExternalLink } from '@newrelic/gatsby-theme-newrelic';
import SEO from '../components/Seo';
import FeatherIcon from '../components/FeatherIcon';
import nrLogo from '../images/nerd-days/nr-logo.svg';
import styles from './nerd-days.module.scss';
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
              <img
                src={nrLogo}
                className={cx(styles.heroNrLogo)}
                alt="New Relic"
              />
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

          <section className={cx(styles.tracksSection, styles.eventSection, styles.alternateSection)}>
            <h3 className={cx(styles.sectionHeading)}>Tracks</h3>
            <p className={cx(styles.sectionDescription)}>
              Tracks will vary by region. All sessions will be recorded and 
              distributed after the event.
            </p>

            <ul className={cx(styles.tracksList)}>
              <li className={cx(styles.tracksListItem)}>
                <FeatherIcon className={cx(styles.eyeIcon, styles.trackIcon)} name="eye" size="87" />
                <h5 className={cx(styles.tracksListItemName)}>Observability</h5>
              </li>
              <li className={cx(styles.tracksListItem)}>
                <FeatherIcon className={cx(styles.cloudMigrationIcon, styles.trackIcon)} name="upload-cloud" size="87" />
                <h5 className={cx(styles.tracksListItemName)}>Cloud Migration</h5>
              </li>
              <li className={cx(styles.tracksListItem)}>
                <img className={cx(styles.trackIcon)} src={openSourceIcon} alt="open source"/>
                <h5 className={cx(styles.tracksListItemName)}>Open Source</h5>
              </li>
              <li className={cx(styles.tracksListItem)}>
                <img className={cx(styles.trackIcon)} src={roadIcon} alt="devops journey"/>
                <h5 className={cx(styles.tracksListItemName)}>Devops Journey</h5>
              </li>
              <li className={cx(styles.tracksListItem)}>
                <img className={cx(styles.trackIcon)} src={shapesIcon} alt="Fundamentals"/>
                <h5 className={cx(styles.tracksListItemName)}>fundamentals</h5>
              </li>
            </ul>
          </section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

export default NerdDaysPage;
