import React from 'react';
import cx from 'classnames';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PageTitle from '../components/PageTitle';
import ExternalLink from '../components/ExternalLink';
import FeatherIcon from '../components/FeatherIcon';
import colleaguesOffice from '../images/developer-champion/colleagues-office.jpeg';
import devChampionHeader from '../images/developer-champion/developer-champion-header.jpg';
import uptimeEverythingHeader from '../images/developer-champion/uptime-everything-header-image.jpg';
import teamMeeting from '../images/developer-champion/team-meeting.jpg';
import styles from './developer-champion.module.scss';

const DeveloperChampionPage = () => {
  return (
    <Layout>
      <SEO />
      <PageTitle>New Relic Developer Champions</PageTitle>
      <section className={cx(styles.section, styles.twoColumn)}>
        <div>
          <p>
            New Relic Champions are the voice of the developer community. As
            experts and innovators, they are given the resources to not only
            share the newest product innovations and updates but also provide
            feedback of the community back to New Relic product and engineering
            teams.
          </p>
          <p>
            Champions solve big problems using New Relic as their linchpin and
            are recognized as experts and leaders in the New Relic technical
            community.{' '}
          </p>
          <ExternalLink href="https://forms.gle/Zkdub5e1x4MNqSKW9">
            Nominate a Developer Champion
          </ExternalLink>
        </div>
        <img
          className={styles.img}
          src={devChampionHeader}
          alt="developer champion header"
        />
      </section>
      <section className={styles.section}>
        <h2>What do developer champions do?</h2>
        <p>
          New Relic Champions demonstrate expertise in using New Relic products
          by solving large problems and positioning New Relic as a central force
          in their strategies. The New Relic Champions is a recognition and
          partnership program designed to acknowledge the developers that are
          driving innovation within their companies and making top contributions
          to the developer community. Also committing to making their work
          public by:
        </p>
      </section>
      <section className={cx(styles.section, styles.championProgram)}>
        <div className={styles.point}>
          <FeatherIcon className={styles.pointIcon} name="github" size="4rem" />
          <h4>Open-source contributions</h4>
          <p>
            Serving as an open-source author or maintainer for an accepted
            public project related to New Relic One
          </p>
        </div>
        <div className={styles.point}>
          <FeatherIcon className={styles.pointIcon} name="trello" size="4rem" />
          <h4>Content creation</h4>
          <p>
            Authoring two pieces of content in the New Relic Explorers Hub / Dev
            Website
          </p>
        </div>
        <div className={styles.point}>
          <FeatherIcon className={styles.pointIcon} name="users" size="4rem" />
          <h4>Community engagement</h4>
          <p>
            Delivering and/or organizing two events based around an
            observability platform theme in which New Relic plays a crucial role
          </p>
        </div>
        <ExternalLink
          className={styles.nominateButton}
          href="https://forms.gle/Zkdub5e1x4MNqSKW9"
        >
          <button type="button">
            Nominate a Developer Champion{' '}
            <FeatherIcon
              name="external-link"
              className={styles.externalLinkIcon}
            />
          </button>
        </ExternalLink>
      </section>
      <section className={cx(styles.section, styles.twoColumn)}>
        <img
          className={styles.img}
          src={uptimeEverythingHeader}
          alt="uptime everything header"
        />
        <div>
          <h2>Why should you join and how will we support?</h2>
          <p>
            As a benefit of being a Developer Champion, New Relic provides
            Champions unique access to our Developer Advocacy team and the
            resources of our product organization as well as specialized
            recognition and rewards.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Developer Champions Benefits:</h2>
        <ul>
          <li>
            Formal, specialized access to the New Relic Product organization
            <ul>
              <li>
                Champions have direct access to the New Relic’s Developer
                Ecosystem team
              </li>
              <li>Custom badge to wear with pride at events</li>
            </ul>
          </li>
          <li>
            Public recognition on the New Relic Developer website and badging in
            the New Relic Explorers Hub as a Champion
          </li>
          <li>Exclusive Champion-only SWAG</li>
          <li>Early access program for some of our products (under NDA)</li>
          <li>
            Priority access to offsite FutureHack events (including when Lew is
            participating)
          </li>
          <li>
            Increased Explorer’s Hub support SLA Access to private Developer
            Champion Explorer’s Hub group
          </li>
        </ul>
      </section>
      <section className={cx(styles.section, styles.twoColumn)}>
        <img
          src={colleaguesOffice}
          className={styles.img}
          alt="colleagues office"
        />
        <img src={teamMeeting} className={styles.img} alt="team meeting" />
      </section>
    </Layout>
  );
};

export default DeveloperChampionPage;
