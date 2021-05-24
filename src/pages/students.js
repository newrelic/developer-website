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
                same industry tools that observability professionals use--for
                free.
              </p>
              <p>
                Whether you’re just getting started with your engineering
                journey, looking to pivot into a career in tech, or an educator
                ready to share the value of modern technology, we’ve got you
                covered. With our training, certifications, and best-in-class
                observability platform you'll have everything you need to
                compete in the market.
              </p>
              <p>
                We're excited to announce the New Relic Student Edition as an
                exclusive offer in the GitHub Student Developer Pack. GitHub
                created the Student Developer Pack to help students ship
                software like pros, and the New Relic Student Edition
                contributes to that goal.
              </p>
              <p>
                To access the Student Edition,{' '}
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
                    To access the Student Edition, create a free New Relic
                    account. After that, verify your student status.
                  </p>

                  <Button
                    to="/"
                    as={Link}
                    variant={Button.VARIANT.PRIMARY}
                    className={styles.stepButton}
                  >
                    Sign up for a free account
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
                    The Student Edition is offered through the{' '}
                    <a href="https://education.GitHub.com/benefits">
                      GitHub Student Developer Pack
                    </a>
                    . If you don't have access to GitHub Students, sign up and
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
                    After your status is verified, your account is upgraded to
                    the Student Edition, giving you three full users and 500GB
                    of data ingest.
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
              <h4>Three full users</h4>
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
              <h4>500 GB/month of data ingest</h4>
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
              <h4>Free-tier AI</h4>
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
          <section className={styles.faqSection}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.group}>
              <p className={styles.question}>
                How do I access New Relic Student Edition?
              </p>
              <div className={styles.answer}>
                <p>
                  New Relic offers the Student Edition exclusively through the
                  GitHub Student Pack. To verify your account's eligibility,
                  authorize your GitHub account.
                </p>
                <p>
                  Learn more about GitHub Education if you don't have GitHub
                  Student Developer Pack yet.
                </p>
                <ul>
                  <li>
                    Sign up for Student Edition. You will be prompted to create
                    or log in to your GitHub account
                  </li>
                  <li>
                    Apply for the GitHub Student Developer Pack, which requires
                    proof of enrollment in an accredited institution
                  </li>
                  <li>
                    Once you’re verified through GitHub, sign in to the Student
                    Edition with the token emailed to you to get started{' '}
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.group}>
              <p className={styles.question}>Can I purchase Student Edition?</p>
              <p className={styles.answer}>
                New Relic offers the Student Edition for FREE to students and
                educators.
              </p>
            </div>
            <div className={styles.group}>
              <p className={styles.question}>
                Can I share my Student Edition with friends?
              </p>
              <p className={styles.answer}>
                The student edition comes with three full users. Your friends
                and classmates are also welcome to sign up for their own free
                account.
              </p>
            </div>
            <div className={styles.group}>
              <p className={styles.question}>
                Where can I check the status of my student verification with
                GitHub?
              </p>
              <p className={styles.answer}>
                In your GitHub account settings, visit{' '}
                <strong>Applications > Authorized OAuth Apps</strong> to check
                whether you have authorized the New Relic OAuth app. If you
                granted this application access to your GitHub account, you
                should hear back from GitHub as soon as they have verified your
                student status.
              </p>
            </div>
            <div className={styles.group}>
              <p className={styles.question}>
                What if I already have a New Relic free account?
              </p>
              <p className={styles.answer}>
                No problem! Just upgrade your account to the Student Edition. In
                the main menu, look for Student Edition and follow the
                instructions.
              </p>
            </div>
            <div className={styles.group}>
              <p className={styles.question}>
                What is the difference between the Student Edition and New Relic
                free account?
              </p>
              <div className={styles.answer}>
                <p>Check out this quick comparison chart</p>
                <table className={styles.chart}>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Student Edition</th>
                      <th>Free Tier</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Free Full Users</td>
                      <td>3 users</td>
                      <td>1 user</td>
                    </tr>
                    <tr>
                      <td>Free Data</td>
                      <td>500 GB/mo</td>
                      <td>100 GB/mo</td>
                    </tr>
                    <tr>
                      <td>Production Use</td>
                      <td>No</td>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.group}>
              <p className={styles.question}>
                I’m having trouble verifying my student status with GitHub.
              </p>
              <div className={styles.answer}>
                <p>
                  Troubleshoot any GitHub verification related issues{' '}
                  <a href="https://help.github.com/en/github/teaching-and-learning-with-github-education/why-wasnt-my-application-for-a-student-developer-pack-approved">
                    here,
                  </a>{' '}
                  <a href="https://support.github.com/contact">
                    or contact GitHub directly.
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.group}>
              <p className={styles.question}>Does my Student Edition expire?</p>
              <p className={styles.answer}>
                You will have access to the Student Edition for as long as
                you’re an active student in the GitHub Student pack.
              </p>
            </div>
            <div className={styles.group}>
              <p className={styles.question}>
                Can I upgrade my Student Edition account to a paid account?
              </p>
              <p className={styles.answer}>
                Yes! Just enter your information and credit card details into
                the ‘Manage Plan’ screen, and you’ll convert your account to a
                paid account!
                <br /> (Note: Depending on your usage monthly charges may apply)
              </p>
            </div>
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
