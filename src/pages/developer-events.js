import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import DevSiteSeo from '../components/DevSiteSeo';
import PageLayout from '../components/PageLayout';
import nerdDays from '../images/nerd-days/nerd-days.png';

const EventLandingPage = ({ location }) => {
  return (
    <>
      <DevSiteSeo location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="Developer events" />
        <PageLayout.Content>
          <section
            css={css`
              @media screen and (max-width: 1180px) {
                grid-template-columns: 1fr;
              }
            `}
          >
            <div>
              <p
                className="intro-text"
                css={css`
                  margin-bottom: 2rem;
                `}
              >
                There are a lot of developer events out there, so we will be
                curated a list of events we're hosting or sponsoring that are
                dedicated to developers, engineers, problem solvers, and
                builders like you. Currently we have no events planned, but
                below you can find some of our past events.
              </p>
            </div>
            <img
              src={nerdDays}
              alt="Nerd Days 1.0: Return of the Data Nerd"
              css={css`
                width: 100%;
                margin: 0 auto;
              `}
            />
          </section>
          <h2>Past events</h2>
          <section>
            <div
              css={css`
                margin-bottom: 2rem;
              `}
            >
              <h3>Nerd Days 1.0: Return of the Data Nerd</h3>
              <p>
                <strong>US:</strong> October 13, 2020
                <br />
                <strong>EMEA:</strong> November 10, 2020
                <br />
                <strong>APJ:</strong> October 22, 2020
                <br />
              </p>
              <p>
                Nerd Days is a FREE engineering conference that kicks off
                October 13 (Dates vary by region). Focused on building more
                perfect software, our goal is to spend less time looking at
                slides that tell you what software can do and more time on
                getting your hands on the software to solve problems
                efficiently.
              </p>
            </div>
            <div>
              <h3>KubeCon and CloudNativeCon North America 2020</h3>
              <p>November 17-20</p>
              <p>
                The Cloud Native Computing Foundation’s flagship conference
                gathers adopters and technologists from leading open source and
                cloud native communities.
              </p>
            </div>
            <div>
              <h3>KubeCon and CloudNativeCon Europe 2020</h3>
              <p>August 17 – 20</p>
              <p>
                The Cloud Native Computing Foundation’s flagship conference
                gathers adopters and technologists from leading open source and
                cloud native communities.
              </p>
            </div>
          </section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

EventLandingPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default EventLandingPage;
