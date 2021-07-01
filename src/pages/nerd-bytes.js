import React from 'react';
import cx from 'classnames';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import DevSiteSeo from '../components/DevSiteSeo';
import { Button, Link } from '@newrelic/gatsby-theme-newrelic';
import PageLayout from '../components/PageLayout';
import FeatherIcon from '../components/FeatherIcon';
import { PageContext } from '../components/PageContext';
import * as styles from './index.module.scss';
import podcastBadge from '../images/podcasts/podcasts-badge.png';
import Video from '../components/Video';

const NerdbytesPage = ({ location }) => {
  return (
    <PageContext.Provider>
      <DevSiteSeo location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="New Relic Nerd Bytes" />

        <PageLayout.Content>
          <section
            css={css`
              margin-top: 0;
            `}
            className={cx(styles.intro, 'intro-text')}
          >
            <div className={styles.introText}>
              <p>
                <Link
                  className={styles.externalLink}
                  to="https://www.youtube.com/playlist?list=PLmhYj7Jl81JEV-llIDkCVC05tD7fbOv_b"
                >
                  Nerd Bytes is a video series
                  <FeatherIcon
                    className={styles.externalLinkIcon}
                    name="external-link"
                  />
                </Link>{' '}
                produced by engineers and practitioners <em>for</em> engineers
                and practitioners.
                <br />
                <br />
                Nerd Bytes episodes are crowd sourced, super short, micro topic
                focused video screencast demos of tips, tricks, features,
                functionality, news and ideas. Less formal than documentation,
                easier to digest than a tutorial. Released regularly to keep New
                Relic practitioners up to date with fresh and interesting
                content.
              </p>
              <p>
                <Button
                  as={Link}
                  variant={Button.VARIANT.PRIMARY}
                  to="https://www.youtube.com/playlist?list=PLmhYj7Jl81JEV-llIDkCVC05tD7fbOv_b"
                >
                  Nerd Bytes playlist
                </Button>
              </p>
            </div>
            <div
              css={css`
                flex: 1;
                margin-top: 0;
                width: 100%;
              `}
            >
              <Video id="sN5GpX0eWMc" type="youtube" />
            </div>
          </section>

          <section>
            <h2>How to consume Nerd Bytes</h2>
            <p>
              Find the latest Nerd Bytes episode on the New Relic YouTube
              channel{' '}
              <Link
                className={styles.externalLink}
                to="https://www.youtube.com/playlist?list=PLmhYj7Jl81JEV-llIDkCVC05tD7fbOv_b"
              >
                Nerd Bytes Playlist
                <FeatherIcon
                  className={styles.externalLinkIcon}
                  name="external-link"
                />
              </Link>{' '}
              We encourage you to subscribe to the Nerd Bytes RSS feed and add
              it to your Slack or Team channel. Fresh content will be delivered
              directly to you when it is published.
            </p>
            <p>
              The RSS feed url is:
              <br />
              <code>
                https://www.youtube.com/feeds/videos.xml?playlist_id=PLmhYj7Jl81JEV-llIDkCVC05tD7fbOv_b
              </code>
            </p>
            <p>
              <strong>Add to Slack</strong>
              <br />
              In Slack you can subscribe any channel to this feed using the
              following command:
              <br />
              <code>
                /feed subscribe
                https://www.youtube.com/feeds/videos.xml?playlist_id=PLmhYj7Jl81JEV-llIDkCVC05tD7fbOv_b
              </code>
            </p>
            <p>
              <strong>Add to Microsoft Teams</strong>
              <br />
              To add the feed to Teams add the RSS url to the RSS Feeds
              connector app.
            </p>
          </section>

          <section
            className={cx(
              styles.section,
              styles.stripedSection,
              styles.developerChampions
            )}
          >
            <div>
              <h2>
                Do you want all the news, code and pontification that's fit for
                publication?
                <br />
                New Relic Podcasts
              </h2>
              <p>
                We like to talk, especially to developers about developer
                things. Join us for conversations on open source, observability,
                software design and industry news.
              </p>
              <Button as={Link} variant={Button.VARIANT.PRIMARY} to="/podcasts">
                Listen
                <FeatherIcon
                className={styles.externalLinkIcon}
                name="external-link" />
              </Button>
            </div>
            <img src={podcastBadge} alt="podcast badge" />
          </section>
        </PageLayout.Content>
      </PageLayout>
    </PageContext.Provider>
  );
};

NerdbytesPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NerdbytesPage;
