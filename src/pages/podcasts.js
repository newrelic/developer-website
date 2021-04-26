import PageLayout from '../components/PageLayout';
import React from 'react';
import PropTypes from 'prop-types';
import DevSiteSeo from '../components/DevSiteSeo';
import cx from 'classnames';
import podcastsHeader from '../images/podcasts/podcasts.jpg';
import * as styles from './podcasts.module.scss';

const PodcastsPage = ({ location }) => {
  const podcastsMeta = [
    {
      id: '1225223',
      title: 'Observy McObservface',
    },
    {
      id: '1677727',
      title: 'Polyglot',
    },
    {
      id: '1677670',
      title: 'Launchies',
    },
  ];

  return (
    <>
      <DevSiteSeo location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="New Relic Podcasts" />
        <PageLayout.Content>
          <section className={cx(styles.section, styles.twoColumn)}>
            <div className={styles.bodyText}>
              <p>
                Sometimes we talk on the internet about some things. You
                probably listen to some things on the internet sometimes. We're
                perfect for each other.
              </p>
              <p>
                We've spun up a few podcasts to bring you all the news, code,
                and pontification that's fit for publication, and rather a lot
                that isn't as well.
              </p>
              <p>
                We hope you enjoy them! If you don't, please feel free to{' '}
                <a href="mailto:devrel@newrelic.com">send us mean emails.</a>{' '}
                It's internet tradition.
              </p>
            </div>
            <img
              className={styles.img}
              src={podcastsHeader}
              alt="podcasts header"
            />
          </section>

          {podcastsMeta.map((podcastMeta) => {
            return (
              <section
                className={cx(styles.section, styles.player)}
                key={podcastMeta.id}
              >
                <iframe
                  title={`${podcastMeta.title} podcast player`}
                  src={`https://www.buzzsprout.com/${podcastMeta.id}?client_source=large_player&iframe=true&referrer=https://www.buzzsprout.com/${podcastMeta.id}.js?container_id=buzzsprout-large-player-${podcastMeta.id}&player=large`}
                />
              </section>
            );
          })}
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

PodcastsPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default PodcastsPage;
