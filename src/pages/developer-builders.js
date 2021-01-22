import React from 'react';
import cx from 'classnames';
import SEO from '../components/Seo';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import PageLayout from '../components/PageLayout';
import ExternalLink from '../components/ExternalLink';
import FeatherIcon from '../components/FeatherIcon';
import devChampionHeader from '../images/developer-champion/developer-champions.jpg';
import uptimeEverythingHeader from '../images/developer-champion/uptime-everything-header-image.jpg';
import styles from './developer-builders.module.scss';

const DeveloperChampionPage = () => {
  return (
    <>
      <SEO />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="New Relic Builders" />
        <PageLayout.Content>
          <section className={cx(styles.section, styles.twoColumn)}>
            <div>
              <p>
                Builder is a simple yet meaningful word. Building things is on a
                developer’s nature independently of their tech stack and
                experience level.{' '}
              </p>
              <p>
                {' '}
                The Reliquary(link), our developer community, brings together
                experienced developers/DevOps people with those who are new to
                software development.
              </p>
              <p> The Reliquary’s goal is to be a long term home that:</p>
              <ul>
                <li>
                  Delivers a warm welcome to everyone, regardless of their
                  background or current ability.
                </li>
                <li>
                  Recognizes that each person is on an individual learning path.{' '}
                </li>
                <li>
                  Helps everyone to find the right way to meet their personal
                  learning goals.{' '}
                </li>
                <li>Respects each person’s potential to contribute. </li>
                <li>
                  Uses awards and recognition to help people feel a sense of
                  achievement, rather than to gate keep.{' '}
                </li>
                <li>
                  Combines warmth and friendliness with being technically
                  correct and being friendly.
                </li>
              </ul>
              <p>The New Relic Builders is vital to achieve these goals. </p>
              <p>
                {' '}
                These special members of our community will be there to welcome
                new members, helping them feel at home, guide people in their
                tech journeys with their experience and advice, and share with
                the community what they know, helping everyone around to level
                up.
              </p>
              <p>
                Builders are developers who want to be part of this community
                and share our goals, have expertise to educate other developers,
                and are looking for a platform to be heard and make a
                difference.
              </p>

              <Button
                as={ExternalLink}
                variant={Button.VARIANT.PRIMARY}
                href="https://forms.gle/Zkdub5e1x4MNqSKW9"
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
              src={devChampionHeader}
              alt="developer champion header"
            />
          </section>
          <section className={styles.section}>
            <h2>Why be a New Relic Builder?</h2>
            <p>
              Being a New Relic builder means that you are a part of a group
              that cares about their community and wants to help them to grow
              and thrive. You like to build things, learn and share your
              expertise with others.
            </p>
          </section>
          <section className={cx(styles.section, styles.championProgram)}>
            <div className={styles.point}>
              <FeatherIcon
                className={styles.pointIcon}
                name="github"
                size="4rem"
              />
              <h4>Learn the Craft</h4>
              <p>
                Serving as an open-source author or maintainer for an accepted
                public project related to New Relic One
              </p>
            </div>
            <div className={styles.point}>
              <FeatherIcon
                className={styles.pointIcon}
                name="trello"
                size="4rem"
              />
              <h4>Build your personal Brand</h4>
              <p>
                Authoring two pieces of content in the New Relic Explorers Hub /
                Dev website
              </p>
            </div>
            <div className={styles.point}>
              <FeatherIcon
                className={styles.pointIcon}
                name="users"
                size="4rem"
              />
              <h4>Mentor Others</h4>
              <p>
                Delivering and/or organizing two events focused on an
                observability platform theme in which New Relic plays a crucial
                role
              </p>
            </div>
            <Button
              as={ExternalLink}
              className={styles.nominateButton}
              href="https://forms.gle/Zkdub5e1x4MNqSKW9"
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
              <h2>What are the Builder's responsabilities?</h2>
              <p>
                As a New Relic Builder, we will expect you to create content to
                meet the program's needs, and you will get the help and guidance
                from our DevRel team on that. Be ready to mentor other members
                of our community, both in their technical growth as well as
                content production. Last but not least, you will be expected to
                to make and uphold commitments related to the program
              </p>
              <h2>What are the Requisits? *</h2>

              <ul>
                <h4>The Must haves:</h4>
                <li>Be comfortable creating content in English</li>
                <li>Have expertise in your tech stack of choice</li>
                <li>
                  Track record of producing engaging developer education
                  materials
                </li>
                <li>
                  No history of community conflict, CoC violations, or other
                  problematic behavior
                </li>
                <li>Commitment to the values of the program</li>
              </ul>

              <ul>
                <h4>It is nice to have:</h4>
                <li>Be Active on The Reliquary</li>
                <li>Have experience using New Relic products</li>
              </ul>

              <ul>
                <h4>You get extra brownie points if:</h4>
                <li>You have an existing audience</li>
                <li>Are weill known in other tech communities</li>
              </ul>
            </div>
            <img
              className={styles.img}
              src={uptimeEverythingHeader}
              alt="uptime everything header"
            />
          </section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

export default DeveloperChampionPage;
