import React from 'react';
import cx from 'classnames';
import SEO from '../components/Seo';
import PageLayout from '../components/PageLayout';
import FeatherIcon from '../components/FeatherIcon';
import styles from './relicans.module.scss';
import { teamMembers } from '../data/relicansData';
import { css } from '@emotion/core';

const RelicansPage = () => {
<<<<<<< HEAD
  const teamMembers = [
    {
      name: 'Aaron Bassett',
      pronouns: 'he/him',
      avatar: aaronAvatar,
      bio: (
        <p>
          Aaron Bassett is a recovering senior software engineer turned Senior
          Developer Advocate with{' '}
          <a
            href="https://mongodb.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            MongoDB
          </a>
          . He is a developer, public speaker, writer, and mentor; he spends
          most of his time making cool stuff and helping other people make{' '}
          <strong>unbelievably</strong> cool stuff 🔥🦄✨🚀
        </p>
      ),
      socials: [
        {
          name: 'twitter',
          url: 'https://twitter.com/aaronbassett',
        },
        {
          name: 'twitch',
          url: 'https://twitch.tv/aaronbassettdev',
        },
        {
          name: 'github',
          url: 'https://github.com/aaronbassett',
        },
        {
          name: 'instagram',
          url: 'https://www.instagram.com/aaronbassett',
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/aaronbassett/',
        },
      ],
    },
    {
      name: 'Aisha Blake',
      pronouns: 'she/her',
      avatar: aishaAvatar,
      bio: (
        <p>
          Aisha is a champion of feedback, a fierce accessibility advocate, and
          a steward of strong teams. A theatre kid turned tech community leader,
          she also co-organizes self.conference and Detroit Speakers in Tech. In
          her spare time, Aisha loves to sing karaoke and pet dogs.
        </p>
      ),
      socials: [
        {
          name: 'twitter',
          url: 'https://twitter.com/aishacodes',
        },
        {
          name: 'twitch',
          url: 'https://twitch.tv/aishablake',
        },
        {
          name: 'instagram',
          url: 'https://www.instagram.com/epsilonx2',
        },
        {
          name: 'linkedin',
          url: 'https://linkedin.com/in/aisha-blake-5bb2677a',
        },
      ],
    },
    {
      name: 'Ali Finkelstein',
      pronouns: 'she/her',
      avatar: aliAvatar,
      bio: (
        <p>
          Ali graduated from MIT with a Master’s of Engineering and Bachelor’s
          of Science in computer science and electrical engineering. She worked
          in cryptocurrency, SaaS, and healthcare before starting at New Relic.
          Ali is driven by innovation and loves security, SaaS, and start ups.
          But really, she considers herself a “jack of all trades,” as she is
          always striving to learn new skills and new topics. If you want to
          strike up a conversation with her, ask her about YouTube.
        </p>
      ),
      socials: [
        {
          name: 'twitter',
          url: 'https://twitter.com/endingwithali',
        },
        {
          name: 'twitch',
          url: 'https://twitch.tv/endingwithali',
        },
        {
          name: 'instagram',
          url: 'https://instagram.com/endingwithali',
        },
        {
          name: 'linkedin',
          url: 'https://linkedin.com/in/alifinkelsteina',
        },
      ],
    },
    {
      name: 'Chris Dabatos',
      pronouns: 'he/him',
      avatar: chrisAvatar,
      bio: (
        <p>
          Chris is a developer relations engineer for New Relic. He's been a
          front-end engineer since 2016. He has been documenting his journey as
          a self-taught developer on YouTube in hopes of inspiring aspiring
          developers around the world.
        </p>
      ),
      socials: [
        {
          name: 'twitter',
          url: 'https://www.twitter.com/realchrissean/',
        },
        {
          name: 'twitch',
          url: 'https://www.twitch.tv/chrissean/',
        },
        {
          name: 'instagram',
          url: 'https://www.instagram.com/realchrissean/',
        },
      ],
    },
    {
      name: 'Daniel Kim',
      pronouns: 'he/him',
      avatar: danielAvatar,
      bio: (
        <p>
          Daniel Kim (He/Him) is a Senior Developer Relations Engineer at New
          Relic and the founder of Bit Project, a 501(c)(3) nonprofit dedicated
          make tech accessible to underserved communities. He wants to inspire
          generations of students in tech to be the best they can be through
          inclusive, accessible developer education. He is passionate about
          diversity & inclusion in tech, good food, and dad jokes.
        </p>
      ),
      socials: [
        {
          name: 'twitter',
          url: 'https://twitter.com/journeyer_',
        },
        {
          name: 'twitch',
          url: 'https://twitch.tv/teachdaniel',
        },
        {
          name: 'instagram',
          url: 'https://instagram.com/journeyer',
        },
        {
          name: 'linkedin',
          url: 'https://linkedin.com/in/journeyer',
        },
      ],
    },
    {
      name: 'Danny Ramos',
      pronouns: 'he/him',
      avatar: dannyAvatar,
      bio: (
        <p>
          Danny is a Developer Relations Engineer at New Relic. He graduated
          film/theatre school from the University of Colorado Denver in 2014. He
          then went on to contribute in local productions and was awarded for
          his work alongside the Black Actors Guild - a Denver-based education
          and production company. After becoming a 2019 Comedy Work’s New Faces
          semi-finalist he decided to enroll into the Turing School of Software
          and Design where he learned backend software development.
        </p>
      ),
      socials: [
        {
          name: 'twitter',
          url: 'https://twitter.com/muydanny',
        },
        {
          name: 'twitch',
          url: 'https://twitch.tv/muydanny',
        },
        {
          name: 'instagram',
          url: 'https://instagram.com/muuydanny/',
        },
        {
          name: 'linkedin',
          url: 'https://linkedin.com/in/danny-ramos-j/',
        },
      ],
    },
    {
      name: 'Jonan Scheffler',
      pronouns: 'he/him',
      avatar: jonanAvatar,
      bio: (
        <p>
          Jonan Scheffler is the Director of Developer Relations at New Relic.
          He has a long history of breaking things in public and occasionally
          putting them back together again. His interest in physical computing
          often leads him to experiment with robotics and microelectronics,
          though his professional experience is more closely tied to cloud
          services and modern application development. In order to break things
          more effectively he is particularly excited about observability
          lately, and he’s committed to helping developers around the world live
          happier lives by showing them how to keep their apps and their dreams
          alive through the night.
        </p>
      ),
      socials: [
        {
          name: 'twitter',
          url: 'https://twitter.com/thejonanshow',
        },
        {
          name: 'twitch',
          url: 'https://twitch.tv/thejonanshow',
        },
        {
          name: 'instagram',
          url: 'https://www.instagram.com/thejonanshow',
        },
        {
          name: 'github',
          url: 'https://github.com/thejonanshow',
        },
      ],
    },
    {
      name: 'Kirk Haines',
      pronouns: 'he/him',
      avatar: kirkAvatar,
      bio: (
        <p>
          Kirk has been working in software and systems for almost 30 years,
          starting in 1992 with AIX RS/6000 and Linux systems. Despite years of
          experience on the devops side of the aisle, he is a software engineer
          at heart, a long time member of the Ruby community, a short time
          member of the Crystal community, and a strong believer in mentorship
          and in sharing knowledge. He works for New Relic as a Principal
          Developer Advocate these days, and is always looking for new things to
          learn and new ways to help others to succeed.
        </p>
      ),
      socials: [
        {
          name: 'twitter',
          url: 'https://twitter.com/wyhaines',
        },
        {
          name: 'twitch',
          url: 'https://twitch.tv/wyhaines',
        },
        {
          name: 'instagram',
          url: 'https://www.instagram.com/wyhaines',
        },
      ],
    },
    {
      name: 'Mia Moore',
      pronouns: 'they/them',
      avatar: miaAvatar,
      bio: (
        <p>
          Mia Moore (they/them) is a Developer Programs Manager at New Relic.
          Before joining New Relic, Mia was a Developer Advocate at IBM and has
          a background in content creation, marketing, and community management.
          They are enthusiastic about good storytelling in digital content. In
          their free time, Mia enjoys knitting, birding, and gaming.
        </p>
      ),
      socials: [
        {
          name: 'twitter',
          url: 'https://twitter.com/xomiamoore',
        },
        {
          name: 'twitch',
          url: 'https://www.twitch.tv/xomiamoore',
        },
        {
          name: 'instagram',
          url: 'https://www.instagram.com/xomiamoore',
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/miamoore',
        },
      ],
    },
    {
      name: 'Pachi Carlson',
      pronouns: 'she/her',
      avatar: pachiAvatar,
      bio: (
        <>
          <p>
            Pachi is a self-directed learner, who started her career as a
            Front-End developer and is passionate about HTML and CCS. She is
            originally from Brazil where she was born and raised, but now she
            lives in the USA with her husband, cats and bearded dragon.
          </p>
          <p>
            Very active online, Pachi felt in love with the community and even
            being a junior herself, she began teaching what she knew and sharing
            her learning Journey writing and live coding on Twitch, and that was
            how she got interested in Developer Relations. Now a Developer
            Relations Engineer at New Relic.
          </p>
        </>
      ),
      socials: [
        {
          name: 'twitter',
          url: 'https://twitter.com/pachicodes',
        },
        {
          name: 'twitch',
          url: 'https://twitch.tv/pachicodes',
        },
        {
          name: 'instagram',
          url: 'https://instagram.com/pachicodes',
        },
        {
          name: 'linkedin',
          url: 'https://linkedin.com/in/pachicodes',
        },
      ],
    },
    {
      name: 'Rachael Wright-Munn',
      pronouns: 'she/her',
      avatar: rachaelAvatar,
      bio: (
        <p>
          Rachael's been building software and web apps since 2012. Now she
          builds her open-source vue/rails app live on Twitch. Enough people
          thought that was cool, so she's been invited here.
        </p>
      ),
      socials: [
        {
          name: 'twitter',
          url: 'https://twitter.com/ChaelCodes',
        },
        {
          name: 'twitch',
          url: 'https://twitch.tv/ChaelCodes',
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/rachael-wright-chaelcodes/',
        },
      ],
    },
  ];

  const teamMemberPanels = teamMembers.map((teamMember) => {
    const socialItems = teamMember.socials.map((socialNetwork) => {
      return (
        <li key={socialNetwork}>
=======
  const teamMemberPanels = teamMembers.map((teamMember, i) => {
    const socialItems = teamMember.socials.map((socialNetwork, j) => {
      return (
        <li key={j}>
>>>>>>> 3c2a82d0dc1ffc9faf5830946bda003ed1ce0261
          <a href={socialNetwork.url}>
            <FeatherIcon name={socialNetwork.name} size="1.5rem" />
          </a>
        </li>
      );
    });

    return (
<<<<<<< HEAD
      <div key={teamMember} className={styles.point}>
        <img
          src={teamMember.avatar}
          className={styles.avatar}
          alt="Relican's member avatar"
=======
      <div className={styles.point} key={i}>
        <img
          alt={teamMember.name}
          src={teamMember.avatar}
          className={styles.avatar}
>>>>>>> 3c2a82d0dc1ffc9faf5830946bda003ed1ce0261
        />
        <h3>{teamMember.name}</h3>
        <h4>{teamMember.pronouns}</h4>
        <ul className={styles.socials}>{socialItems}</ul>
        {teamMember.bio}
      </div>
    );
  });

  return (
    <>
      <SEO />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="Relicans - The New Relic Developer Relations Team" />
        <PageLayout.Content>
          <section
            css={css`
              display: flex;
              justify-content: space-between;

              @media (max-width: 1080px) {
                flex-direction: column;
              }
            `}
          >
            <div
              css={css`
                flex: 1;
                margin-right: 1rem;
                margin-bottom: 1rem;
              `}
            >
              <p>
                We love software, and more than that we love the people who make
                it. Our entire platform is designed to make their lives easier.
                We’re here to help you write better software and we’re very
                proud to announce that we’re launching a developer relations
                team to do just that.
              </p>
              <p>
                You're going to be hearing a lot from us in the coming months as
                we join you out there on the internet, here's a quick preview of
                what we'll be up to:
              </p>
              <p>
                <ul>
                  <li>
                    Producing educational and inspirational content for anyone
                    who writes code, whether in development, site reliability
                    engineering, or IT operations.
                  </li>
                  <li>
                    Partnering with you as you explore the world of software,
                    not just on our platform but with all of the languages,
                    frameworks, and tools you love.
                  </li>
                  <li>
                    Inviting you to hang out with us for gaming, writing code,
                    playing music, and just having fun.
                  </li>
                </ul>
              </p>
              <p>
                You can find news of our efforts here on this page or on our
                Twitter account:{' '}
                <a href="https://twitter.com/therelicans">@therelicans</a>.
              </p>
            </div>
            <iframe
<<<<<<< HEAD
              title="youtubeVideo"
              width="560"
=======
              css={css`
                max-width: 560px;
                iframe {
                  width: 100%;
                  height: 315px;
                }
              `}
              width="560"
              title="Relicans Page Video"
>>>>>>> 3c2a82d0dc1ffc9faf5830946bda003ed1ce0261
              height="315"
              src="https://www.youtube.com/embed/OlW3g631ero"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </section>

          <h2 className={styles.meetTheRelicansHeading}>Meet the Relicans</h2>

          <section className={cx(styles.section, styles.meetTheTeam)}>
            {teamMemberPanels}
          </section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

export default RelicansPage;
