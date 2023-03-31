import React from 'react';
import PropTypes from 'prop-types';
import DevSiteSeo from '../components/DevSiteSeo';
import { Button, Callout, Video } from '@newrelic/gatsby-theme-newrelic';
import PageLayout from '../components/PageLayout';
import ExternalLink from '../components/ExternalLink';
import FeatherIcon from '../components/FeatherIcon';
import kubeconHeader from '../images/kubecon-europe-2020/kubecon-europe-2020.jpg';
import { css } from '@emotion/react';

const KubeConPage = ({ location }) => {
  const pointStyles = css`
    text-align: center;
    width: 100%;
    h4 {
      min-height: 3rem;
    }

    @media (max-width: 760px) {
      margin-bottom: 40px;
    }
  `;
  return (
    <>
      <DevSiteSeo location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="KubeCon and CloudNativeCon Europe 2020" />
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
              <h3>
                New Relic welcomes you at <br />
                Virtual Kubecon and CloudNativeCon Europe 2020!
              </h3>
              <p>
                Learn more about the New Relic One platform, the only
                observability platform that provides open, connected and
                programmable observability for cloud-native environments. Join
                us to dive into the New Relic One platform and our Kubernetes
                cluster explorer.
              </p>
              <Button
                as={ExternalLink}
                variant={Button.VARIANT.PRIMARY}
                href="https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/?utm_campaign=FY21-Q2-DEV-K8-EMEA-ELEV-OS-REG&utm_medium=OS&utm_source=ELEV&utm_content=REG&fiscal_year=FY21&quarter=Q2&gtm=DEV&program=K8&geo=EMEA"
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
              src={kubeconHeader}
              alt="KubeCon and CloudNativeCon Europe 2020"
            />
          </section>
          <section
            css={css`
              &:not(:last-child) {
                margin-bottom: 4rem;
              }
            `}
          >
            <h2>Attend one of our lightning talks</h2>
            <Callout variant="important">
              Go to the virtual expo tab, and find New Relic in Silver Hall B to
              attend a lightning talk.
            </Callout>
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
            <div css={pointStyles}>
              <h4>We handle Prometheus, you keep Grafana</h4>
              <p>Mon Aug 17 @ 14:35 CEST</p>
              <p>Samuel Vandamme</p>
            </div>
            <div css={pointStyles}>
              <h4>How to use and customize Helm charts</h4>
              <p>Mon Aug 17 @ 16:25 CEST</p>
              <p>Douglas Camata</p>
            </div>
            <div css={pointStyles}>
              <h4>Kubernetes observability with context</h4>
              <p>Tue Aug 18 @ 15:05 CEST</p>
              <p>Stijn Polfliet</p>
            </div>
            <div css={pointStyles}>
              <h4>What is OpenTelemetry and how to get started?</h4>
              <p>Tue Aug 18 @ 17:15 CEST</p>
              <p>Lavanya Chockaligam</p>
            </div>
            <div css={pointStyles}>
              <h4>How to use and customize Helm charts</h4>
              <p>Wed Aug 19 @ 15:05 CEST</p>
              <p>Douglas Camata</p>
            </div>
            <div css={pointStyles}>
              <h4>OpenTelemetry Architecture</h4>
              <p>Wed Aug 19 @ 16:25 CEST</p>
              <p>John Watson</p>
            </div>
            <div css={pointStyles}>
              <h4>Kubernetes in the wild: best practices</h4>
              <p>Thu Aug 20 @ 15:05 CEST</p>
              <p>Martin Fuentes</p>
            </div>
            <div css={pointStyles}>
              <h4>Kubernetes observability with context</h4>
              <p>Thu Aug 20 @ 16:50 CEST</p>
              <p>Stijn Polfliet</p>
            </div>
          </section>
          <section
            css={css`
              &:not(:last-child) {
                margin-bottom: 4rem;
              }
            `}
          >
            <h2>Want some action now? Check out the following videos!</h2>
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
            <div css={pointStyles}>
              <h4>How to use the Kubernetes cluster explorer</h4>
              <Video id="qfv8ud2pai" type="wistia" />
            </div>
            <div css={pointStyles}>
              <h4>What is OpenTelemetry?</h4>
              <Video id="yY6hHhiDths" type="youtube" />
            </div>
            <div css={pointStyles}>
              <h4>Connecting Prometheus and Grafana to New Relic</h4>
              <Video id="AvqBp2joY5Q" type="youtube" />
            </div>
          </section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

KubeConPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default KubeConPage;
