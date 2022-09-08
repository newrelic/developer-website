import React from 'react';
import danielAvatar from '../images/devrel/daniel-kim.jpg';
import annaAvatar from '../images/changelog/anna-alfano.jpg';
import leonAvatar from '../images/devrel/leon-adato.jpg';

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
    name: 'Anna Alfano',
    pronouns: 'she/her',
    avatar: annaAvatar,
    bio: (
      <p>Anna Alfano is an Associate Product Marketing Manager at New Relic.</p>
    ),
    socials: [{}],
  },
];
