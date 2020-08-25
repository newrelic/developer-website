import cx from 'classnames';
import SEO from '../components/Seo';
import { Button, Video } from '@newrelic/gatsby-theme-newrelic';
import PageLayout from '../components/PageLayout';
import ExternalLink from '../components/ExternalLink';
import FeatherIcon from '../components/FeatherIcon';
import nerdDays from '../images/nerd-days/nerd-days.png';
import styles from './nerd-days.module.scss'

const EventLandingPage = () => {
  return (
    <>
      <SEO />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="Developer Events" />
        <PageLayout.Content>
          <section className={cx(styles.section, styles.twoColumn)}>
            <div>
              <h3>
                Developer Events <br />
              </h3>
              <p>
                There are a lot of developer events out there, so we've curated a list of events we're hosting or sponsoring that are dedicated to developers, engineers, problem solvers, and builders like you.<br /><br />

                <strong>UPCOMING EVENTS</strong><br />
                Nerd Days 1.0: Return of the Data Nerd<br />
                Nerd Days is a FREE engineering conference that kicks off October 13 (Dates vary by region). Focused on building more perfect software, our goal is to spend less time looking at slides that tell you what software can do and more time on getting your hands on the software to solve problems efficiently.
              </p>
              <Button
                as={ExternalLink}
                variant={Button.VARIANT.PRIMARY}
                href="https://developer.newrelic.com/nerd-days/"
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
              alt="Nerd Days 1.0: Return of the Data Nerd"
            />
          </section>
          <section className={styles.section}>
          <h2>Upcoming Events</h2>
          </section>
          <section className={cx(styles.section, styles.assetTable)}>
            <div className={styles.point}>
              <h4>KubeCon and CloudNativeCon North America 2020</h4>
              <p>November 17-20</p>
              <p>The Cloud Native Computing Foundation’s flagship conference gathers adopters and technologists from leading open source and cloud native communities.</p>
            </div>
            <h2>Past Events</h2>
          </section>
          <section className={cx(styles.section, styles.assetTable)}>
            <div className={styles.point}>
              <h4>KubeCon and CloudNativeCon Europe 2020</h4>
              <p>August 17 – 20</p>
              <p>The Cloud Native Computing Foundation’s flagship conference gathers adopters and technologists from leading open source and cloud native communities.</p>
            </div>
          </section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

export default EventLandingPage;
