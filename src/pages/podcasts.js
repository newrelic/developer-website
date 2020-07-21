import React from 'react';
import cx from 'classnames';
import SEO from '../components/Seo';
import PageTitle from '../components/PageTitle';
import podcastsHeader from '../images/podcasts/podcasts.jpg';
import styles from './podcasts.module.scss';

const PodcastsPage = () => {
  return (
    <>
      <SEO />
      <PageTitle>New Relic Podcasts</PageTitle>
      <section className={cx(styles.section, styles.twoColumn)}>
        <div>
          <p>
            Sometimes we talk on the internet about some things. You probably
            listen to some things on the internet sometimes. We're perfect for
            each other.
          </p>
          <p>
            We're in the process of spinning up a few podcasts to bring you all
            the news, code and pontification that's fit for publication, and
            rather a lot that isn't as well.
          </p>
          <p>
            For the time being we have one podcast with one episode, so we're
            including it here for your listening enjoyment.
          </p>
          <p>
            While it may seem silly to start an entire page for podcasts when we
            only have the one episode (we should really have called it 'podcast'
            page), we had to start somewhere.
          </p>
          <p>
            <blockquote>
              <p>
                "Omnium rerum principia parva sunt" (All things have small
                beginnings)
              </p>
              <footer>- Marcus Tullius Cicero (106 BC - 43 BC)</footer>
            </blockquote>
          </p>
          <p>
            We hope you enjoy it. If you don't please feel free to{' '}
            <a href="mailto:devrel@newrelic.com">send us mean emails.</a> It's
            internet tradition.
          </p>
        </div>
        <img
          className={styles.img}
          src={podcastsHeader}
          alt="podcasts header"
        />
      </section>
      <section className={cx(styles.section, styles.player)}>
        <div id="buzzsprout-player">
          <iframe
            title="buzzsprout"
            src="https://www.buzzsprout.com/1225223/4619918-code-red-observability-meltdown?client_source=small_player&amp;iframe=true&amp;referrer=https%253A%252F%252Fwww.buzzsprout.com%252F1225223%252F4619918-code-red-observability-meltdown.js%253Fcontainer_id%253Dbuzzsprout-player%2526player%253Dsmall%22%20width=%22100%25%22%20height=%22200%22%20frameborder=%220%22%20scrolling=%22no%22"
          />
        </div>
      </section>
    </>
  );
};

export default PodcastsPage;
