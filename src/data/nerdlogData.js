import React from 'react';
import aaronAvatar from '../images/devrel/aaron-bassett.jpg';
import danielAvatar from '../images/devrel/daniel-kim.jpg';
import dannyAvatar from '../images/devrel/danny-ramos.jpg';
import daynaAvatar from '../images/nerdlog/dayna-lord.jpg';
import kirkAvatar from '../images/devrel/kirk-haines.jpg';
import leonAvatar from '../images/devrel/leon-adato.jpg';
import laurenAvatar from '../images/devrel/lauren-lee.jpg';

export const teamMembers = [
  {
    name: 'Leon Adato',
    pronouns: 'he/him',
    avatar: leonAvatar,
    bio: (
      <>
        <p>
          Leon Adato is a Developer Relations Advocate at New Relic, and has
          held multiple industry certifications over his 33 years in IT
          including Cisco, Microsoft, A+, and more. His experience spans
          financial, healthcare, food and beverage, and other industries.
        </p>
        <p>
          Before coming to New Relic, he was a speaker and blogger in the
          monitoring and observability space for almost a decade. His expertise
          in IT began in 1989 and has led him through roles in classroom
          training, desktop support, server support, and software distribution.
        </p>
      </>
    ),
    socials: [
      {
        name: 'twitter',
        url: 'https://twitter.com/leonadato',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/adatole/',
      },
      {
        name: 'github',
        url: 'https://github.com/adatole',
      },
    ],
  },
  {
    name: 'Aaron Bassett',
    pronouns: 'he/him',
    avatar: aaronAvatar,
    bio: (
      <p>
        Aaron Bassett is a recovering senior software engineer turned Senior
        Developer Advocate with{' '}
        <a href="https://mongodb.com" target="_blank" rel="noreferrer">
          MongoDB
        </a>
        . He is a developer, public speaker, writer, and mentor; he spends most
        of his time making cool stuff and helping other people make{' '}
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
        then went on to contribute in local productions and was awarded for his
        work alongside the Black Actors Guild - a Denver-based education and
        production company. After becoming a 2019 Comedy Work’s New Faces
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
    name: 'Dayna Lord',
    pronouns: 'she/her',
    avatar: daynaAvatar,
    bio: (
      <p>
        Dayna Lord is a product marketing manager at New Relic focused on
        customer adoption.
      </p>
    ),
    socials: [
      {
        name: 'twitter',
        url: 'https://twitter.com/daynaslord',
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
        experience on the devops side of the aisle, he is a software engineer at
        heart, a long time member of the Ruby community, a short time member of
        the Crystal community, and a strong believer in mentorship and in
        sharing knowledge. He works for New Relic as a Principal Developer
        Advocate these days, and is always looking for new things to learn and
        new ways to help others to succeed.
      </p>
    ),
    socials: [
      {
        name: 'twitter',
        url: 'https://twitter.com/wyhaines',
      },
      {
        name: 'github',
        url: 'https://github.com/wyhaines',
      },
      {
        name: 'linkedin',
        url: 'https://linkedin.com/in/wyhaines',
      },
      {
        name: 'twitch',
        url: 'https://twitch.tv/wyhaines',
      },
    ],
  },
  {
    name: 'Lauren Lee',
    pronouns: 'she/her',
    avatar: laurenAvatar,
    bio: (
      <p>
        Lauren is a Sr. Developer Relations Engineer at New Relic. She is an
        English teacher turned empathetic software engineer. A curious optimist
        with a passion for creating accessible content, celebrating unique
        journeys to tech, and helping developers level up their skills. Lauren
        is the host of the{' '}
        <a href="https://webelongpodcast.com" target="_blank" rel="noreferrer">
          We Belong Here podcast
        </a>
        , which aims to interview career changers and folks that are
        diversifying the tech industry.
      </p>
    ),
    socials: [
      {
        name: 'twitter',
        url: 'https://twitter.com/lolocoding',
      },
      {
        name: 'twitch',
        url: 'https://twitch.tv/lolocoding',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/dev-lauren-lee/',
      },
      {
        name: 'instagram',
        url: 'https://instagram.com/lolocoding',
      },
    ],
  },
];
