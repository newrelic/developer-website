import React from 'react';
import DevSiteSeo from '../components/DevSiteSeo';
import PropTypes from 'prop-types';
import { Button, Video } from '@newrelic/gatsby-theme-newrelic';
import PageLayout from '../components/PageLayout';
import ExternalLink from '../components/ExternalLink';
import FeatherIcon from '../components/FeatherIcon';
import allthingsopen from '../images/all-things-open/allthingsopen.png';
import gavinjohnson from '../images/all-things-open/gavin-johnson.jpg';
import michaellang from '../images/all-things-open/michael-lang.jpg';
import { css } from '@emotion/react';

const allThingsOpenPage = ({ location }) => {
  return (
    <>
      <DevSiteSeo location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="All Things Open 2020" />
        <PageLayout.Content>
          <section
            css={css`
              &:not(:last-child) {
                margin-bottom: 4rem;
              }
              display: grid;
              grid-template-columns: repeat(2, calc(50% - 1rem));
              grid-gap: 2rem;

              @media (max-width: 760px) {
                grid-template-columns: 1fr;
              }
            `}
          >
            <div>
              <h3>Join New Relic at All Things Open on October 19-20, 2020</h3>

              <p>
                All Things Open is a technology conference, focusing on the
                tools, processes, and people, making open source possible. New
                Relic is a proud <b>Gold</b> sponsor because we support working
                in and engaging with the open source community.
              </p>
              <p>
                <b>
                  We are committed to open standards, open source
                  instrumentation, and the open communities that support them.
                </b>
              </p>

              <p>
                We’ve open sourced all of our instrumentation agents,
                integrations, custom visualizations, and our telemetry SDK We’ve
                aligned our products with CNCF’s OpenTelemetry and
                Prometheus/OpenMetrics standards as well as supporting other
                open sources of information like Telegraf, Kamon, Micrometer,
                and Dropwizard and popular open source tools like Grafana.
              </p>
              <p>
                New Relic engage's engineers where they are, in the communities
                they already belong to, making it easier for engineers to access
                New Relic expertise and for that expertise to be shared with the
                community
              </p>

              <Button
                as={ExternalLink}
                variant={Button.VARIANT.PRIMARY}
                href="https://2020.allthingsopen.org/register/"
              >
                Register here
                <FeatherIcon
                  css={css`
                    margin-left: 0.5rem;
                  `}
                  name="external-link"
                />
              </Button>
            </div>
            <img
              css={css`
                width: 100%;
              `}
              src={allthingsopen}
              alt="All Things Open 2020"
            />
          </section>
          <section
            css={css`
              &:not(:last-child) {
                margin-bottom: 4rem;
              }
            `}
          >
            <h2>Visit us in the virtual expo hall</h2>
            <hr />
          </section>
          <section
            css={css`
              &:not(:last-child) {
                margin-bottom: 4rem;
              }
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 2rem;

              @media (max-width: 760px) {
                display: block;
                text-align: center;
              }
            `}
          >
            <div>
              <img
                css={css`
                  height: auto;
                  width: 75%;
                `}
                src={gavinjohnson}
                alt="Gavin Johnson"
              />
            </div>
            <div
              css={css`
                text-align: left;
                width: 100%;
                h4 {
                  min-height: 3rem;
                }

                @media (max-width: 760px) {
                  margin-bottom: 40px;
                }
              `}
            >
              <h4>How New Relic Went Open Source: Code & Culture</h4>
              <p>Tues, Oct 20, 2020</p>
              <p>Principal Product Marketing Manager</p>
              <p>Gavin Johnson</p>
            </div>
          </section>
          <h2>Explore resources</h2>
          <section
            css={css`
              &:not(:last-child) {
                margin-bottom: 4rem;
              }
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 2rem;

              @media (max-width: 760px) {
                display: block;
                text-align: center;
              }
            `}
          >
            <div>
              <img
                css={css`
                  width: 75%;
                `}
                src={michaellang}
                alt="Michael Lang"
              />
            </div>
            <div
              css={css`
                text-align: left;
                width: 100%;
                h4 {
                  min-height: 3rem;
                }

                @media (max-width: 760px) {
                  margin-bottom: 40px;
                }
              `}
            >
              <h4>
                Ruby Served with a side of JavaScript: Migrating to Github
                Actions for CI
              </h4>
              <p>Tues, Oct 20, 2020</p>
              <p>Senior Software Engineer</p>
              <p>Michael Lang</p>
            </div>
          </section>
          <h2>Explore resources</h2>
          <hr />
          <section
            css={css`
              &:not(:last-child) {
                margin-bottom: 4rem;
              }
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 2rem;

              @media (max-width: 760px) {
                display: block;
                text-align: center;
              }
            `}
          >
            <div
              css={css`
                text-align: left;
                width: 100%;
                h4 {
                  min-height: 3rem;
                }

                @media (max-width: 760px) {
                  margin-bottom: 40px;
                }
              `}
            >
              <h4>How to use the Kubernetes cluster explorer</h4>
              <Video id="qfv8ud2pai" type="wistia" />
            </div>
            <div
              css={css`
                text-align: left;
                width: 100%;
                h4 {
                  min-height: 3rem;
                }

                @media (max-width: 760px) {
                  margin-bottom: 40px;
                }
              `}
            >
              <h4>What is OpenTelemetry?</h4>
              <Video id="yY6hHhiDths" type="youtube" />
            </div>
            <div
              css={css`
                text-align: left;
                width: 100%;
                h4 {
                  min-height: 3rem;
                }

                @media (max-width: 760px) {
                  margin-bottom: 40px;
                }
              `}
            >
              <h4>Connecting Prometheus and Grafana to New Relic</h4>
              <Video id="AvqBp2joY5Q" type="youtube" />
            </div>
          </section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

allThingsOpenPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default allThingsOpenPage;
