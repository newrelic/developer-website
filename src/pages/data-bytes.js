import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import DevSiteSeo from '../components/DevSiteSeo';
import { Button, Link } from '@newrelic/gatsby-theme-newrelic';
import PageLayout from '../components/PageLayout';
import FeatherIcon from '../components/FeatherIcon';
import { PageContext } from '../components/PageContext';
import podcastBadge from '../images/podcasts/podcasts-badge.png';
import Video from '../components/Video';

const DatabytesPage = ({ location }) => {
  return (
    <PageContext.Provider>
      <DevSiteSeo location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="New Relic Data Bytes" />

        <PageLayout.Content>
          <section
            css={css`
              display: flex;
              justify-content: space-between;
              margin: 0 auto 2rem;

              @media (max-width: 1080px) {
                flex-direction: column;
              }
              color: var(--secondary-text-color);
              font-size: 1.125rem;
              line-height: 1.75;

              li:not(:last-child) {
                margin-bottom: 0.5rem !important;
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
              <p>
                <Link
                  css={css`
                    display: inline-flex;
                  `}
                  to="https://www.youtube.com/playlist?list=PLmhYj7Jl81JEV-llIDkCVC05tD7fbOv_b"
                >
                  Data Bytes is a video series
                  <FeatherIcon
                    css={css`
                      margin-left: 0.25rem;
                    `}
                    name="external-link"
                  />
                </Link>{' '}
                produced by engineers and practitioners <em>for</em> engineers
                and practitioners.
                <br />
                <br />
                Data Bytes episodes are crowd sourced, super short, micro topic
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
                  Data Bytes playlist
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
              <Video id="4U3Z0z_r6vk" type="youtube" />
            </div>
          </section>

          <section>
            <h2>How to consume Data Bytes</h2>
            <p>
              Find the latest Data Bytes episode on the New Relic YouTube
              channel{' '}
              <Link
                css={css`
                  align-items: center;
                `}
                to="https://www.youtube.com/playlist?list=PLmhYj7Jl81JEV-llIDkCVC05tD7fbOv_b"
              >
                Data Bytes Playlist
                <FeatherIcon
                  css={css`
                    margin-left: 0.25rem;
                  `}
                  name="external-link"
                />
              </Link>{' '}
              We encourage you to subscribe to the Data Bytes RSS feed and add
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
            css={css`
              margin-top: 4rem;
              --surface-background-color: var(
                --secondary-surface-background-color
              );

              padding: 2rem;
              background: var(--secondary-background-color);
              border-radius: 4px;
              display: flex;

              @media screen and (max-width: 700px) {
                flex-direction: column;
                align-items: center;
              }

              img {
                height: 9rem;
              }
            `}
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
                  css={css`
                    margin-left: 0.25rem;
                  `}
                  name="external-link"
                />
              </Button>
            </div>
            <img src={podcastBadge} alt="podcast badge" />
          </section>
        </PageLayout.Content>
      </PageLayout>
    </PageContext.Provider>
  );
};

DatabytesPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default DatabytesPage;
