import React from 'react';
import cx from 'classnames';
import SEO from '../components/Seo';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import PageLayout from '../components/PageLayout';
import ExternalLink from '../components/ExternalLink';
import FeatherIcon from '../components/FeatherIcon';
import devChampionHeader from '../images/developer-champion/developer-champions.jpg';
import uptimeEverythingHeader from '../images/developer-champion/uptime-everything-header-image.jpg';
import styles from './builders.module.scss';

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
                The <a href="http://community.newrelic.com">Reliquary</a>, our
                developer community, brings together experienced
                developers/DevOps people with those who are new to software
                development.
              </p>
              <p>
                Our goal with the reliquary is to make everyone feel welcome
                regardless of their background or current ability, recognize
                everyone's individuality and help them to find a way to learn
                that fits their needs, award members that are active and helpful
                and be a safe space where everyone is comfortable to teach,
                learn and grow, The New Relic Builders is an important piece to
                make sure these goals are reached.
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
              expertise with others. But the most important is that you CARE
              about the impact you can make on your community.
            </p>
            <strong>Here is what you get:</strong>
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
                You will develop the art of content production for the tech
                community by working alongside great content creators. You will
                be mentored by a Relican to level up your content creation
                skills.
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
                Gain exposure to build and grow your personal brand, while
                working on your portfolio and making connections with great
                people.
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
                There is no better way to learn than teaching! You will have the
                chance to further develop your skills and give back to a
                supportive community, helping others to grow.
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
                src={uptimeEverythingHeader}
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
                <li>Be an active member of The Reliquary,</li>
                <li>Have experience using New Relic products.</li>
              </ul>
              <hr />
              <ul>
                <h4>You get extra brownie points if:</h4>
                <li>You have an existing audience</li>
                <li>Are well known in other tech communities</li>
              </ul>
              <hr/>
              <Button
                as={ExternalLink}
                variant={Button.VARIANT.PRIMARY}
                href="https://forms.gle/Zkdub5e1x4MNqSKW9"
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

export default DeveloperChampionPage;
