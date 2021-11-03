import React from 'react';
import danielAvatar from '../images/relicans/daniel-kim.jpg';
import daynaAvatar from '../images/nerdlog/dayna-lord.jpg';
import nicaAvatar from '../images/nerdlog/nica-fee.jpg';

export const teamMembers = [
  {
    name: 'Nočnica Fee',
    pronouns: 'she/her',
    avatar: nicaAvatar,
    bio: (
      <p>
        Nočnica Fee is a dev advocate at New Relic specializing in cloud
        applications, serverless, and containerization. She writes regularly for
        The New Stack and has been published in Information Age and Forbes.
      </p>
    ),
    socials: [
      {
        name: 'twitch',
        url: 'https://twitch.tv/serverlessmom',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/serverlessmom',
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
];
