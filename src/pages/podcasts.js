import PageLayout from '../components/PageLayout';
import React from 'react';
import PropTypes from 'prop-types';
import DevSiteSeo from '../components/DevSiteSeo';
import podcastsHeader from '../images/podcasts/podcasts.jpg';
import { css } from '@emotion/react';

const PodcastsPage = ({ location }) => {
  const podcastsMeta = [
    {
      id: '1677670',
      title: 'Launchies',
    },
    {
      id: '1677727',
      title: 'Polyglot',
    },
  ];

  return (
    <>
      <DevSiteSeo location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="New Relic Podcasts" />
        <PageLayout.Content>
          <section
            css={css`
              &:not(:last-child) {
                margin-bottom: 4rem;
              }

              display: grid;
              grid-gap: 2rem;
              grid-template-columns: repeat(2, calc(50% - 1rem));

              @media (max-width: 760px) {
                grid-template-columns: 1fr;
              }
            `}
          >
            <div
              css={css`
                @media (max-width: 760px) {
                  order: 1;
                }
              `}
            >
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
              css={css`
                width: 100%;
                max-width: 350px;
                margin: 0 auto;

                @media (max-width: 760px) {
                  order: 0;
                }
              `}
              src={podcastsHeader}
              alt="podcasts header"
            />
          </section>

          {podcastsMeta.map((podcastMeta) => {
            return (
              <section
                css={css`
                  &:not(:last-child) {
                    margin-bottom: 4rem;
                  }
                  iframe {
                    width: 100%;
                    height: 421px;
                    border: none;
                  }
                `}
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
