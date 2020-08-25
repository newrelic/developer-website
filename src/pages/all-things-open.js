import React from 'react';
import cx from 'classnames';
import SEO from '../components/Seo';
import { Button, Video } from '@newrelic/gatsby-theme-newrelic';
import PageLayout from '../components/PageLayout';
import ExternalLink from '../components/ExternalLink';
import FeatherIcon from '../components/FeatherIcon';
import Important from '../components/Important';
import allthingsopen from '../images/all-things-open/allthingsopen.png';

const allthingsopenpage = () => {
  return (
    <>
      <SEO />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="All Things Open 2020" />
        <PageLayout.Content>
          <section className={cx(styles.section, styles.twoColumn)}>
            <div>
              <h3>
                Join New Relic at<br />
                All Things Open on October 19-20, 2020
              </h3>
              <p>
                All Things Open is a technlogy conference, focusing on the tools, processes, and people, making open source possible. 
                New Relic is a proud <b>Gold</b> sponsor because we support working in and engaging with the open source community.
                <br><br>         
                <b><i>We are committed to open standards, open source instrumentation, and the open communities that support them.</b></i>
                <br>
                We’ve open sourced all of our instrumentation agents, integrations, custom visualizations, and our telemetry SDK
                We’ve aligned our products with CNCF’s OpenTelemetry and Prometheus/OpenMetrics standards as well as supporting other open sources of information like Telegraf, Kamon, Micrometer, and Dropwizard and popular open source tools like Grafana 
                Engage engineers where they are, in the communities they already belong to, making it easier for engineers to access New Relic expertise and for that expertise to be shared with the community
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
            <h2>Attend one of our lightning talks</h2>
            <Important>
              Attend one of our sessions and visit us in the virtual expo hall.
            </Important>
          </section>
          <section className={cx(styles.section, styles.assetTable)}>
            <div className={styles.point}>
              <h4>How New Relic Went Open Source: Code & Culture</h4>
              <p>Tues, Oct 30, 2020</p>
              <p>Gavin Johsnon</p>
            </div>
          <section className={styles.section}>
            <h2>Want some action now? Check out the following videos!</h2>
          </section>
          <section className={cx(styles.section, styles.assetTable)}>
            <div className={styles.point}>
              <h4>How to use the Kubernetes cluster explorer</h4>
              <Video
                id="qfv8ud2pai"
                type="wistia"
                className={styles.videoGrid}
              />
            </div>
            <div className={styles.point}>
              <h4>What is OpenTelemetry?</h4>
              <Video
                id="yY6hHhiDths"
                type="youtube"
                className={styles.videoGrid}
              />
            </div>
            <div className={styles.point}>
              <h4>Connecting Prometheus and Grafana to New Relic</h4>
              <Video
                id="AvqBp2joY5Q"
                type="youtube"
                className={styles.videoGrid}
              />
            </div>
          </section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

export default allthingsopenPage;
