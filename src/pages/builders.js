import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import DevSiteSeo from '../components/DevSiteSeo';
import { Button, Link } from '@newrelic/gatsby-theme-newrelic';
import PageLayout from '../components/PageLayout';
import ExternalLink from '../components/ExternalLink';
import FeatherIcon from '../components/FeatherIcon';
import devReliquary from '../images/builders/relicans.png';
import onlineTeach from '../images/builders/remote-unsplash.jpg';
import * as styles from './builders.module.scss';

const DeveloperChampionPage = ({ location }) => {
  return (
    <>
      <DevSiteSeo location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="New Relic Builders" />
        <PageLayout.Content>
          <section className={cx(styles.section, styles.twoColumn)}>
            <div>
              <p>
                {' '}
                Our goal with the New Relic Community, also known as{' '}
                <a href="https://www.therelicans.com/">The Relicans</a>, is to
                make everyone feel welcome regardless of their background or
                current ability, recognize everyone's individuality and help
                them to find a way to learn that fits their needs, award members
                that are active and helpful and be a safe space where everyone
                is comfortable to teach, learn and grow, The New Relic Builders
                is an important piece to make sure these goals are reached.
              </p>

              <hr />

              <p>
                <strong>
                  The New Relic Builders is vital to achieve these goals.
                </strong>{' '}
              </p>

              <h3>What is a Builder?</h3>

              <p>
                {' '}
                Builders are special members of our community and will be there
                to welcome new members, helping them feel at home, guide people
                in their tech journeys with their experience and advice, and
                share with the community what they know, helping everyone around
                to level up.
              </p>
              <p>
                New Relic Builders are developers who want to be part of this
                community and share our goals, have expertise to educate other
                developers, and are looking for a platform to be heard and make
                a difference. up.
              </p>
              <Button
                as={ExternalLink}
                variant={Button.VARIANT.PRIMARY}
                href="https://airtable.com/shrCWEQW8uv81Vxny"
              >
                Apply to be a Builder
                <FeatherIcon
                  className={styles.externalLinkIcon}
                  name="external-link"
                />
              </Button>
            </div>
            <img
              className={styles.img}
              src={devReliquary}
              alt="developer champion header"
            />
          </section>
          <section className={styles.section}>
            <h2>Why be a New Relic Builder?</h2>
            <p>
              Being a New Relic builder means that you are a part of a group
              that cares about their community and wants to help them to grow
              and thrive. You like to build things, learn and share your
              expertise with others. But the most important is that you CARE
              about the impact you can make on your community.
            </p>
            <strong>Here is what you get:</strong>
          </section>
          <section className={cx(styles.section, styles.championProgram)}>
            <div className={styles.point}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#006c75"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-edit-3"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>

              <h4>Learn the Craft</h4>
              <p>
                You will develop the art of content production for the tech
                community by working alongside great content creators. You will
                be mentored by a Relican to level up your content creation
                skills.
              </p>
            </div>
            <div className={styles.point}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#006c75"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-trending-up"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              <h4>Build your personal Brand</h4>
              <p>
                Gain exposure to build and grow your personal brand, while
                working on your portfolio and making connections with great
                people.
              </p>
            </div>
            <div className={styles.point}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#006c75"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-users"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>

              <h4>Mentor Others</h4>
              <p>
                There is no better way to learn than teaching! You will have the
                chance to further develop your skills and give back to a
                supportive community, helping others to grow.
              </p>
            </div>
            <Button
              as={ExternalLink}
              className={styles.nominateButton}
              href="https://airtable.com/shrCWEQW8uv81Vxny"
              variant={Button.VARIANT.PRIMARY}
            >
              I want in!{' '}
              <FeatherIcon
                name="external-link"
                className={styles.externalLinkIcon}
              />
            </Button>
          </section>
          <section className={cx(styles.section, styles.twoColumn)}>
            <div>
              <h2>What are the Builder's responsibilities?</h2>
              <p>
                As a New Relic Builder, we will expect you to create content to
                meet the program's needs, and you will get the help and guidance
                from our DevRel team on that.{' '}
              </p>
              <p>
                Be ready to mentor other members of our community, both in their
                technical growth as well as content production.{' '}
              </p>
              <p>
                Last but not least, you will be expected to to make and uphold
                commitments related to the program.
              </p>

              <img
                className={styles.img}
                src={onlineTeach}
                alt="uptime everything header"
              />
            </div>
            <div>
              <h2>What are the Requisites?</h2>
              <small>
                If you to not check every box bus still believe you would be a
                great Builder, apply anyway!{' '}
              </small>
              <hr />

              <ul>
                <h4>The Must haves:</h4>
                <li>Be comfortable creating content in English,</li>
                <li>Have expertise in your tech stack of choice,</li>
                <li>
                  Track record of producing engaging developer education
                  materials,
                </li>
                <li>
                  No history of community conflict, CoC violations, or other
                  problematic behavior,
                </li>
                <li>Commitment to the values of the program.</li>
              </ul>
              <hr />
              <ul>
                <h4>It is nice to have:</h4>
                <li>
                  Be an active member of{' '}
                  <Link to="https://therelicans.com">The Relicans</Link>, our
                  online community{' '}
                </li>
                <li>Have experience using New Relic products.</li>
              </ul>
              <hr />
              <ul>
                <h4>You get extra brownie points if:</h4>
                <li>You have an existing audience</li>
                <li>Are well known in other tech communities</li>
              </ul>
              <hr />
              <Button
                as={ExternalLink}
                variant={Button.VARIANT.PRIMARY}
                href="https://airtable.com/shrCWEQW8uv81Vxny"
              >
                APPLY NOW!
                <FeatherIcon
                  className={styles.externalLinkIcon}
                  name="external-link"
                />
              </Button>
            </div>
          </section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

DeveloperChampionPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default DeveloperChampionPage;
