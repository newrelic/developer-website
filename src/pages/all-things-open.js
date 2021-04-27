import React from 'react';
import cx from 'classnames';
import DevSiteSeo from '../components/DevSiteSeo';
import PropTypes from 'prop-types';
import { Button, Video } from '@newrelic/gatsby-theme-newrelic';
import PageLayout from '../components/PageLayout';
import ExternalLink from '../components/ExternalLink';
import FeatherIcon from '../components/FeatherIcon';
import allthingsopen from '../images/all-things-open/allthingsopen.png';
import gavinjohnson from '../images/all-things-open/gavin-johnson.jpg';
import michaellang from '../images/all-things-open/michael-lang.jpg';
import * as styles from './all-things-open.module.scss';

const allThingsOpenPage = ({ location }) => {
  return (
    <>
      <DevSiteSeo location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="All Things Open 2020" />
        <PageLayout.Content>
          <section className={cx(styles.section, styles.twoColumn)}>
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
                  className={styles.externalLinkIcon}
                  name="external-link"
                />
              </Button>
            </div>
            <img
              className={styles.img}
              src={allthingsopen}
              alt="All Things Open 2020"
            />
          </section>
          <section className={styles.section}>
            <h2>Visit us in the virtual expo hall</h2>
            <hr />
          </section>
          <section className={cx(styles.section, styles.assetTable)}>
            <div>
              <img
                className={styles.headshot}
                src={gavinjohnson}
                alt="Gavin Johnson"
              />
            </div>
            <div className={styles.point}>
              <h4>How New Relic Went Open Source: Code & Culture</h4>
              <p>Tues, Oct 20, 2020</p>
              <p>Principal Product Marketing Manager</p>
              <p>Gavin Johnson</p>
            </div>
          </section>
          <h2>Explore resources</h2>
          <section className={cx(styles.section, styles.assetTable)}>
            <div>
              <img
                className={styles.headshot}
                src={michaellang}
                alt="Michael Lang"
              />
            </div>
            <div className={styles.point}>
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
          <section className={cx(styles.section, styles.assetTable)}>
            <div className={styles.point}>
              <h4>How to use the Kubernetes cluster explorer</h4>
              <Video id="qfv8ud2pai" type="wistia" />
            </div>
            <div className={styles.point}>
              <h4>What is OpenTelemetry?</h4>
              <Video id="yY6hHhiDths" type="youtube" />
            </div>
            <div className={styles.point}>
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
