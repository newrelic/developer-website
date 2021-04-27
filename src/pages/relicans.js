import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import DevSiteSeo from '../components/DevSiteSeo';
import PageLayout from '../components/PageLayout';
import FeatherIcon from '../components/FeatherIcon';
import styles from './relicans.module.scss';
import { teamMembers } from '../data/relicansData';
import { css } from '@emotion/core';

const RelicansPage = ({ location }) => {
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
      <div className={cx(styles.point, styles.relicansProfileTile)} key={i}>
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
      <DevSiteSeo location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="Relicans - The New Relic Developer Relations Team" />
        <PageLayout.Content>
          <section
            css={css`
              display: flex;
              justify-content: space-between;

              @media (max-width: 1080px) {
                flex-direction: column;
              }
            `}
          >
            <div
              css={css`
                flex: 1;
                margin-right: 1rem;
                margin-bottom: 1rem;
              `}
            >
              <p className="intro-text">
                We love software, and more than that we love the people who make
                it. Our entire platform is designed to make their lives easier.
                We’re here to help you write better software and we’re very
                proud to announce that we’re launching a developer relations
                team to do just that.
              </p>
              <p className="intro-text">
                You're going to be hearing a lot from us in the coming months as
                we join you out there on the internet, here's a quick preview of
                what we'll be up to:
              </p>
              <p className="intro-text">
                <ul>
                  <li>
                    Producing educational and inspirational content for anyone
                    who writes code, whether in development, site reliability
                    engineering, or IT operations.
                  </li>
                  <li>
                    Partnering with you as you explore the world of software,
                    not just on our platform but with all of the languages,
                    frameworks, and tools you love.
                  </li>
                  <li>
                    Inviting you to hang out with us for gaming, writing code,
                    playing music, and just having fun.
                  </li>
                </ul>
              </p>
              <p className="intro-text">
                You can find news of our efforts here on this page or on our
                Twitter account:{' '}
                <a href="https://twitter.com/therelicans">@therelicans</a>.
              </p>
            </div>
            <iframe
              css={css`
                max-width: 560px;
                iframe {
                  width: 100%;
                  height: 315px;
                }
              `}
              width="560"
              title="Relicans Page Video"
              height="315"
              src="https://www.youtube.com/embed/OlW3g631ero"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </section>

          <h2 className={styles.meetTheRelicansHeading}>Meet the Relicans</h2>

          <section className={cx(styles.section, styles.meetTheTeam)}>
            {teamMemberPanels}
          </section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

RelicansPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default RelicansPage;
