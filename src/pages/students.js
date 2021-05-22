import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import DevSiteSeo from '../components/DevSiteSeo';
import { Surface, Button, Link } from '@newrelic/gatsby-theme-newrelic';
import PageLayout from '../components/PageLayout';
import ExternalLink from '../components/ExternalLink';
import FeatherIcon from '../components/FeatherIcon';
import Video from '../components/Video';
import studentPackLogo from '../images/students/studentPack.png';
import * as styles from './students.module.scss';

const StudentsPage = ({ location }) => {
  return (
    <>
      <DevSiteSeo location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="New Relic Student Edition" />
        <PageLayout.Content>
          <section className={cx(styles.section, styles.twoColumn)}>
            <div>
              <img
                src={studentPackLogo}
                alt="New Relic Student Edition in GitHub Student Developer Pack"
              />
              <br />
              <br />
              <p>
                Traditional computer sciences are great, but hands-on experience
                with modern platforms positions you as a more competitive
                candidate. The New Relic Student Edition gives you access to the
                same industry tools that observability professionals use -- for
                free.
              </p>
              <p>
                Whether you’re just getting started with your engineering
                career, looking to pivot, or an educator ready to share the
                value of modern technology - we’ve got you covered. From access
                to the best-in-class observability platform, training, and
                certifications, you’ll have access to everything you need to
                compete in the market.
              </p>
              <p>
                We are excited to announce the New Relic Student Edition as an
                exclusive offer in the GitHub Student Developer Pack. GitHub created the
                Student Developer Pack to help students ship software like a pro, and with
                New Relic, the Student Edition adds to making that possible.
              </p>
              <p>
                To get access to the Student Edition,{' '}
                <a href="/">sign up for a free account</a> and verify your
                student status using the GitHub Student Developer Pack
              </p>
            </div>
            <Video id="irf10ez4h1" type="wistia" />
          </section>
          <section className={cx(styles.section, styles.stepsSection)}>
            <h2>Access the New Relic Student Edition</h2>
            <div className={styles.stepsListing}>
              <div className={styles.signupSteps}>
                <Surface
                  base={Surface.BASE.SECONDARY}
                  className={styles.signupStep}
                >
                  <div className={styles.stepNumber}>1</div>
                  <h3 className={styles.stepHeader}>
                    Signup for{' '}
                    <em>
                      <strong>FREE</strong>
                    </em>{' '}
                    Account
                  </h3>
                  <p className={styles.stepDetail}>
                    To access the Student Edition you will need a New Relic
                    free-tier account. After you will need to verify your
                    student status.
                  </p>

                  <Button
                    to="/"
                    as={Link}
                    variant={Button.VARIANT.PRIMARY}
                    className={styles.stepButton}
                  >
                    Signup for a free account
                  </Button>
                </Surface>
                <Surface
                  base={Surface.BASE.SECONDARY}
                  className={styles.signupStep}
                >
                  <div className={styles.stepNumber}>2</div>
                  <h3 className={styles.stepHeader}>
                    Verify Your Student Status
                  </h3>
                  <p className={styles.stepDetail}>
                    The Student Edition is offered through the <a href="https://education.GitHub.com/benefits">GitHub Student
                    Developer Pack</a>. If you don't have access to GitHub Students, and
                    verify your account.
                  </p>

                  <Button
                    to="/"
                    as={Link}
                    variant={Button.VARIANT.SECONDARY}
                    className={styles.stepButton}
                  >
                    GitHub Student Developer Pack
                  </Button>
                </Surface>
                <Surface
                  base={Surface.BASE.SECONDARY}
                  className={styles.signupStep}
                >
                  <div className={styles.stepNumber}>3</div>
                  <h3 className={styles.stepHeader}>Enjoy Using New Relic</h3>
                  <p className={styles.stepDetail}>
                    After your status is verified. Your Student Edition account
                    will be created giving you 3 full users and 500GB of data
                    ingest.
                  </p>

                  <Button
                    to="/"
                    as={Link}
                    variant={Button.VARIANT.SECONDARY}
                    className={styles.stepButton}
                  >
                    Access New Relic One
                  </Button>
                </Surface>
              </div>
            </div>
          </section>
          <section className={styles.offerSection}>
            <h2>What does the Student Edition offer?</h2>
            <p>
              There's no substitute for hands-on experience. That’s why we
              designed the New Relic Student Edition,
              <br /> which gives students and educators full access to New Relic
              One, including:
            </p>
          </section>
          <section className={cx(styles.section, styles.championProgram)}>
            <div className={styles.point}>
              <FeatherIcon
                className={styles.pointIcon}
                name="users"
                size="4rem"
              />
              <h4>Three Full Users</h4>
              <p>
                Work with your friends and classmates like a real-world
                production team
              </p>
            </div>
            <div className={styles.point}>
              <FeatherIcon
                className={styles.pointIcon}
                name="database"
                size="4rem"
              />
              <h4>500 GB/month of Data Ingest</h4>
              <p>
                Collect, analyze, and alert on all your metrics, events, logs,
                and traces from any source
              </p>
            </div>
            <div className={styles.point}>
              <FeatherIcon
                className={styles.pointIcon}
                name="cpu"
                size="4rem"
              />
              <h4>Free Tier AI</h4>
              <p>
                Instantly detect, diagnose, and resolve issues before they
                become a problem
              </p>
            </div>
            <Button
              as={ExternalLink}
              className={styles.nominateButton}
              href="https://forms.gle/Zkdub5e1x4MNqSKW9"
              variant={Button.VARIANT.PRIMARY}
            >
              Sign up for a free account{' '}
            </Button>
          </section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

StudentsPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default StudentsPage;
